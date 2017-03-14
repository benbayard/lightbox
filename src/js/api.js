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
export async function get(service) {
  switch (service) {
    case Service.Giphy:
      images = await API.fetchAndParse(Giphy.URI(), Giphy.cookDataFormat);
      break;
    case Service.Google:
      images = await API.fetchAndParse(Google.URI(), Google.cookDataFormat);
      break;
    case Service.Flickr:
      images = await API.fetchAndParse(Flickr.URI(), Flickr.cookDataFormat);
      break;
    default: throw new Error("This service is not supported");
  }

  return images;
}
