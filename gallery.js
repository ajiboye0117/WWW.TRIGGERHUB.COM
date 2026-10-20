// =========================================
// GALLERY LIGHTBOX
// =========================================

const galleryImages = document.querySelectorAll(".gallery-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeButton = document.getElementById("lightboxClose");

const previousButton = document.getElementById("lightboxPrev");

const nextButton = document.getElementById("lightboxNext");


let currentImage = 0;


// =========================================
// OPEN IMAGE
// =========================================

galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {

        currentImage = index;

        openLightbox();

    });

});


// =========================================
// OPEN LIGHTBOX FUNCTION
// =========================================

function openLightbox() {

    lightboxImage.src = galleryImages[currentImage].src;

    lightboxImage.alt = galleryImages[currentImage].alt;

    lightbox.classList.add("active");

    // Stop page scrolling
    document.body.style.overflow = "hidden";

}


// =========================================
// CLOSE LIGHTBOX
// =========================================

function closeLightbox() {

    lightbox.classList.remove("active");

    // Allow page scrolling again
    document.body.style.overflow = "";

}


// =========================================
// CLOSE BUTTON
// =========================================

closeButton.addEventListener("click", function() {

    closeLightbox();

});


// =========================================
// NEXT IMAGE
// =========================================

nextButton.addEventListener("click", function() {

    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    openLightbox();

});


// =========================================
// PREVIOUS IMAGE
// =========================================

previousButton.addEventListener("click", function() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    openLightbox();

});


// =========================================
// CLICK OUTSIDE IMAGE TO CLOSE
// =========================================

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


// =========================================
// KEYBOARD CONTROLS
// =========================================

document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("active")) {
        return;
    }


    // ESC = CLOSE
    if (event.key === "Escape") {

        closeLightbox();

    }


    // RIGHT ARROW = NEXT
    if (event.key === "ArrowRight") {

        currentImage++;

        if (currentImage >= galleryImages.length) {
            currentImage = 0;
        }

        openLightbox();

    }


    // LEFT ARROW = PREVIOUS
    if (event.key === "ArrowLeft") {

        currentImage--;

        if (currentImage < 0) {
            currentImage = galleryImages.length - 1;
        }

        openLightbox();

    }

});
