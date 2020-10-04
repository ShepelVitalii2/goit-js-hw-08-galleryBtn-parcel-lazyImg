import { onModalBtnClosePress, onBackdropClickClose } from "./close-options";
import { onOpenGalleryContainerClick } from "./onOpenGalleryContainerClick";

const galleryContainer = document.querySelector(".js-gallery");
const backdropOverlayContainer = document.querySelector(".js-lightbox");
const backdropOverlay = document.querySelector(".lightbox__overlay");
const backdropEl = document.querySelector("div.lightbox");
const modalImgEl = document.querySelector(".lightbox__image");
const modalCloseBtnEl = document.querySelector(
  'button[data-action="close-lightbox"]'
);

modalCloseBtnEl.addEventListener("click", onModalBtnClosePress);
galleryContainer.addEventListener("click", onOpenGalleryContainerClick);
backdropOverlay.addEventListener("click", onBackdropClickClose);

export default {
  galleryContainer,
  backdropOverlayContainer,
  backdropOverlay,
  backdropEl,
  modalImgEl,
  modalCloseBtnEl,
};
