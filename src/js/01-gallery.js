// Add imports above this
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const listGalleryRef = document.querySelector('.gallery');
const galleryItemsRef = createGalleryItems(galleryItems);
listGalleryRef.innerHTML = galleryItemsRef;

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
    </a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
