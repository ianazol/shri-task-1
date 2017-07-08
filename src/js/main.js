var Gallery = {
    show: function(event) {
        event.preventDefault();

        var galleryItem = event.target.closest('.gallery__item');

        if (galleryItem) {
            var bigImage = '<img src="' + galleryItem.href + '" srcset="' + galleryItem.href + ' 1x, ' +
                galleryItem.dataset.retinaSource + ' 2x" class="modal__content-img" />';
            Modal.open(bigImage);
        }
    },
    init: function() {
        var gallery = document.querySelector(".gallery");
        gallery.addEventListener('click', this.show.bind(this));
    }
};

var Modal = {
    modal: null,
    open: function(content) {
        var modalContainer = this.modal.querySelector(".modal__content");
        modalContainer.innerHTML = content;
        this.modal.classList.add("modal_opened");
    },
    close: function(event) {
        event.preventDefault();
        this.modal.classList.remove("modal_opened");
    },
    init: function() {
        this.modal = document.querySelector(".modal");
        var closeBtn = this.modal.querySelector(".modal__close-btn");

        closeBtn.addEventListener('click', this.close.bind(this));
    }
};

document.addEventListener('DOMContentLoaded', function() {
    Gallery.init();
    Modal.init();
});
