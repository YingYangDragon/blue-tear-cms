import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, integer } from '@keystone-6/core/fields';

export const DocumentSection = list({
  access: allowAll,
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique' }),
    summary: text(),

    // Logical ordering within document
    sectionOrder: integer(),

    // Which document this belongs to
    sourceDocument: relationship({ ref: 'SourceDocument.sections', many: false }),

    // Pages under this section
    pages: relationship({ ref: 'DocumentPage.section', many: true }),

    // Media assets associated with this section
    mediaAssets: relationship({ ref: 'MediaAsset.relatedSection', many: true }),
  },
});
