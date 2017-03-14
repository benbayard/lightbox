import * as Giphy from "./config/giphy";
import * as Google from "./config/google";
import * as Flickr from "./config/flickr";
import * as API from "./config/api_image";
export let images;
/**
 * List of supported services
 */
export const Service = {
  Flickr: 0,
  Giphy: 1,
  Google: 2,
};

/**
 * Get the data from the service and parse
 * it to a unified format
 * @param service
 * @returns {Promise<Image[]>}
 */
export function get(service) {
  let uri;
  let cookDataFormat;
  switch (service) {
    case Service.Giphy:
      uri = Giphy.URI();
      cookDataFormat = Giphy.cookDataFormat;
      break;
    case Service.Google:
      uri = Google.URI();
      cookDataFormat = Google.cookDataFormat;
      break;
    case Service.Flickr:
      uri = Flickr.URI();
      cookDataFormat = Flickr.cookDataFormat;
      break;
    default: throw new Error("This service is not supported");
  }

  return API.fetchAndParse(uri, cookDataFormat).then((imgs) => {
    images = imgs;
    return images;
  });
}
