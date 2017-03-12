/// <reference path="./api.ts" />

namespace ModalUtils {
  export const modalContentClassName = "modal-content";
  export const modalImageContainerClassName = "modal-image-container";
  export const modalImageClassName = "modal-image";
  export let activeImage: number;

  /**
   * Calculate the width of all the images for the
   * imageContainer
   * @param clientWidth
   * @param numImages
   */
  const width = (clientWidth: number, numImages: number) => clientWidth * numImages;

  /**
   * Calculate the left transform
   * for the carousel position.
   * @param numImages
   * @returns {string}
   */
  const leftTransform = (numImages: number) => {
    return `transform: translate3d(${activeImage / numImages * -100}%, 0, 0);`;
  };

  /**
   * Update the innerContent
   * with the calculated values
   * @param imageContainer
   * @param innerContent
   */
  export const setImageContainerStyle = (imageContainer: Element, innerContent: Element) => {
    const activeImageNode = document.querySelectorAll(`.${modalImageClassName}`)[activeImage];
    innerContent.setAttribute("style", `height: ${activeImageNode.clientHeight}px;`);

    imageContainer.setAttribute("style", `
      width: ${width(innerContent.clientWidth, API.images.length)}px;
      ${leftTransform(API.images.length)}
    `);
  };

  /**
   * Update the height of the inner content
   * for the new images.
   * @param innerContent
   * @param size
   */
  export const updateInnerContainerSize = (innerContent: Element, size: number) => {
    innerContent.setAttribute("style", `height: ${size}px;`);
  };

  export const isLast = () => activeImage === API.images.length - 1;

  export const isFirst = () => activeImage === 0;
}
