import variables from "./variables";
import { onEscapeKeyPress } from "./close-options";
import { onRightArrowPress, onLeftArrowPress } from "./leftRightArrowPress";

// создаем условия смены картинки
export function onOpenGalleryContainerClick(evt) {
  //предотвращение перезагрузки страницы
  evt.preventDefault();

  // вешаем слушатели на кнопки
  window.addEventListener("keydown", onEscapeKeyPress);
  window.addEventListener("keydown", onRightArrowPress);
  window.addEventListener("keydown", onLeftArrowPress);

  // guardian close, если тыкнули не в галерею картинки
  const isGalleryLinkEl = evt.target.classList.contains("gallery__image");
  if (!isGalleryLinkEl) return;

  //вешаем класс и задаем атрибуты
  variables.backdropEl.classList.add("is-open");

  const originImgSrc = evt.target.dataset.source;
  variables.modalImgEl.setAttribute("src", originImgSrc);

  const originImgAlt = evt.target.alt;
  variables.modalImgEl.setAttribute("alt", originImgAlt);
}
