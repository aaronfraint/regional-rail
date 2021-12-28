// import { add_popup_to_map, clear_popups } from "./popups";
// import { is_visible, div_save_zone } from "./dom";

// const use_pointer_when_hovering = (map, layername) => {
//   // change mouse tip to pointer finger
//   map.on("mouseenter", layername, () => {
//     if (is_visible(div_save_zone)) {
//       map.getCanvas().style.cursor = "pointer";
//     }
//   });

//   // change mouse tip upon leaving feature
//   map.on("mouseleave", layername, function (e) {
//     map.getCanvas().style.cursor = "";
//   });
// };

// const add_popup_to_zones = (map) => {
//   map.on("mousemove", "zones-fill", (e) => {
//     clear_popups();
//     let msg = "<h3>" + e.features[0].properties.zone_name + "</h3>";
//     add_popup_to_map(map, msg, e);
//   });
//   map.on("mouseleave", "zones-fill", () => {
//     clear_popups();
//   });
// };

// const wire_mouse_hover = (map) => {
//   /**
//    * Show interactivity tooltip hints for all layers defined within
//    *
//    * @param {mapboxgl.Map} map - The map object for the page
//    */
//   var layers = ["taz-fill"];

//   layers.forEach((lyr) => use_pointer_when_hovering(map, lyr));

//   add_popup_to_zones(map);
// };

// export { wire_mouse_hover };
