/// <reference path="./mount.ts" />
/// <reference path="./service_selector.ts" />
/// <reference path="./image_factory.ts" />

namespace GridFactory {
  /**
   * Based on the selected service update the view
   * with the correct API.
   * @returns {Promise<void>}
   */
  export async function fromServiceSelector() {
    const root = Mount.getRoot();
    const images = await API.get(ServiceSelector.currentService);
    /*
     * Empty the container
     */
    root.innerHTML = "";
    images.forEach((imageData, index) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("image");
      const image = ImageFactory.create(imageData, index);
      wrapper.appendChild(image);
      root.appendChild(wrapper);
    });
  }
}
