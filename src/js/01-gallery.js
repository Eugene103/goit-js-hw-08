// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`)

function galleryMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
     <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join(``)
}
galleryContainer.insertAdjacentHTML(`beforeend`, galleryMarkup(galleryItems))

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: true,
    enableKeyboard: true
});