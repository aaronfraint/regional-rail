import { make_spinner } from "../common/spinner";
import { filter_selected_tazs } from "./filters";
import { reset_taz_selection } from "./constants";
import { zone_name_input, div_get_started, div_save_zone } from "./dom";

import {
  API_ROOT,
  URL_FOR_NEW_ZONE,
  URL_FOR_ZONE_GEOMS,
  URL_FOR_ZONE_NAMES,
} from "../common/api_urls";

import { is_visible, turn_off, turn_on } from "../common/helpers";

const refresh_zone_geojson = (map, new_zone_name) => {
  // get a new copy of the ZONE GROUP geojson layer

  let spinner = make_spinner();

  fetch(URL_FOR_ZONE_GEOMS, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      map.getSource("zones-geojson").setData(data);
      map.setFilter("zones", ["==", "zone_name", new_zone_name]);
      map.setFilter("zones-fill", ["==", "zone_name", new_zone_name]);
      spinner.stop();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

async function this_zone_name_exists(zone_name) {
  // get a list of all zone names

  let does_it_exist = false;

  await fetch(URL_FOR_ZONE_NAMES, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        if (item.zone_name == zone_name) {
          does_it_exist = true;
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return does_it_exist;
}

const add_zone_definition_to_database = async function (map, data) {
  let new_zone_name = data.zone_name;
  let it_exists = await this_zone_name_exists(new_zone_name);

  if (it_exists) {
    alert(
      "The zone name '" +
        new_zone_name +
        "' already exists, please use a different one!"
    );
    zone_name_input.value = "";
    zone_name_input.focus();
  } else {
    let spinner = make_spinner();

    fetch(URL_FOR_NEW_ZONE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        spinner.stop();
        refresh_zone_geojson(map, new_zone_name);

        reset_taz_selection();
        filter_selected_tazs(map);

        turn_off(div_save_zone);
        turn_on(div_get_started);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};

export {
  API_ROOT,
  URL_FOR_ZONE_GEOMS,
  refresh_zone_geojson,
  add_zone_definition_to_database,
};
