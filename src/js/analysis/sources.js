import {
  API_ROOT,
  URL_FOR_ZONE_GEOMS,
  URL_FOR_FLOWS,
} from "../common/api_urls";

const data_sources = {
  "zones-geojson": {
    type: "geojson",
    data: URL_FOR_ZONE_GEOMS,
  },
  "rr-lines-src": {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/48b0b600abaa4ca1a1bacf917a31c29a_0.geojson",
  },
  "rr-stops-src": {
    type: "geojson",
    data: "https://opendata.arcgis.com/datasets/64eaa4539cf4429095c2c7bf25c629a2_0.geojson",
  },
};

export { data_sources };
