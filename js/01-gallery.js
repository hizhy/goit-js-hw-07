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
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join("");
}

let instance = "";

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(
    `
    <img src=${event.target.dataset.source}>
`
  );
  instance.show();
}

// console.log(galleryItems);
