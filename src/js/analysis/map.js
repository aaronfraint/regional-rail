mapboxgl.accessToken =
  "pk.eyJ1IjoiYWFyb25kdnJwYyIsImEiOiJja2NvN2s5dnAwaWR2MnptbzFwYmd2czVvIn0.Fcc34gzGME_zHR5q4RnSOg";

const makeMap = () => {
  return new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v10",
    center: [-75.16362, 39.95238],
    zoom: 9.5,
  });
};

export { makeMap };
