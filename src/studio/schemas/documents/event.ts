import { defineType } from 'sanity';

export default defineType({
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Event name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});
