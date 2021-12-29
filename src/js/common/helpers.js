const is_visible = (elem) => {
  let value = elem.style.display;
  return value == "inline";
};

const turn_off = (elem) => {
  elem.style.setProperty("display", "none");
};
const turn_on = (elem) => {
  elem.style.setProperty("display", "inline");
};

export { is_visible, turn_off, turn_on };
