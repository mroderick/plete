import clearSuggestions from "./clear-suggestions.js";
import debounce from "./debounce.js";
import handleInputKeydown from "./handle-input-keydown.js";
import suggest from "./suggest.js";

export default attachEventListeners;

function attachEventListeners(state) {
  const debounceDelay = typeof state.dataSrc === "function" ? 120 : 0;
  const debouncedSuggest = debounce(suggest.bind(null, state), debounceDelay);

  state.input.addEventListener("keydown", handleInputKeydown.bind(null, state));
  state.input.addEventListener("input", debouncedSuggest);
  state.input.addEventListener("paste", suggest.bind(null, state));
  state.input.addEventListener("blur", clearSuggestions.bind(null, state));
}
