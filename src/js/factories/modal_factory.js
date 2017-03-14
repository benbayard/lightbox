import * as Mount from "../mount"
import * as API from "../api"
import * as ImageFactory from "./image_factory"
import * as ButtonFactory from "./button_factory"
import * as ModalUtils from "../utils/modal_utils"

/**
 * Activate the mobile
 * and initializes the images.
 * @param id
 */
export const open = (id) => {
  ModalUtils.setActiveImage(id);
  const modal = Mount.getModalContainer();
  modal.innerHTML = "";
  modal.classList.add("active");

  const innerContent = document.createElement("section");
  innerContent.classList.add(ModalUtils.modalContentClassName);

  modal.appendChild(innerContent);

  const imageContainer = document.createElement("section");
  const imageNodes = API.images.map((img, index) => ImageFactory.create(img, index, false));
  imageContainer.classList.add(ModalUtils.modalImageContainerClassName);
  imageNodes.forEach((imgNode) => {
    imgNode.setAttribute("style", `width: ${innerContent.clientWidth}px;`);
    imgNode.classList.add(ModalUtils.modalImageClassName);
    imageContainer.appendChild(imgNode);
  });
  innerContent.appendChild(imageContainer);

  ModalUtils.updateInnerContainerSize(innerContent, imageNodes[ModalUtils.activeImage].clientHeight);
  ModalUtils.setImageContainerStyle(imageContainer, innerContent);

  const {nextButton, previousButton} = ButtonFactory.create();
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
  const modal = Mount.getModalContainer();
  modal.classList.remove("active");
};
