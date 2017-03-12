/// <reference path="./mount.ts" />
/// <reference path="./api.ts" />
/// <reference path="./grid_factory.ts" />

namespace ServiceSelector {
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

    (selector as HTMLSelectElement).onchange = (event: KeyboardEvent) => {
      currentService = parseInt((event.target as any).value, 10);
      GridFactory.fromServiceSelector();
    };
  };
}
