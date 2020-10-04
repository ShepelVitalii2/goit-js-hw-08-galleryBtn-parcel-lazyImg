import images from "./gallery-items";
import variables from "./variables";

// создаем разметку
export function createImageCardMockup(images) {
  return images
    .map(({ original, preview, description }, index) => {
      return `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
    class="gallery__image lazyload"
    loading="lazy"
    
      data-src="${preview}"
      data-source="${original}"
      data-index="${index}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join("");
}

const imageCard = createImageCardMockup(images);
variables.galleryContainer.insertAdjacentHTML("beforeend", imageCard);

// const lazyImages = document.querySelectorAll("img[data-src]");
//

// lazyImages.forEach((image) => {
//   image.addEventListener("load", onImageLoaded, { once: true });
// });

// function onImageLoaded(evt) {
//
//   evt.target.classList.add("appear");
// }

//******************** Условие на проверку наличия ленивой загрузки. если нету, вешаем скрипт***********************/
