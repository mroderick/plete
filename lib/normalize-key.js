export default normalizeKey;

/**
 * Normalizes the values of `event.key` across browsers, specifically aimed at
 * ensuring IE / Edge compatibility.
 *
 * The function only normalizes (and tests) the values that are actually used
 * in _this_ library. Other values also have inconsistencies across browsers,
 * they are ignored in this implementation in order to keep file size down.
 * *
 * @param  {String} key The value to normalize
 * @return {String}     A normalized value, the same across all browsers
 */
function normalizeKey(key) {
  if (key === "Up") {
    return "ArrowUp";
  }
  if (key === "Down") {
    return "ArrowDown";
  }
  if (key === "Esc") {
    return "Escape";
  }

  return key;
}
