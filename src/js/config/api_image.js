/**
 * Fetch data and ensure it is parsed to the universal format
 * @param uri
 * @param cookDataFormat
 * @returns {Promise<Image[]>}
 */
export const fetchAndParse = (uri, cookDataFormat) => fetch(uri)
  .then((data) => data.json())
  .then(cookDataFormat);
