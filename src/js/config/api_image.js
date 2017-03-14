/**
 * Fetch data and ensure it is parsed to the universal format
 * @param uri
 * @param cookDataFormat
 * @returns {Promise<Image[]>}
 */
export function fetchAndParse(uri, cookDataFormat) {
  return fetch(uri)
    .then(data => data.json())
    .then(cookDataFormat);
}
