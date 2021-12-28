const button_to_select_tazs = document.getElementById("button-to-select-tazs");
const button_to_clear_tazs = document.getElementById("button-to-clear-tazs");
const button_to_save_tazs = document.getElementById("button-to-save-tazs");
const zone_name_input = document.getElementById("input-zone-name");
const div_get_started = document.getElementById("get-started");
const div_save_zone = document.getElementById("save-zone");

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

export {
  button_to_select_tazs,
  button_to_clear_tazs,
  button_to_save_tazs,
  zone_name_input,
  div_get_started,
  div_save_zone,
  is_visible,
  turn_off,
  turn_on,
};
