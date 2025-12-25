import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text, json, checkbox, timestamp } from '@keystone-6/core/fields';

export const AIPromptVersion = list({
  access: allowAll,
  fields: {
    prompt: relationship({ ref: 'AIPrompt.versions', many: false }),
    versionLabel: text({ validation: { isRequired: true } }),
    promptText: text({ ui: { displayMode: 'textarea' } }),
    inputSchema: json(),
    isActive: checkbox({ defaultValue: true }),
    notes: text({ ui: { displayMode: 'textarea' } }),
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
  },
});
