import "./css/header.css";
import "./css/boxoverlay.css";
import "./css/spinner.css";
import "./css/buttons.css";
import "./css/analysis.css";

import { data_sources } from "./js/analysis/sources";
import { makeMap } from "./js/common/map";
import { map_layers } from "./js/analysis/layers";
import { wire_mouse_hover } from "./js/analysis/hover";
import { wire_mouse_click } from "./js/analysis/click";
import { load_taz_source, load_graph } from "./js/analysis/api";
import { make_spinner } from "./js/common/spinner";

const spinner = make_spinner();

const map = makeMap();

const get_query_params = () => {
  let searchParams = new URLSearchParams(window.location);
  let query = searchParams.get("search");
  if (query == "") {
    return null;
  } else {
    let result = {};

    query.split("&").forEach((param) => {
      param = param.replace("?", "");
      let parts = param.split("=");
      result[parts[0]] = parts[1];
    });
    return result;
  }
};

let params = get_query_params();
let SELECTED_NAME = decodeURI(params.zone_name);

async function setup_map(map) {
  map.on("load", async function () {
    document.getElementById("zone-name").innerText = SELECTED_NAME;

    for (const src in data_sources) map.addSource(src, data_sources[src]);

    for (const lyr in map_layers) map.addLayer(map_layers[lyr]);

    wire_mouse_hover(map);

    wire_mouse_click(map);

    map.setFilter("zones", ["==", "zone_name", decodeURI(params.zone_name)]);
    map.setFilter("zones-fill", [
      "==",
      "zone_name",
      decodeURI(params.zone_name),
    ]);

    load_taz_source(map, SELECTED_NAME);

    map.resize();
  });
}

map.on("idle", () => {
  spinner.stop();
});

async function setup() {
  await setup_map(map);
  load_graph(SELECTED_NAME);
}

setup();
