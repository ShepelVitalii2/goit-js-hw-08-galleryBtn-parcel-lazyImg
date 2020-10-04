import images from "./gallery-items.js";
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

if ("lazyloading" in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js";
  script.integrity =
    "sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==";
  script.crossOrigin = "anonymous";

  document.body.appendChild(script);
}
