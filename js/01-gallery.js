import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const imagesMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

galleryEl.addEventListener('click', onGalleryClick)

function createGallery(images) {
    return images.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}" rel="noopener noreferrer nofollow">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    }).join(' ');
}

function onGalleryClick(event) {

    const isGalleryImg = event.target.classList.contains('gallery__image');

        if (!isGalleryImg) {
            return;
        }
    
    const imgUrl = event.target.dataset.source;
}


