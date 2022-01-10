import { add_popup_to_map, clear_popups } from "../common/popups";

const use_pointer_when_hovering = (map, layername) => {
  // change mouse tip to pointer finger
  map.on("mouseenter", layername, () => {
    map.getCanvas().style.cursor = "pointer";
  });

  // change mouse tip upon leaving feature
  map.on("mouseleave", layername, function (e) {
    map.getCanvas().style.cursor = "";
  });
};

const add_popup_to_zones = (map) => {
  map.on("mousemove", "zones-fill", (e) => {
    clear_popups();
    let zone_name = e.features[0].properties.zone_name;
    let msg = "<h3>" + zone_name + "</h3>";
    add_popup_to_map(map, msg, e);
    map.setFilter("selected-zone", ["==", "zone_name", zone_name]);
  });
  map.on("mouseleave", "zones-fill", () => {
    clear_popups();
    map.setFilter("selected-zone", ["==", "zone_name", "none"]);
  });
};

const wire_mouse_hover = (map) => {
  /**
   * Show interactivity tooltip hints for all layers defined within
   *
   * @param {mapboxgl.Map} map - The map object for the page
   */
  var layers = ["zones-fill"];

  layers.forEach((lyr) => use_pointer_when_hovering(map, lyr));

  add_popup_to_zones(map);
};

export { wire_mouse_hover };
