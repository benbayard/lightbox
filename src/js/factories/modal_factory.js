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
  /**
   * We have to wait here, otherwise
   * the animation will happen which causes
   * a jarring user experience.
   * */
  setImmediate(() => imageContainer.classList.add('animate'));

  window.onresize = () => {
    setImmediate(() => imageContainer.classList.remove('animate'));
    setImmediate(() => {
      imageNodes.forEach(i => i.setAttribute("style", `width: ${innerContent.clientWidth}px;`));
      updateInnerContainerSize(innerContent, imageNodes[activeImage].clientHeight);
      setImageContainerStyle(imageContainer, innerContent);
      setImmediate(() => imageContainer.classList.add('animate'));
    });
  };
};

/**
 * Deactivate the modal.
 */
export const close = () => {
  const modal = getModalContainer();
  modal.classList.remove("active");
  modal.innerHTML = "";
  /**
   * Allow the modal memory to be garbage collected
   * */
  window.onresize = null;
};
