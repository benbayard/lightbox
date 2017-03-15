import {
  activeImage,
  setActiveImage,
  setImageContainerStyle,
  modalContentClassName,
  modalImageContainerClassName,
  isLast,
  isFirst
} from "../utils/modal_utils";

export const create = () => {
  const nextButton = document.createElement("button");
  const previousButton = document.createElement("button");

  nextButton.onclick = next;
  previousButton.onclick = previous;
  /**
   * This button advances the carousel
   */
  nextButton.classList.add("next");
  if (isLast()) {
    /**
     * Hide the next button if it is it
     *
     */
    nextButton.classList.add("hide");
  }
  /**
   * This button advances the carousel to the
   * previous image
   */
  previousButton.classList.add("previous");
  if (isFirst()) {
    /**
     * Hide the previous button if we are already
     * on the first image.
     */
    previousButton.classList.add("hide");
  }

  return {
    nextButton,
    previousButton
  };
};

/**
 * Advance the carousel to the next image.
 */
export const next = () => {
  const previousButton = document.querySelector(".previous");

  previousButton.classList.remove("hide");
  if (isLast()) {
    return;
  }
  setActiveImage(activeImage + 1);

  if (isLast()) {
    const nextButton = document.querySelector(".next");

    nextButton.classList.add("hide");
  }
  const innerContent = document.querySelector(`.${modalContentClassName}`);
  const imageContainer = document.querySelector(`.${modalImageContainerClassName}`);

  setImageContainerStyle(imageContainer, innerContent);
};

/**
 * Advance the carousel to the previous image.
 */
export const previous = () => {
  const nextButton = document.querySelector(".next");

  nextButton.classList.remove("hide");
  if (isFirst()) {
    return;
  }
  setActiveImage(activeImage - 1);
  if (isFirst()) {
    const previousButton = document.querySelector(".previous");

    previousButton.classList.add("hide");
  }
  const innerContent = document.querySelectorAll(`.${modalContentClassName}`)[0];
  const imageContainer = document.querySelectorAll(`.${modalImageContainerClassName}`)[0];

  setImageContainerStyle(imageContainer, innerContent);
};
