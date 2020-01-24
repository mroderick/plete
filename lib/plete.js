import attachEventListeners from "./attach-event-listeners.js";
import validateOptions from "./validate-options.js";
import ensurePleteElement from "./ensure-plete-element.js";
import setAutoComplete from "./set-auto-complete.js";

export default Plete;

const DEFAULT_OPTIONS = {
  autoFirst: true,
  maxItems: 5,
  minChars: 3,
  render: undefined
};

function Plete(options) {
  // eslint-disable-next-line this/no-this
  if (!(this instanceof Plete)) {
    throw new Error("Plete should be called with the `new` keyword");
  }

  const state = Object.assign({}, DEFAULT_OPTIONS, options);

  validateOptions(state);
  setAutoComplete(state);
  ensurePleteElement(state);
  attachEventListeners(state);
}
