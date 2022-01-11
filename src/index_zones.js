import "./css/header.css";
import "./css/boxoverlay.css";
import "./css/buttons.css";
// import "./css/zone_creation.css";

import { makeMap } from "./js/common/map";
import { map_layers } from "./js/zones/layers";
import { data_sources } from "./js/zones/sources";
import { wire_mouse_hover } from "./js/zones/hover";
import { wire_mouse_click } from "./js/zones/click";

const map = makeMap();

map.on("load", function () {
  for (const src in data_sources) map.addSource(src, data_sources[src]);
  for (const lyr in map_layers) map.addLayer(map_layers[lyr]);

  wire_mouse_hover(map);
  wire_mouse_click(map);

  map.resize();
});
