import Plete from "../lib/main.js";

export { getOptions, setupTest };

function getOptions(overrides) {
  const input = document.createElement("input");
  input.type = "text";
  document.body.appendChild(input);

  const defaults = {
    autoFirst: true,
    input: input,
    dataSrc: [
      "Albania",
      "Belgium",
      "Croatia",
      "Denmark",
      "Estonia",
      "Finland",
      "Ireland",
      "Norway",
      "Portugal",
      "Spain",
      "United Kingdom"
    ],
    // eslint-disable-next-line no-empty-function
    select: function() {},
    minChars: 3,
    maxItems: 5,
    busy: undefined,
    ready: undefined,
    render: undefined
  };

  return Object.assign({}, defaults, overrides);
}

function setupTest(overrides = {}) {
  document.body.innerHTML = "";

  const form = document.createElement("form");
  document.body.appendChild(form);

  const input = document.createElement("input");
  input.type = "text";
  input.id = "plete";
  input.tabIndex = 1;

  form.appendChild(input);

  // this is needed to be able to test moving focus away from the autocompleted input
  const focusableElement = document.createElement("input");
  focusableElement.type = "text";
  focusableElement.id = "give-me-focus";
  // https://github.com/jsdom/jsdom/issues/2586#issuecomment-561871527
  focusableElement.tabIndex = 2;

  form.appendChild(focusableElement);

  const opts = Object.assign(
    {
      input: input
    },
    overrides
  );

  // eslint-disable-next-line no-new
  new Plete(getOptions(opts));

  return input;
}
