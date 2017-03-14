/// <reference path="./config/giphy.ts" />
/// <reference path="./config/google.ts" />
/// <reference path="./config/flickr.ts" />
/// <reference path="./config/api_image.ts" />
namespace API {
  export let images: API.Image[];
  /**
   * List of supported services
   */
  export enum Service {
    Flickr,
    Giphy,
    Google,
  }

  /**
   * Get the data from the service and parse
   * it to a unified format
   * @param service
   * @returns {Promise<Image[]>}
   */
  export async function get(service: Service): Promise<API.Image[]> {
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
}
