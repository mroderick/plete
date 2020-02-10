export default processResponse;

async function processResponse(promise, mapData, defaultResult) {
  const response = await promise;
  const result = await response.json();

  if (!Array.isArray(result)) {
    return defaultResult;
  }

  return mapData(result);
}
