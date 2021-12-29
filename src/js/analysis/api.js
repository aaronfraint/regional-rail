import { make_spinner } from "../common/spinner";
import { filter_selected_tazs } from "./filters";
import { reset_taz_selection } from "./constants";
import { turn_on, turn_off } from "../common/helpers";

const refresh_zone_geojson = (map) => {
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
  let it_exists = await this_zone_name_exists(data.zone_name);

  if (it_exists) {
    alert(
      "The zone name '" +
        data.zone_name +
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
        refresh_zone_geojson(map);

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

export { refresh_zone_geojson, add_zone_definition_to_database };
