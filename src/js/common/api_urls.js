const generate_api_root = () => {
  var current_env = process.env.NODE_ENV;

  let production_api =
    "https://regional-rail-api.planninglab.org/api/regional-model";
  let local_api = "http://localhost:8000/api/regional-model";

  if (current_env == "development") {
    var url = local_api;
  } else {
    var url = production_api;
  }
  return url;
};

const API_ROOT = generate_api_root();

const URL_FOR_ZONE_GEOMS = API_ROOT + "/zone-geoms";
const URL_FOR_ZONE_NAMES = API_ROOT + "/zone-names";
const URL_FOR_NEW_ZONE = API_ROOT + "/new-taz-group/";
const URL_FOR_FLOWS = API_ROOT + "/flows";
const URL_FOR_FLOWS_W_DEMOGRAPHICS = API_ROOT + "/demographic-flows";

export {
  API_ROOT,
  URL_FOR_NEW_ZONE,
  URL_FOR_ZONE_GEOMS,
  URL_FOR_ZONE_NAMES,
  URL_FOR_FLOWS,
  URL_FOR_FLOWS_W_DEMOGRAPHICS,
};
