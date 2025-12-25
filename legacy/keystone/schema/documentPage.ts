import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, integer } from '@keystone-6/core/fields';

export const DocumentPage = list({
  access: allowAll,
  fields: {
    pageNumber: integer({ validation: { isRequired: true } }),
    heading: text(),
    text: text({ ui: { displayMode: 'textarea' } }),

    // Owning document + optional section
    sourceDocument: relationship({ ref: 'SourceDocument.pages', many: false }),
    section: relationship({ ref: 'DocumentSection.pages', many: false }),

    // All images on this page
    mediaAssets: relationship({ ref: 'MediaAsset.relatedPage', many: true }),
  },
});
