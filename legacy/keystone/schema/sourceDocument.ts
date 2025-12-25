import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, json } from '@keystone-6/core/fields';

export const SourceDocument = list({
  access: allowAll,
  fields: {
    title: text({ validation: { isRequired: true } }),
    author: text(),
    sourceUrl: text(),
    originalFormat: text(),
    metadata: json(),

    // One document has many sections and pages
    sections: relationship({ ref: 'DocumentSection.sourceDocument', many: true }),
    pages: relationship({ ref: 'DocumentPage.sourceDocument', many: true }),

    // All images belonging to this document
    mediaAssets: relationship({ ref: 'MediaAsset.sourceDocument', many: true }),

    tags: relationship({ ref: 'Tag.sourceDocuments', many: true }),
  },
});
