import { button_to_select_another_destination } from "./dom";

// import { API_ROOT, add_zone_definition_to_database } from "./api";
// import { filter_selected_tazs } from "./filters";
// import { SELECTED_TAZS, reset_taz_selection } from "./constants";
// import {
//   button_to_select_tazs,
//   button_to_clear_tazs,
//   button_to_save_tazs,
//   zone_name_input,
//   div_get_started,
//   div_save_zone,
//   is_visible,
//   turn_on,
//   turn_off,
// } from "./dom";

const button_logic = (map) => {
  // button to start the selection process
  button_to_select_another_destination.onclick = () => {
    window.location = "./index.html";
  };
};

// const layer_logic = (map) => {
//   map.on("click", "taz-fill", function (e) {
//     if (is_visible(div_save_zone)) {
//       let tazid = e.features[0].properties.tazt;

//       // remove this TAZ if it was already in the selected list
//       let existing_idx = SELECTED_TAZS.indexOf(tazid);
//       if (existing_idx !== -1) {
//         SELECTED_TAZS.splice(existing_idx, 1);
//       }
//       // otherwise, add it to the selection
//       else {
//         SELECTED_TAZS.push(tazid);
//       }

//       filter_selected_tazs(map);
//     }
//   });

//   map.on("click", "zones-fill", function (e) {
//     let props = e.features[0].properties;
//     console.log(props);

//     let url = "./analysis.html/?zone_name=" + props.zone_name;
//     window.location = url;
//   });
// };

const wire_mouse_click = (map) => {
  button_logic(map);
  // layer_logic(map);
};

export { wire_mouse_click };
