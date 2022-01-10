const map_layers = {
  "zones-fill": {
    id: "zones-fill",
    type: "fill",
    source: "zones-geojson",
    layout: {},
    paint: {
      "fill-opacity": 0.1,
      "fill-color": "red",
    },
    // filter: ["==", "zone_name", "none"],
  },
  zones: {
    id: "zones",
    type: "line",
    source: "zones-geojson",
    layout: {},
    paint: {
      "line-opacity": 0.7,
      "line-color": "red",
      "line-width": 4,
    },
    // filter: ["==", "zone_name", "none"],
  },
  "selected-zone": {
    id: "selected-zone",
    type: "fill",
    source: "zones-geojson",
    layout: {},
    paint: {
      "fill-opacity": 0.7,
      "fill-color": "blueviolet",
    },
    filter: ["==", "zone_name", "none"],
  },
  "rr-lines": {
    id: "rr-lines",
    type: "line",
    source: "rr-lines-src",
    layout: {},
    paint: {
      "line-width": 2,
      "line-opacity": 1,
      "line-color": "black",
    },
  },
  "rr-stops": {
    id: "rr-stops",
    type: "circle",
    source: "rr-stops-src",
    layout: {},
    paint: {
      "circle-radius": 4,
      "circle-opacity": 0.7,
      "circle-color": "black",
    },
  },
};

export { map_layers };
