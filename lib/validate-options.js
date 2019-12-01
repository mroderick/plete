export default validateOptions;

function validateOptions(state) {
  const invalidInput =
    !(state.input instanceof HTMLElement) ||
    state.input.tagName.toLowerCase() !== "input" ||
    state.input.type !== "text";
  if (invalidInput) {
    throw new TypeError(
      `input option expected to be an input DOM element, but was: ${state.input}, with type ${state.input.type}`
    );
  }

  const invalidDataSrc = !(
    Array.isArray(state.dataSrc) || typeof state.dataSrc === "function"
  );
  if (invalidDataSrc) {
    throw new TypeError("dataSrc option expect to be an Array or a Function");
  }

  if (typeof state.autoFirst !== "boolean") {
    throw new TypeError("Expected autoFirst option to be a boolean");
  }

  if (typeof state.minChars !== "number" || state.minChars < 1) {
    throw new TypeError("Expected minChars option to be a positive integer");
  }

  if (typeof state.maxItems !== "number" || state.maxItems < 1) {
    throw new TypeError("Expected maxItems option to be a positive integer");
  }

  if (!["undefined", "function"].includes(typeof state.render)) {
    throw new TypeError("Expected render option to be a function or undefined");
  }

  if (!["undefined", "function"].includes(typeof state.busy)) {
    throw new TypeError("Expected busy option to be a function or undefined");
  }

  if (!["undefined", "function"].includes(typeof state.ready)) {
    throw new TypeError("Expected ready option to be a function or undefined");
  }

  if (!["undefined", "function"].includes(typeof state.select)) {
    throw new TypeError("Expected select option to be a function or undefined");
  }

  if (!["undefined", "string"].includes(typeof state.cssClass)) {
    throw new TypeError("Expected cssClass option to be a string or undefined");
  }
}
