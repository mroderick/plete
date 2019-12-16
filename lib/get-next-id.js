export default getNextId;

/**
 * Used for generating DOM ids that will never repeat
 * @param  {string} prefix A prefix to use for the first part of the string
 * @return {string}        A DOM id
 */
function getNextId(prefix) {
  getNextId.id++;

  return `${prefix}-${getNextId.id}`;
}

getNextId.id = -1;
