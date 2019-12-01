import clearSuggestions from "./clear-suggestions.js";

export default select;

function select(state, index) {
  if (!state.list) {
    return;
  }

  if (index < 0) {
    state.select(undefined);
    return;
  }
  const selectedElement = state.list.children[index];
  const value = selectedElement.getAttribute("value");

  state.select(value);
  state.input.value = selectedElement.getAttribute("title");
  clearSuggestions(state);
}
