import proxyquire from "proxyquire";

export { loadDefault };

function loadDefault(module, config) {
  return proxyquire.noCallThru().load(module, config).default;
}
