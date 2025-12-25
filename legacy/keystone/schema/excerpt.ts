import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship } from '@keystone-6/core/fields';

export const Excerpt = list({
  access: allowAll,
  fields: {
    sourceDocument: relationship({ ref: 'SourceDocument', many: false }),
    text: text({ ui: { displayMode: 'textarea' } }),
    locationReference: text(),
    tags: relationship({ ref: 'Tag.excerpts', many: true }),
    notes: text({ ui: { displayMode: 'textarea' } }),
  },
});
