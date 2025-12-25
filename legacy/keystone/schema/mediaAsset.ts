import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { select, text, relationship, json } from '@keystone-6/core/fields';

export const MediaAsset = list({
  access: allowAll,
  fields: {
    type: select({
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Audio', value: 'audio' },
        { label: 'Video', value: 'video' },
        { label: 'Other', value: 'other' },
      ],
    }),
    title: text(),
    description: text({ ui: { displayMode: 'textarea' } }),

    // Location of file, ideally cloud storage URL
    fileReference: text({ validation: { isRequired: true } }),

    // Optional metadata blob (e.g., EXIF, size, dimensions)
    metadata: json(),

    // Link back to content
    sourceDocument: relationship({ ref: 'SourceDocument.mediaAssets', many: false }),
    relatedPage: relationship({ ref: 'DocumentPage.mediaAssets', many: false }),
    relatedSection: relationship({ ref: 'DocumentSection.mediaAssets', many: false }),

    // Tags for categorization
    tags: relationship({ ref: 'Tag.mediaAssets', many: true }),
  },
});
