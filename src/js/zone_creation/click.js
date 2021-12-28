import { API_ROOT, add_zone_definition_to_database } from "./api";
import { filter_selected_tazs } from "./filters";
import { SELECTED_TAZS, reset_taz_selection } from "./constants";
import {
  button_to_select_tazs,
  button_to_clear_tazs,
  button_to_save_tazs,
  zone_name_input,
  div_get_started,
  div_save_zone,
  is_visible,
  turn_on,
  turn_off,
} from "./dom";

const button_logic = (map) => {
  // button to start the selection process
  button_to_select_tazs.onclick = () => {
    turn_on(div_save_zone);
    turn_off(div_get_started);
  };

  // button to clear out the selection
  button_to_clear_tazs.onclick = () => {
    turn_off(div_save_zone);
    turn_on(div_get_started);

    reset_taz_selection();
    filter_selected_tazs(map);
  };

  // button to submit the selection to the API
  button_to_save_tazs.onclick = () => {
    let data = {
      zone_name: zone_name_input.value,
      tazt: SELECTED_TAZS,
    };

    console.log(data);

    add_zone_definition_to_database(map, data);
  };
};

const layer_logic = (map) => {
  map.on("click", "taz-fill", function (e) {
    if (is_visible(div_save_zone)) {
      let tazid = e.features[0].properties.tazt;

      // remove this TAZ if it was already in the selected list
      let existing_idx = SELECTED_TAZS.indexOf(tazid);
      if (existing_idx !== -1) {
        SELECTED_TAZS.splice(existing_idx, 1);
      }
      // otherwise, add it to the selection
      else {
        SELECTED_TAZS.push(tazid);
      }

      filter_selected_tazs(map);
    }
  });
};

const wire_mouse_click = (map) => {
  button_logic(map);
  layer_logic(map);
};

export { wire_mouse_click };
