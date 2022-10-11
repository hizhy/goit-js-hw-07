import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imgGalleryRef = document.querySelector(".gallery");
const galleryMarkUp = createGalleryMarkup(galleryItems);
imgGalleryRef.innerHTML = galleryMarkUp;

imgGalleryRef.addEventListener("click", onImageClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      `;
    })
    .join("");
}

function onImageClick(event) {
  event.preventDefault();
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// console.log(galleryItems);
