import client from 'src/sanity';
import imageUrlBuilder from '@sanity/image-url';

const useSanityImage = () => {
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => {
    return builder.image(source);
  };

  return urlFor;
};

export default useSanityImage;
