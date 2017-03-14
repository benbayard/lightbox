/// <reference path="../utils/modal_utils.ts" />
namespace ButtonFactory {
  export const create = () => {
    const nextButton = document.createElement("button");
    const previousButton = document.createElement("button");
    nextButton.onclick = ButtonFactory.next;
    previousButton.onclick = ButtonFactory.previous;
    nextButton.classList.add("next");
    if (ModalUtils.isLast()) {
      nextButton.classList.add("hide");
    }
    previousButton.classList.add("previous");
    if (ModalUtils.isFirst()) {
      previousButton.classList.add("hide");
    }
    return {nextButton, previousButton};
  };
  export const next = () => {
    const previousButton = document.querySelector(".previous");
    previousButton!.classList.remove("hide");
    if (ModalUtils.isLast()) {
      return;
    }
    ModalUtils.activeImage += 1;

    if (ModalUtils.isLast()) {
      const nextButton = document.querySelector(".next");
      nextButton!.classList.add("hide");
    }
    const innerContent = document.querySelector(`.${ModalUtils.modalContentClassName}`);
    const imageContainer = document.querySelector(`.${ModalUtils.modalImageContainerClassName}`);
    ModalUtils.setImageContainerStyle(imageContainer!, innerContent!);
  };

  export const previous = () => {
    const nextButton = document.querySelector(".next");
    nextButton!.classList.remove("hide");
    if (ModalUtils.isFirst()) {
      return;
    }
    ModalUtils.activeImage -= 1;
    if (ModalUtils.isFirst()) {
      const previousButton = document.querySelector(".previous");
      previousButton!.classList.add("hide");
    }
    const innerContent = document.querySelectorAll(`.${ModalUtils.modalContentClassName}`)[0];
    const imageContainer = document.querySelectorAll(`.${ModalUtils.modalImageContainerClassName}`)[0];
    ModalUtils.setImageContainerStyle(imageContainer!, innerContent!);
  };
}
