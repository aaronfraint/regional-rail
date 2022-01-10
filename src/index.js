import "./css/landing.css";
import { makeMap } from "./js/common/map";

document.getElementById("link-to-new-zone").onclick = () => {
  window.location = "./create_zone.html";
};

Array.from(document.getElementsByClassName("link-to-all-zones")).forEach(
  (el) => {
    el.onclick = () => {
      window.location = "./zones.html";
    };
  }
);
const map = makeMap();
map.on("load", function () {
  console.log("hello world");
});
