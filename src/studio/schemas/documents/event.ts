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
      title: 'Event page',
      name: 'eventPage',
      type: 'eventButton',
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
      type: 'location',
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
