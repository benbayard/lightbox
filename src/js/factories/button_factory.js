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
  nextButton.classList.add("next");
  if (isLast()) {
    nextButton.classList.add("hide");
  }
  previousButton.classList.add("previous");
  if (isFirst()) {
    previousButton.classList.add("hide");
  }

  return {
    nextButton,
    previousButton
  };
};
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
