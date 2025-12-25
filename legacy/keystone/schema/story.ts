import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, select } from '@keystone-6/core/fields';

export const Story = list({
  access: allowAll,
  fields: {
    title: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: 'textarea' } }),
    sourceExcerpts: relationship({ ref: 'Excerpt', many: true }),
    status: select({
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Approved', value: 'approved' },
      ],
      defaultValue: 'draft',
    }),
    tags: relationship({ ref: 'Tag.stories', many: true }),
  },
});
