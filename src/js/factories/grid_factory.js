import * as Mount from "../mount";
import * as ServiceSelector from "../service_selector";
import * as ImageFactory from "./image_factory";
import * as API from '../api';

/**
 * Based on the selected service update the view
 * with the correct API.
 * @returns {Promise<void>}
 */
export async function fromServiceSelector() {
  const root = Mount.getRoot();
  /*
   * Show Loading message
   */
  root.innerHTML = "<h1 class=\"loading\">Loading...</h1>";
  const images = await API.get(ServiceSelector.currentService);
  root.innerHTML = "";
  images.forEach((imageData, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("image");
    const image = ImageFactory.create(imageData, index);
    wrapper.appendChild(image);
    root.appendChild(wrapper);
  });
}
