import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanity } from '../studio';

const builder = imageUrlBuilder(sanity);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export const urlForImage = (source: SanityImageSource) => {
  return builder.image(source);
};
