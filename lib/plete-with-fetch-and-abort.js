import Plete from "./plete.js";
import fetchDataSrc from "./fetch-data-src.js";

export default pleteWithFetchAndAbort;

const DEFAULT_OPTIONS = {
  urlTemplate: undefined,
  mapData: identity
};

/* istanbul ignore next  */
function identity(data) {
  return data;
}

/**
 * Returns a Plete object that uses `fetch` as the dataSrc.
 *
 * When AbortController is supported, it will be use to abort existing
 * requests to avoid out-of-order problems.
 *
 * @param  {object} options This object will be passed through to the Plete constructor and can thus receive the same
 *                          properties
 * @param  {string} options.urlTemplate - A template for the url, using "{query}" as a token to be replaced with what
 *                                        the user types
 * @param  {function} [options.mapData] - Optional function that transforms the reponse data to the Plete data format.
 *                                        When omitted, the response data passes through as-is.
 *
 * @return {object}         A Plete instance
 */
function pleteWithFetchAndAbort(options) {
  const opts = Object.assign({}, DEFAULT_OPTIONS, options);
  const urlTemplate = opts.urlTemplate;
  const mapData = opts.mapData;
  const fetchOptions = opts.fetchOptions;

  if (typeof urlTemplate !== "string" || !urlTemplate.includes("{query}")) {
    throw new TypeError(
      "urlTemplate option expected to be a string containing '{query}'"
    );
  }

  if (typeof mapData !== "function" || mapData.length !== 1) {
    throw new TypeError("mapData option expected to be a unary function");
  }

  if ("dataSrc" in opts) {
    throw new TypeError(
      "pleteWithFetchAndAbort does not use a dataSrc option, but uses urlTemplate and mapData options"
    );
  }

  opts.dataSrc = fetchDataSrc.bind(
    null,
    window.fetch,
    urlTemplate,
    mapData,
    fetchOptions
  );
  delete opts.urlTemplate;
  delete opts.mapData;

  return new Plete(opts);
}
