import "./css/analysis.css";

import { data_sources } from "./js/analysis/sources";
import { makeMap } from "./js/common/map";
import { map_layers } from "./js/analysis/layers";
import { wire_mouse_hover } from "./js/analysis/hover";
import { wire_mouse_click } from "./js/analysis/click";
import { load_taz_source } from "./js/analysis/api";
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

map.on("load", async function () {
  let params = get_query_params();
  console.log(params);

  let nice_name = decodeURI(params.zone_name);

  document.getElementById("zone-name").innerText =
    "Flow Analysis: " + nice_name;

  for (const src in data_sources) map.addSource(src, data_sources[src]);

  for (const lyr in map_layers) map.addLayer(map_layers[lyr]);

  wire_mouse_hover(map);

  wire_mouse_click(map);

  map.setFilter("zones", ["==", "zone_name", decodeURI(params.zone_name)]);
  map.setFilter("zones-fill", ["==", "zone_name", decodeURI(params.zone_name)]);

  load_taz_source(map, nice_name);
});

map.on("idle", () => {
  spinner.stop();
});
