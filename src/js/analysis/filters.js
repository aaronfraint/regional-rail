import { SELECTED_TAZS } from "./constants";

const filter_selected_tazs = (map) => {
  ["selected-taz", "selected-taz-outline"].forEach((layername) => {
    map.setFilter(layername, ["in", "tazt", ...SELECTED_TAZS]);
  });
};

export { filter_selected_tazs };
