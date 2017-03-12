/// <reference path="./api_image.ts" />
namespace Giphy {
  export const URI = (key = "dc6zaTOxFJmzC") => `http://api.giphy.com/v1/gifs/trending?api_key=${key}`;
  export interface Gif {
    slug: string;
    images: {
      fixed_height: {
        url: string;
      };
    };
  }
  export interface DataFormat {
    data: Gif[];
  }
  export const cookDataFormat = ({data: images}: DataFormat): API.Image[] => (
    images.map(({slug, images: {fixed_height: {url}}}) => ({
      title: slug,
      url,
    }))
  );
}
