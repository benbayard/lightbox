import * as Mount from "./mount";
import * as API from "./api";
import * as GridFactory from "./factories/grid_factory";

export let currentService = API.Service.Flickr;

export const init = () => {
  const selector = Mount.getServiceSelector();
  [
    API.Service.Giphy,
    API.Service.Google,
    API.Service.Flickr,
  ].forEach((v) => {
    const el = document.createElement("option");
    el.setAttribute("value", `${v}`);
    if (v === currentService) {
      el.setAttribute("selected", "selected");
    }
    const name = v === API.Service.Giphy
      ? "Giphy"
      : v === API.Service.Google
        ? "Google"
        : "Flickr";
    el.textContent = name;
    selector.appendChild(el);
  });

  selector.onchange = (event) => {
    currentService = parseInt(event.target .value, 10);
    GridFactory.fromServiceSelector();
  };
};
