const map_layers = {
  // destinations: {
  //   id: "destinations",
  //   type: "fill",
  //   source: "destination-geojson",
  //   layout: {},
  //   paint: {
  //     "fill-opacity": 0.7,
  //     "fill-color": {
  //       property: "trip_density",
  //       default: "white",
  //       stops: [
  //         [0, "#edf8fb"],
  //         [0.0000000003, "#b3cde3"],
  //         [0.000000003, "#8c96c6"],
  //         [0.0000003003, "#88419d"],
  //         [0.00001, "black"],
  //       ],
  //     },
  //   },
  // },

  "taz-fill": {
    id: "taz-fill",
    type: "fill",
    source: "taz-tiles",
    "source-layer": "TAZ_2010",
    layout: {},
    paint: {
      "fill-opacity": 0,
      "fill-color": "black",
    },
  },
  "taz-outline": {
    id: "taz-outline",
    type: "line",
    source: "taz-tiles",
    "source-layer": "TAZ_2010",
    layout: {},
    paint: {
      "line-width": 0.8,
      "line-opacity": 0.2,
      "line-color": "black",
    },
  },
  "selected-taz": {
    id: "selected-taz",
    type: "fill",
    source: "taz-tiles",
    "source-layer": "TAZ_2010",
    layout: {},
    paint: {
      "fill-opacity": 0.5,
      "fill-color": "yellow",
    },
    filter: ["==", "tazt", "-1"],
  },
  "selected-taz-outline": {
    id: "selected-taz-outline",
    type: "line",
    source: "taz-tiles",
    "source-layer": "TAZ_2010",
    layout: {},
    paint: {
      "line-opacity": 0.8,
      "line-color": "black",
      "line-width": 2,
    },
    filter: ["==", "tazt", "-1"],
  },
  "rr-lines": {
    id: "rr-lines",
    type: "line",
    source: "rr-lines-src",
    layout: {},
    paint: {
      "line-width": 4,
      "line-opacity": 0.4,
      "line-color": "blue",
    },
  },
  "rr-stops": {
    id: "rr-stops",
    type: "circle",
    source: "rr-stops-src",
    layout: {},
    paint: {
      "circle-radius": 6,
      "circle-opacity": 0.7,
      "circle-color": "red",
    },
  },
};

export { map_layers };
