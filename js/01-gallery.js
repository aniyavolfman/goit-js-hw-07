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
            <a class="gallery__link" href="${original}">
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

    event.preventDefault();

    const isGalleryImg = event.target.classList.contains('gallery__image');

        if (!isGalleryImg) {
            return;
        }
    
    const imgUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">
`)

    instance.show()

    window.addEventListener('keydown', onEscPress);

    function onEscPress(event) {
        if (event.code === 'Escape') { 
        instance.close();
        window.removeEventListener('keydown', onEscPress);
    }
    }
    
}



