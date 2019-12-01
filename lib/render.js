import addListElement from "./add-list-element.js";
import renderItem from "./render-item.js";
import highlight from "./highlight.js";
import select from "./select.js";

export default render;

function render(state, data) {
  addListElement(state, select);
  const boundRenderItem = renderItem.bind(null, state);

  data.map(boundRenderItem).forEach(function(item) {
    state.list.appendChild(item);
  });

  state.selectedIndex = state.autoFirst ? 0 : -1;
  highlight(state, state.selectedIndex);
}
