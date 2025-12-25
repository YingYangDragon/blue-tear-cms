import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, json, text, integer, select, timestamp } from '@keystone-6/core/fields';

export const AIRun = list({
  access: allowAll,
  fields: {
    productionRun: relationship({
      ref: 'ProductionRun.aiRuns',
      many: false,
    }),
    promptVersion: relationship({
      ref: 'AIPromptVersion',
      many: false,
    }),
    inputData: json(),
    outputText: text({ ui: { displayMode: 'textarea' } }),
    outputData: json(),
    tokenCount: integer(),
    costUsd: integer(),
    status: select({
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Completed', value: 'completed' },
        { label: 'Failed', value: 'failed' },
      ],
      defaultValue: 'pending',
    }),
    errorMessage: text({ ui: { displayMode: 'textarea' } }),
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
  },
});
