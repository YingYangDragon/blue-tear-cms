import type { CollectionConfig } from 'payload'

export const Forms: CollectionConfig = {
  slug: 'forms',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'createdAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Optional description of what this form is for',
      },
    },
  ],
  timestamps: true,
}
