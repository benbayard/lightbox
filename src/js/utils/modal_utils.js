import {images} from "../api";

export const modalContentClassName = "modal-content";
export const modalImageContainerClassName = "modal-image-container";
export const modalImageClassName = "modal-image";
export let activeImage;

export const setActiveImage = (num) => activeImage = num;

/**
 * Calculate the width of all the images for the
 * imageContainer
 * @param clientWidth
 * @param numImages
 */
const width = (clientWidth, numImages) => clientWidth * numImages;

/**
 * Calculate the left transform
 * for the carousel position.
 * @param numImages
 * @returns {string}
 */
const leftTransform = (numImages) => `transform: translate3d(${activeImage / numImages * -100}%, 0, 0);`;

/**
 * Update the innerContent
 * with the calculated values
 * @param imageContainer
 * @param innerContent
 */
export const setImageContainerStyle = (imageContainer, innerContent) => {
    const activeImageNode = document.querySelectorAll(`.${modalImageClassName}`)[activeImage];

    innerContent.setAttribute("style", `height: ${activeImageNode.clientHeight}px;`);

    imageContainer.setAttribute("style", `
    width: ${width(innerContent.clientWidth, images.length)}px;
    ${leftTransform(images.length)}
  `);

};

/**
 * Update the height of the inner content
 * for the new images.
 * @param innerContent
 * @param size
 */
export const updateInnerContainerSize = (innerContent, size) => {
    innerContent.setAttribute("style", `height: ${size}px;`);

};

export const isLast = () => activeImage === images.length - 1;

export const isFirst = () => activeImage === 0;
