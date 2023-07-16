// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
galleryContainer.style.listStyle = 'none';
const galleresMarkup = createGalleryCard(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleresMarkup);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryCard(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" 
        alt="${description}"/>
        </a>
        </li>`;
    })
    .join('');
}
