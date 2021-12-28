import "./css/main.css";

import { data_sources } from "./js/zone_creation/sources";
import { makeMap } from "./js/zone_creation/map";
import { map_layers } from "./js/zone_creation/layers";
import { wire_mouse_hover } from "./js/zone_creation/hover";
import { wire_mouse_click } from "./js/zone_creation/click";

const map = makeMap();

map.on("load", function () {
  for (const src in data_sources) map.addSource(src, data_sources[src]);
  for (const lyr in map_layers) map.addLayer(map_layers[lyr]);

  wire_mouse_hover(map);

  wire_mouse_click(map);
});
