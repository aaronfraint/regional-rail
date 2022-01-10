const layer_logic = (map) => {
  map.on("click", "zones-fill", function (e) {
    let props = e.features[0].properties;
    console.log(props);

    let url = "./analysis.html?zone_name=" + props.zone_name;
    window.location = url;
  });
};

const wire_mouse_click = (map) => {
  layer_logic(map);
};

export { wire_mouse_click };
