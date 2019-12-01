export default removeListElement;

function removeListElement(state) {
  const input = state.input;
  const parent = input.parentNode;

  const list = parent.querySelector("plete-list");

  if (list) {
    parent.removeChild(list);
    delete state.list;
  }
}
