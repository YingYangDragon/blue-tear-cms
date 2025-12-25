import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, integer, text } from '@keystone-6/core/fields';

export const Scene = list({
  access: allowAll,
  fields: {
    story: relationship({ ref: 'Story', many: false }),
    order: integer(),
    narrativeText: text({ ui: { displayMode: 'textarea' } }),
    intent: text(),
    notes: text({ ui: { displayMode: 'textarea' } }),
  },
});
