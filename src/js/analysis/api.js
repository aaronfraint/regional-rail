import { URL_FOR_FLOWS } from "../common/api_urls";

const load_taz_source = async (map, nice_name) => {
  console.log("here");
  await map.addSource("taz-geojson", {
    type: "geojson",
    data: URL_FOR_FLOWS + "/?dest_name=" + nice_name,
  });

  map.addLayer(
    {
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
    "zones-fill"
  );
  map.addLayer(
    {
      id: "taz-line",
      type: "line",
      source: "taz-geojson",
      layout: {},
      paint: {
        "line-opacity": 1,
        "line-color": "white",
        "line-width": 0.5,
      },
    },
    "zones-fill"
  );
};

export { load_taz_source };
