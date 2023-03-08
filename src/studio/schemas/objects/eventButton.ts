import { defineType } from 'sanity';

export default defineType({
  title: 'Event page',
  name: 'eventButton',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    {
      title: 'Button label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Event link',
      name: 'href',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
});
