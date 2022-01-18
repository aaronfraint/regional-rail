import {
  URL_FOR_FLOWS,
  URL_FOR_FLOWS_W_DEMOGRAPHICS,
} from "../common/api_urls";

import { turn_on } from "../common/helpers";

import { graph } from "./dom";

let load_graph = async (nice_name) => {
  let url =
    URL_FOR_FLOWS_W_DEMOGRAPHICS +
    "/?dest_name=" +
    nice_name +
    "&demo_type=bucket_pct_non_english&metric_column=total_trips";

  const ctx = document.getElementById("myChart").getContext("2d");

  fetch(url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let data_labels = [];
      let data_values = [];

      let hardcode_labels = {
        1: "< 20%",
        2: "21-40%",
        3: "41-60%",
        4: "61-80%",
        5: "81-100%",
        null: "n/a",
      };

      data.forEach((el) => {
        let data_bucket = el.bucket_pct_non_english;

        data_labels.push(hardcode_labels[data_bucket]);
        data_values.push(el.trip_sum);
      });

      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: data_labels,
          datasets: [
            {
              label: "Total Trips using Regional Rail",
              data: data_values,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              title: {
                display: true,
                text: "% of people who do not speak English at home, by TAZ",
              },
            },
          },
        },
      });

      turn_on(graph);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

let load_flow_geojson = async (map, nice_name) => {
  await map.addSource("taz-geojson", {
    type: "geojson",
    data: URL_FOR_FLOWS + "/?dest_name=" + nice_name,
  });
};

let load_taz_source = async (map, nice_name) => {
  await load_flow_geojson(map, nice_name).then(() => {
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
  });
};

export { load_taz_source, load_graph };
