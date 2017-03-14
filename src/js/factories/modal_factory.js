import {
  getModalContainer
} from "../mount";
import {images} from "../api";
import {
  createAndAppendImages,
  updateSize,
  imageClassName
} from "./image_factory";
import {create as createButtonFactory} from "./button_factory";
import {
  setActiveImage,
  modalContentClassName,
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
  imageContainer.classList.add(modalImageContainerClassName);
  innerContent.appendChild(imageContainer);
  const imageNodes = createAndAppendImages(innerContent, imageContainer, images);

  updateInnerContainerSize(innerContent, imageNodes[activeImage].clientHeight);
  setImageContainerStyle(imageContainer, innerContent);

  const {nextButton, previousButton} = createButtonFactory();

  innerContent.appendChild(nextButton);
  innerContent.appendChild(previousButton);

  const modalBackground = document.createElement("section");

  modalBackground.classList.add("modal-background");
  modalBackground.onclick = close;
  modal.appendChild(modalBackground);
  /**
   * We have to wait here, otherwise
   * the animation will happen which causes
   * a jarring user experience.
   * */
  setImmediate(() => imageContainer.classList.add('animate'));

  /**
   * In reality this should be probably be debounced.
   * */
  window.onresize = resize;
};

/**
 * Resize the modal container and images based on the new screen size
 */
export const resize = () => {
  /**
   * If the animation exists on the container there will
   * be a terrifying experience. Here we must remove the class
   * but wait for that to be rendered out before we continue.
   * */
  const innerContent = document.querySelector(`.${modalContentClassName}`);
  const imageContainer = document.querySelector(`.${modalImageContainerClassName}`);
  const imageNodes = document.querySelectorAll(`.${imageClassName}`);
  imageContainer.classList.remove('animate');
  setImmediate(() => {
    imageNodes.forEach(imgNode => updateSize(innerContent, imgNode));
    updateInnerContainerSize(innerContent, imageNodes[activeImage].clientHeight);
    setImageContainerStyle(imageContainer, innerContent);
    /**
     * If we don't wait here, it will animate regardless
     */
    setImmediate(() => imageContainer.classList.add('animate'));
  });
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
