export default indexFrom;

function indexFrom(state, direction) {
  if (!state.list) {
    return -1;
  }

  const minIndex = 0;
  const maxIndex = state.list.children.length - 1;
  const newIndex = state.selectedIndex + direction;
  const actualIndex = Math.min(Math.max(newIndex, minIndex), maxIndex);

  return actualIndex;
}
