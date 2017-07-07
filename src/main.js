let Gallery = {
    gallery: null,
    show: function(event) {
        event.preventDefault();

        let galleryItem = event.target.closest('.gallery__item');

        if (galleryItem) {
            let bigImage = `<img src="${galleryItem.href}" srcset="${galleryItem.href} 1x, ${galleryItem.dataset.retinaSource} 2x" 
                                        class="modal__content-img" />`;
            Modal.open(bigImage);
        }
    },
    init: function() {
        this.gallery = document.querySelector(".gallery");
        this.gallery.addEventListener('click', this.show.bind(this));
    }
};

let Modal = {
    modal: null,
    open: function(content) {
        let modalContainer = this.modal.querySelector(".modal__content");
        modalContainer.innerHTML = content;
        this.modal.classList.add("modal_opened");
    },
    close: function() {
        this.modal.classList.remove("modal_opened");
    },
    init: function() {
        this.modal = document.querySelector(".modal");
        let closeBtn = this.modal.querySelector(".modal__close-btn");

        closeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.close();
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    Gallery.init();
    Modal.init();
});
