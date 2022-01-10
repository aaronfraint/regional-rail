import {
  button_to_select_another_destination,
  button_to_make_zone,
} from "./dom";

const button_logic = (map) => {
  // button to start the selection process
  button_to_select_another_destination.onclick = () => {
    window.location = "./zones.html";
  };

  button_to_make_zone.onclick = () => {
    window.location = "./create_zone.html";
  };
};

const wire_mouse_click = (map) => {
  button_logic(map);
};

export { wire_mouse_click };
