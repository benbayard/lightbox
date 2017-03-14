export const URI = (key = "dc6zaTOxFJmzC") => `http://api.giphy.com/v1/gifs/trending?api_key=${key}`;

export const cookDataFormat = ({data: images}) => (
  images.map(({slug, images: {fixed_height: {url}}}) => ({
    title: slug,
    url,
  }))
);
