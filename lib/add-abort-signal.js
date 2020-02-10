export default addAbortSignal;

const AbortController = window.AbortController;
const RUNTIME_HAS_ABORTCONTROLLER = Boolean(AbortController);

/**
 * Returns a new options object, with a `signal` property added, when the
 * runtime supports the AbortController
 *
 * @param  {object} options existing fetch options
 * @return {object}      improved fetch options
 */
function addAbortSignal(options) {
  const signalOptions = RUNTIME_HAS_ABORTCONTROLLER && {
    // eslint-disable-next-line compat/compat
    signal: new AbortController().signal
  };

  return Object.assign({}, options, signalOptions);
}
