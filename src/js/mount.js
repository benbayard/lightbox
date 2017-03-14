/**
 * Wrapper function for standard error production if element is not found
 * @param id
 * @param type
 * @returns {()=>Element}
 */
export const findByID = (id, type) => {
  return () => {
    const el = document.querySelector(`#${id}`);
    /**
     * If the element is not found querySelector will return a null value
     */
    if (el === null) {
      throw new Error(`${type} element not found`);
    }
    return el;
  };
};

export const getRoot = findByID("root-lightbox", "Mounting");

export const getServiceSelector = findByID("service", "Service Selector");

export const getModalContainer = findByID("modal", "ModalFactory");

