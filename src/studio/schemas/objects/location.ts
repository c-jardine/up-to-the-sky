import { defineType } from 'sanity';

export default defineType({
  title: 'Location',
  name: 'location',
  type: 'object',
  fields: [
    {
      title: 'Location name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
});
