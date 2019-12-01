export default removeHighlight;

function removeHighlight(state) {
  if (!state.list) {
    return;
  }

  const oldItem = state.list.querySelector("plete-item.highlight");
  if (oldItem) {
    oldItem.classList.remove("highlight");
  }
}
