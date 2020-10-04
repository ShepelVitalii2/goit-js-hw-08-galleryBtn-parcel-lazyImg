import variables from "./variables";
import { onRightArrowPress, onLeftArrowPress } from "./leftRightArrowPress";

// закрытие по Эск.
export function onEscapeKeyPress(evt) {
  if (evt.code === "Escape") {
    onCloseModal();
  }
}

//закрытие по кнопке
export function onModalBtnClosePress() {
  if (variables.modalCloseBtnEl.nodeName === "BUTTON") {
    onCloseModal();
  }
}

//закрытие по клику на бэкдроп
export function onBackdropClickClose(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal();
  }
}

//само закрытие и снятие слушателей клавиатуры. Удаляет src
export function onCloseModal() {
  variables.backdropOverlayContainer.classList.remove("is-open");

  window.removeEventListener("keydown", onEscapeKeyPress);
  window.removeEventListener("keydown", onRightArrowPress);
  window.removeEventListener("keydown", onLeftArrowPress);

  deleteImgSrc();
}

//само удаление src
export function deleteImgSrc() {
  variables.modalImgEl.src = "";
}
