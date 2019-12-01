import clearSuggestions from "./clear-suggestions.js";
import moveHighlight from "./move-highlight.js";
import normalizeKey from "./normalize-key.js";
import select from "./select.js";

export default handleInputKeydown;

const SPECIAL_KEYS = ["ArrowUp", "ArrowDown", "Enter", "Escape", "Tab"];

function handleInputKeydown(state, event) {
  const key = normalizeKey(event.key);

  if (!SPECIAL_KEYS.includes(key)) {
    return;
  }

  switch (key) {
    case "Tab":
      // if the list is not open or nothing is selected, just return here
      if (!state.list || state.selectedIndex === -1) {
        return;
      }
      select(state, state.selectedIndex);
      break;

    case "Enter":
      // if the list is not open, do nothing
      if (!state.list) {
        return;
      }

      // the suggestions are visible, but nothing is selected, prevent default
      if (state.selectedIndex === -1) {
        event.preventDefault();
        return;
      }

      select(state, state.selectedIndex);
      event.preventDefault();
      break;

    case "Escape":
      state.selectedIndex = -1;
      select(state, state.selectedIndex);
      clearSuggestions(state);
      break;

    case "ArrowUp":
    case "ArrowDown":
      moveHighlight(state, key === "ArrowUp" ? -1 : 1);
      event.preventDefault();
      break;

    /* istanbul ignore next This can't be tested as the function handles all special keys */
    default:
      throw new Error("Unhandled special key");
  }
}
