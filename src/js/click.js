import { Spinner } from "spin.js";

import { API_ROOT } from "./api";

import {
  button_to_select_tazs,
  button_to_clear_tazs,
  button_to_save_tazs,
  zone_name_input,
} from "./dom";

let SELECTED_TAZS = [];

const return_to_initial_state = (map) => {
  button_to_select_tazs.classList.remove("selected-button");
  button_to_clear_tazs.style.setProperty("display", "none");
  button_to_save_tazs.style.setProperty("display", "none");
  map.setFilter("selected-taz", ["in", "tazt", ...SELECTED_TAZS]);
  map.setFilter("selected-taz-outline", ["in", "tazt", ...SELECTED_TAZS]);
};

const button_logic = (map) => {
  button_to_select_tazs.onclick = () => {
    if (button_to_select_tazs.classList.contains("selected-button")) {
      return_to_initial_state(map);
    } else {
      button_to_select_tazs.classList.add("selected-button");
      button_to_clear_tazs.style.setProperty("display", "inline");
      button_to_save_tazs.style.setProperty("display", "inline");
      zone_name_input.style.setProperty("display", "inline");
    }
  };

  button_to_clear_tazs.onclick = () => {
    SELECTED_TAZS = [];
    return_to_initial_state(map);
  };

  button_to_save_tazs.onclick = () => {
    var opts = {
      lines: 13, // The number of lines to draw
      length: 38, // The length of each line
      width: 17, // The line thickness
      radius: 45, // The radius of the inner circle
      scale: 1, // Scales overall size of the spinner
      corners: 1, // Corner roundness (0..1)
      speed: 1, // Rounds per second
      rotate: 0, // The rotation offset
      animation: "spinner-line-fade-quick", // The CSS animation name for the lines
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: "#ffffff", // CSS color or array of colors
      fadeColor: "transparent", // CSS color or array of colors
      top: "50%", // Top position relative to parent
      left: "50%", // Left position relative to parent
      shadow: "0 0 1px transparent", // Box-shadow for the lines
      zIndex: 2000000000, // The z-index (defaults to 2e9)
      className: "spinner", // The CSS class to assign to the spinner
      position: "absolute", // Element positioning
    };
    var target = document.getElementById("foo");
    var spinner = new Spinner(opts).spin(target);
    let api_path =
      API_ROOT +
      "/new-taz-group/?zone_name=" +
      zone_name_input.value +
      "&q=" +
      SELECTED_TAZS.join("&q=");

    console.log(api_path);

    var request = new XMLHttpRequest();
    // request.open("GET", api_path, true);
    // request.setRequestHeader("Access-Control-Allow-Origin", "*");
    // request.onload = function () {
    //   if (this.status >= 200 && this.status < 400) {
    //     var json = JSON.parse(this.response);
    //     map.getSource("destination-geojson").setData(json);
    //     console.log("Updated");
    //     map.setPaintProperty("destinations", "fill-opacity", 0.7);
    //     spinner.stop();
    //   }
    // };
    // request.send();
  };
};

const wire_mouse_click = (map) => {
  button_logic(map);

  map.on("click", "taz-fill", function (e) {
    if (button_to_select_tazs.classList.contains("selected-button")) {
      let props = e.features[0].properties;
      let tazid = props.tazt;

      // remove this TAZ if it was already in the list
      let existing_idx = SELECTED_TAZS.indexOf(tazid);
      if (existing_idx !== -1) {
        SELECTED_TAZS.splice(existing_idx, 1);
      } else {
        SELECTED_TAZS.push(tazid);
      }
      map.setFilter("selected-taz", ["in", "tazt", ...SELECTED_TAZS]);
      map.setFilter("selected-taz-outline", ["in", "tazt", ...SELECTED_TAZS]);
    }
  });
};

export { wire_mouse_click };
