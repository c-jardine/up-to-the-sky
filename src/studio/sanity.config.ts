import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

const config = defineConfig({
  name: 'default',
  title: '',

  basePath: '/studio',
  projectId: 'p5d2frdu',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});

export default config;
