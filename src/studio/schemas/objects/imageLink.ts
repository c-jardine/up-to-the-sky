import { defineType } from 'sanity';

export default defineType({
  title: 'Image Link',
  name: 'imageLink',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Alt',
      name: 'alt',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
  ],
});
