import highlight from "./highlight.js";
import indexFrom from "./index-from.js";
import removeHighlight from "./remove-highlight.js";

export default moveHighlight;

function moveHighlight(state, direction) {
  removeHighlight(state);

  const index = indexFrom(state, direction);

  highlight(state, index);
  state.selectedIndex = index;
}
