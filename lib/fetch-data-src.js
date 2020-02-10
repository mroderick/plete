import addAbortSignal from "./add-abort-signal.js";
import processResponse from "./process-response.js";

export default fetchDataSrc;

function fetchDataSrc(fetch, urlTemplate, mapData, fetchOptions, query) {
  const defaultResult = [];
  const url = urlTemplate.replace("{query}", query);
  const promise = fetch(url, addAbortSignal(fetchOptions));

  try {
    return processResponse(promise, mapData, defaultResult);
  } catch (error) {
    if (error.name === "AbortError") {
      return defaultResult;
    }

    throw error;
  }
}
