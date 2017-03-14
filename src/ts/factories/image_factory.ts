/// <reference path="../config/api_image.ts" />
/// <reference path="./modal_factory.ts" />
namespace ImageFactory {
  export const didClick = (index: number) => {
    return () => {
      ModalFactory.open(index);
    };
  };

  export const create = ({url}: API.Image, index: number, openModal = true): Element => {
    const image = document.createElement("img");
    image.setAttribute("src", url);
    if (openModal) {
      image.onclick = didClick(index);
    }
    return image;
  };
}
