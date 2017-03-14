import {getRoot} from "../mount";
import {currentService} from "../service_selector";
import {create} from "./image_factory";
import {get} from '../api';

/**
 * Based on the selected service update the view
 * with the correct API.
 * @returns {Promise<void>}
 */
export function fromServiceSelector() {
  const root = getRoot();
  /*
   * Show Loading message
   */
  root.innerHTML = "<h1 class=\"loading\">Loading...</h1>";
  get(currentService).then(images => {
    root.innerHTML = "";
    images.forEach((imageData, index) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("image");
      const image = create(imageData, index);
      wrapper.appendChild(image);
      root.appendChild(wrapper);
    });
  });
}
