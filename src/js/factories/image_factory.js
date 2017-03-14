import {open} from "./modal_factory";
import {
  modalImageClassName
} from "../utils/modal_utils";

export const imageClassName = "scalable-image";

export const didClick = (index) => () => open(index);

export const create = ({url}, index, openModal = true) => {
  const image = document.createElement("img");
  image.setAttribute("src", url);
  if (openModal) {
    image.onclick = didClick(index);
  }

  return image;
};

export const updateSize = (innerContent, imgNode) => {
  imgNode.setAttribute("style", `width: ${innerContent.clientWidth}px;`);
};

export const createAndAppendImages = (innerContent, imageContainer, images) => {
  const imageNodes = images.map((img, index) => create(img, index, false));
  imageNodes.forEach((imgNode) => {
    imgNode.classList.add(imageClassName);
    updateSize(innerContent, imgNode);
    imgNode.classList.add(modalImageClassName);
    imageContainer.appendChild(imgNode);
  });
  return imageNodes;
};
