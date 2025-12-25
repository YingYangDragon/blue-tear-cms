import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, checkbox } from '@keystone-6/core/fields';

export const ProductionPath = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: 'textarea' } }),
    steps: relationship({ ref: 'ProductionStep', many: true }),
    isActive: checkbox({ defaultValue: true }),
  },
});
