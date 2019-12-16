export default renderItem;

function renderItem(state, value) {
  const item = document.createElement("plete-item");
  item.setAttribute("aria-role", "option");

  const valueIsString = typeof value === "string";
  const attrValue = valueIsString ? value : value.id;
  const label = valueIsString ? value : value.label;

  item.setAttribute("value", attrValue);
  item.setAttribute("title", label);

  if (typeof state.render === "function") {
    item.innerHTML = state.render(value);
  } else {
    item.textContent = label;
  }

  return item;
}
