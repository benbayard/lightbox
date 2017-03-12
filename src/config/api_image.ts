namespace API {
  /**
   * The universal image format to coerce every
   * thing in to.
   */
  export interface Image {
    url: string;
    title: string;
  }

  /**
   * Fetch data and ensure it is parsed to the universal format
   * @param uri
   * @param cookDataFormat
   * @returns {Promise<Image[]>}
   */
  export function fetchAndParse<T>(uri: string, cookDataFormat: (data: T) => Image[]): Promise<Image[]> {
    return fetch(uri)
      /*
       * We have to tell typescript we know better
       * because fetch does not know the API is
       * conformed to our type.
       */
      .then(data => data.json() as any as T)
      .then(cookDataFormat);
  }
}
