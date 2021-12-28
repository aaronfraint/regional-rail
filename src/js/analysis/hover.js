import { add_popup_to_map, clear_popups } from "./popups";
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

const add_popup_to_tazs = (map) => {
  map.on("mousemove", "taz-fill", (e) => {
    clear_popups();
    let msg =
      "<p>" +
      e.features[0].properties.total_trips +
      " began here and ended in the destination zone</p>";
    add_popup_to_map(map, msg, e);
  });
  map.on("mouseleave", "taz-fill", () => {
    clear_popups();
  });
};

const wire_mouse_hover = (map) => {
  add_popup_to_tazs(map);
};

export { wire_mouse_hover };
