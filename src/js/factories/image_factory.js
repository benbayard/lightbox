import {open} from "./modal_factory";

export const didClick = (index) => () => open(index);

export const create = ({url}, index, openModal = true) => {
  const image = document.createElement("img");

  image.setAttribute("src", url);
  if (openModal) {
    image.onclick = didClick(index);
  }

  return image;
};
