import {getServiceSelector} from "./mount";
import {Service} from "./api";
import {fromServiceSelector} from "./factories/grid_factory";

export let currentService = Service.Flickr;

export const init = () => {

    const selector = getServiceSelector();

    [
        Service.Giphy,
        Service.Google,
        Service.Flickr
    ].forEach((v) => {

        const el = document.createElement("option");

        el.setAttribute("value", `${v}`);
        if (v === currentService) {

            el.setAttribute("selected", "selected");

        }
        const name = v === Service.Giphy
      ? "Giphy"
      : v === Service.Google
        ? "Google"
        : "Flickr";

        el.textContent = name;
        selector.appendChild(el);

    });

    selector.onchange = (event) => {

        currentService = parseInt(event.target.value, 10);
        fromServiceSelector();

    };

};
