import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, select, relationship, checkbox } from '@keystone-6/core/fields';

export const ProductionStep = list({
  access: allowAll,
  fields: {
    key: text({ validation: { isRequired: true } }),
    name: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: 'textarea' } }),
    type: select({
      options: [
        { label: 'AI', value: 'ai' },
        { label: 'Human', value: 'human' },
        { label: 'Script', value: 'script' },
      ],
      validation: { isRequired: true },
    }),
    defaultPrompt: relationship({
      ref: 'AIPrompt',
      many: false,
    }),
    isActive: checkbox({ defaultValue: true }),
    notes: text({ ui: { displayMode: 'textarea' } }),
  },
});
