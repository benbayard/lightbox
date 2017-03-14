export const URI = (
  key = "f698ceba2e65f3374501d890a8fb6354",
  setID = "72157626579923453"
) => `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${key}&photoset_id=${setID}&format=json&nojsoncallback=1`;

export const toImageSrc = ({farm, server, id, secret}) =>
  `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

export const cookDataFormat = ({"photoset": {photo}}) => (
  photo.map((image) => ({
    "title": image.title,
    "url": toImageSrc(image)
  }))
);
