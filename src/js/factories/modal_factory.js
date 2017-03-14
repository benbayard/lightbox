import {
  getModalContainer
} from "../mount";
import {images} from "../api";
import {create as createImageFactory} from "./image_factory";
import {create as createButtonFactory} from "./button_factory";
import {
  setActiveImage,
  modalContentClassName,
  modalImageClassName,
  modalImageContainerClassName,
  updateInnerContainerSize,
  setImageContainerStyle,
  activeImage
} from "../utils/modal_utils";

/**
 * Activate the mobile
 * and initializes the images.
 * @param id
 */
export const open = (id) => {
    setActiveImage(id);
    const modal = getModalContainer();

    modal.innerHTML = "";
    modal.classList.add("active");

    const innerContent = document.createElement("section");

    innerContent.classList.add(modalContentClassName);

    modal.appendChild(innerContent);

    const imageContainer = document.createElement("section");
    const imageNodes = images.map((img, index) => createImageFactory(img, index, false));

    imageContainer.classList.add(modalImageContainerClassName);
    imageNodes.forEach((imgNode) => {
      imgNode.setAttribute("style", `width: ${innerContent.clientWidth}px;`);
      imgNode.classList.add(modalImageClassName);
      imageContainer.appendChild(imgNode);
    });
    innerContent.appendChild(imageContainer);

    updateInnerContainerSize(innerContent, imageNodes[activeImage].clientHeight);
    setImageContainerStyle(imageContainer, innerContent);

    const {nextButton, previousButton} = createButtonFactory();

    innerContent.appendChild(nextButton);
    innerContent.appendChild(previousButton);

    const modalBackground = document.createElement("section");

    modalBackground.innerHTML = "hi";
    modalBackground.classList.add("modal-background");
    modalBackground.onclick = close;
    modal.appendChild(modalBackground);

};

/**
 * Deactivate the modal.
 */
export const close = () => {
    const modal = getModalContainer();
    modal.classList.remove("active");
};
