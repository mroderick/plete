export default highlight;

function highlight(state, index) {
  if (index >= 0) {
    const item = state.list.querySelectorAll("plete-item")[index];
    if (item) {
      item.classList.add("highlight");
    }
  }
}
