// import lazySizes from "/lazysizes";
import variables from "./variables";

import createImageCardMockup from "./js/createImgCardMockup";

const imageCard = createImageCardMockup(images);
variables.galleryContainer.insertAdjacentHTML("beforeend", imageCard);
