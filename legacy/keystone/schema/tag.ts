import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship } from '@keystone-6/core/fields';

export const Tag = list({
  access: allowAll,
  ui: { isHidden: true },
  fields: {
    name: text(),
    sourceDocuments: relationship({ ref: 'SourceDocument.tags', many: true }),
    excerpts: relationship({ ref: 'Excerpt.tags', many: true }),
    stories: relationship({ ref: 'Story.tags', many: true }),
    mediaAssets: relationship({ ref: 'MediaAsset.tags', many: true }),
  },
});
