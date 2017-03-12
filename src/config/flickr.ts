/// <reference path="./api_image.ts" />
namespace Flickr {
  export const URI = (
    key = "f698ceba2e65f3374501d890a8fb6354",
    setID = "72157626579923453",
  // tslint:disable-next-line:max-line-length
  ) => `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${key}&photoset_id=${setID}&format=json&nojsoncallback=1`;

  export interface Image {
    farm: string;
    server: string;
    id: string;
    secret: string;
    title: string;
  }
  export const toImageSrc = ({farm, server, id, secret}: Image) => (
    `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
  );

  export interface DataFormat {
    photoset: {
      photo: Image[];
    };
  };

  export const cookDataFormat = ({photoset: {photo}}: DataFormat): API.Image[] => (
    photo.map((image) => ({
      title: image.title,
      url: toImageSrc(image),
    }))
  );
}
