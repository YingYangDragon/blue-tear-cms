import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship } from '@keystone-6/core/fields';

export const AIPrompt = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    purpose: text(),
    notes: text({ ui: { displayMode: 'textarea' } }),
    versions: relationship({
      ref: 'AIPromptVersion.prompt',
      many: true,
    }),
  },
});
