import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, select, json, text, timestamp } from '@keystone-6/core/fields';

export const ProductionRun = list({
  access: allowAll,
  fields: {
    step: relationship({ ref: 'ProductionStep', many: false }),
    status: select({
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Blocked', value: 'blocked' },
        { label: 'Completed', value: 'completed' },
        { label: 'Failed', value: 'failed' },
      ],
      defaultValue: 'pending',
    }),
    inputRefs: json(),
    outputRefs: json(),
    aiRuns: relationship({ ref: 'AIRun.productionRun', many: true }),
    notes: text({ ui: { displayMode: 'textarea' } }),
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
    completedAt: timestamp(),
  },
});
