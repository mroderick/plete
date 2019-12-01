import removeListElement from "./remove-list-element.js";

export default clearSuggestions;

function clearSuggestions(state) {
  state.selectedIndex = -1;
  removeListElement(state);
}
