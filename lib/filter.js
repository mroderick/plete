export default filter;

function filter(state) {
  const inputValue = state.input.value;

  if (Array.isArray(state.dataSrc)) {
    // search for all the characters individually
    const string = inputValue
      .split("")
      .map(function(c) {
        return "\\" + c;
      })
      .join(".*");
    const regex = new RegExp(string, "i");

    if (typeof state.dataSrc[0] === "string") {
      return state.dataSrc.filter(v => regex.test(v));
    }

    return state.dataSrc.filter(v => {
      return regex.test(v.label);
    });
  }

  if (typeof state.dataSrc === "function") {
    return state.dataSrc(inputValue);
  }

  throw new Error("Unsupported dataSrc type");
}
