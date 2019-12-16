export default mouseDownHandler;

function mouseDownHandler(event) {
  // Prevent the default mousedowm, which ensures the input is not blurred.
  // The actual selection will happen on click. This also ensures dragging the
  // cursor away from the list item will cancel the selection
  event.preventDefault();
}
