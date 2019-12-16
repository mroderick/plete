export default setAutoComplete;

function setAutoComplete(state) {
  state.input.setAttribute("aria-autocomplete", "list");
}
