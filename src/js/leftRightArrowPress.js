import images from "./gallery-items.js";
import variables from "./variables";

//смена картинки вправо
export function onRightArrowPress(event) {
  if (event.code === "ArrowRight") {
    const sources = images.map(({ original }) => original);
    let indexImg = sources.indexOf(variables.modalImgEl.src);

    if (indexImg + 1 >= images.length) {
      indexImg = -1;
    }
    variables.modalImgEl.src = sources[indexImg + 1];
  }
}

// смена картинки влево.
export function onLeftArrowPress(event) {
  if (event.code === "ArrowLeft") {
    const sources = images.map(({ original }) => original);
    let indexImg = sources.indexOf(variables.modalImgEl.src);

    if (indexImg === 0) {
      indexImg = images.length;
    }
    variables.modalImgEl.src = sources[indexImg - 1];
  }
}
