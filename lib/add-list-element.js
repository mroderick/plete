import removeListElement from "./remove-list-element.js";

export default addListElement;

function addListElement(state, select) {
  const input = state.input;
  const parent = input.parentNode;

  removeListElement(state);

  const list = document.createElement("plete-list");

  list.setAttribute("style", getStyles(input));

  if (state.cssClass) {
    list.setAttribute("class", state.cssClass);
  }
  parent.appendChild(list);

  list.addEventListener("mousedown", function(event) {
    // Prevent the default mousedowm, which ensures the input is not blurred.
    // The actual selection will happen on click. This also ensures dragging the
    // cursor away from the list item will cancel the selection
    event.preventDefault();
  });

  // The click event is fired even if the corresponding mousedown event has called preventDefault
  list.addEventListener("click", function(event) {
    const element = event.target.closest("plete-item");

    // Only select on left click
    if (!element || event.button !== 0) {
      return;
    }

    event.preventDefault();

    const index = Array.from(
      element.closest("plete-list").querySelectorAll("plete-item")
    ).indexOf(element);

    select(state, index);
  });

  state.list = list;
}

function getStyles(input) {
  const left = input.offsetLeft;
  const top = input.offsetTop + input.offsetHeight;
  const width = input.offsetWidth;

  return `top: ${top}px; left: ${left}px; width: ${width}px;`;
}
