const map_layers = {
  "taz-fill": {
    id: "taz-fill",
    type: "fill",
    source: "taz-geojson",
    layout: {},
    paint: {
      "fill-opacity": 0.8,
      "fill-color": {
        property: "trip_density",
        default: "white",
        stops: [
          [0, "#edf8fb"],
          [0.0000000003, "#b3cde3"],
          [0.000000003, "#8c96c6"],
          [0.0000003003, "#88419d"],
          [0.00001, "black"],
        ],
      },
    },
  },
  "taz-line": {
    id: "taz-line",
    type: "line",
    source: "taz-geojson",
    layout: {},
    paint: {
      "line-opacity": 1,
      "line-color": "black",
    },
  },
  "zones-fill": {
    id: "zones-fill",
    type: "fill",
    source: "zones-geojson",
    layout: {},
    paint: {
      "fill-opacity": 0.1,
      "fill-color": "red",
    },
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
