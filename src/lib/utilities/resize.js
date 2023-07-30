const { min, max } = Math;

/**
 * 
 * @param {Element} element 
 */
function resize (element) {
  const grabber = element.lastElementChild;
  grabber?.addEventListener('pointerdown', pointerdown);

  window.addEventListener('pointerup', pointerup);
  window.addEventListener('pointermove', pointermove);

  /** @type {number} */
  const MIN_WIDTH = 360;
  /** @type {number} */
  const LIMIT = element.getBoundingClientRect().width;

  /** @type {EventTarget | null} */
  let active = null;
  /** @type {{width:number} | null} */
  let initialRect = null;
  /** @type {{x:number} | null} */
  let initialPos = null;

  /**
   * 
   * @param {Event} event 
   */
  function pointerdown (event) {
    active = event.target;
    const rect = element.getBoundingClientRect();

    initialRect = {
      width: rect.width,
    }

    initialPos = {
      x: event.pageX,
    }
  }

  function pointerup () {
    if (active === null) return;

    active = null;
    initialRect = null;
    initialPos = null;
  }

  /**
   * 
   * @param {Event} event 
   */
  function pointermove (event) {
    if (active === null) return;

    const delta = event.pageX - initialPos.x;
    const preffered = min(max(initialRect?.width + delta, MIN_WIDTH), LIMIT);
    element.style.width = `${preffered}px`;
  }

  return {
    destroy () {
      grabber?.removeEventListener('pointerdown', pointerdown);

      window.removeEventListener('pointerup', pointerup);
      window.removeEventListener('pointermove', pointermove);
    }
  };
};

export { resize };
