import * as API from  "../config/api_image";
import * as ModalFactory from "./modal_factory";

export const didClick = (index) => {
  return () => {
    ModalFactory.open(index);
  };
};

export const create = ({url}, index, openModal = true) => {
  const image = document.createElement("img");
  image.setAttribute("src", url);
  if (openModal) {
    image.onclick = didClick(index);
  }
  return image;
};
