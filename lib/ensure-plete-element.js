export default ensurePleteElement;

function ensurePleteElement(state) {
  state.plete = state.input.closest("plete");

  if (!state.plete) {
    state.plete = document.createElement("plete");
    state.input.parentNode.appendChild(state.plete);
    state.plete.appendChild(state.input);
  }

  state.plete.setAttribute("aria-role", "combobox");
  state.plete.setAttribute("aria-expanded", "false");
}
