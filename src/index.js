import "./css/landing.css";

const generate_api_root = () => {
  var current_env = process.env.NODE_ENV;

  let production_api =
    "https://regional-model-api-aemlm.ondigitalocean.app/api/regional-model";
  let local_api = "http://localhost:8000/api/regional-model";

  if (current_env == "development") {
    var url = local_api;
  } else {
    var url = production_api;
  }
  return url;
};

const API_ROOT = generate_api_root();
const URL_FOR_ZONE_NAMES = API_ROOT + "/zone-names";

const add_options_to_select = async () => {
  let select = document.getElementById("zone-name");

  await fetch(URL_FOR_ZONE_NAMES, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        let opt = document.createElement("option");
        opt.value = item.zone_name;
        opt.innerHTML = item.zone_name;
        select.appendChild(opt);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

add_options_to_select();

document.getElementById("link-to-analysis").onclick = () => {
  let zone_name = document.getElementById("zone-name").value;
  window.location = "./analysis.html?zone_name=" + zone_name;
};

document.getElementById("link-to-new-zone").onclick = () => {
  window.location = "./create_zone.html";
};
