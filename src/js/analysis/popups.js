const make_popup = () =>
  new mapboxgl.Popup({
    closeButton: false,
    className: "i-am-a-popup",
  });

const add_popup_to_map = (map, html_msg, target) => {
  var popup = make_popup();
  popup.setLngLat(target.lngLat).setHTML(html_msg).addTo(map);
};

const clear_popups = () => {
  var popup = document.getElementsByClassName("mapboxgl-popup");
  if (popup.length) {
    popup[0].remove();
  }
};

export { add_popup_to_map, clear_popups };
