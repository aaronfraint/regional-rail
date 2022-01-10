const map_layers = {
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
  "zones-fill": {
    id: "zones-fill",
    type: "fill",
    source: "zones-geojson",
    layout: {},
    paint: {
      "fill-opacity": 0.1,
      "fill-color": "red",
    },
    filter: ["==", "zone_name", "none"],
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
