import { createClient } from 'next-sanity';
import config from './sanity.config';

export const sanity = createClient({
  ...config,
  useCdn: true,
  apiVersion: '2022-03-13',
});
