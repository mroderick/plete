import removeListElement from "./remove-list-element.js";

export default clearSuggestions;

function clearSuggestions(state) {
  state.selectedIndex = -1;
  removeListElement(state);
  state.input.removeAttribute("aria-controls");
  state.input.removeAttribute("aria-activedescendant");
  state.plete.setAttribute("aria-expanded", "false");
}
