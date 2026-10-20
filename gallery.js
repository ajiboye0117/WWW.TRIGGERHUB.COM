let slideIndex = 1;
let slideTimer;

// Start slideshow
showSlides(slideIndex);
startAutoSlide();


// =================================
// NEXT / PREVIOUS SLIDES
// =================================

function plusSlides(n) {
    showSlides(slideIndex += n);

    // Restart automatic slideshow
    restartAutoSlide();
}


// =================================
// DOT NAVIGATION
// =================================

function currentSlide(n) {
    showSlides(slideIndex = n);

    // Restart automatic slideshow
    restartAutoSlide();
}


// =================================
// SHOW SLIDES
// =================================

function showSlides(n) {

    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Go back to first slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Go to last slide
    if (n < 1) {
        slideIndex = slides.length;
    }


    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    // Remove active dot
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }


    // Show current slide
    slides[slideIndex - 1].style.display = "block";


    // Activate current dot
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }
}


// =================================
// AUTOMATIC SLIDESHOW
// =================================

function startAutoSlide() {

    slideTimer = setInterval(function () {

        slideIndex++;

        showSlides(slideIndex);

    }, 5000); // 5 seconds

}


// =================================
// RESTART AUTOMATIC SLIDESHOW
// =================================

function restartAutoSlide() {

    clearInterval(slideTimer);

    startAutoSlide();

}


// =================================
// CLICK IMAGE TO ZOOM
// =================================

const slideshowImages = document.querySelectorAll(
    ".slideshow .slide img"
);

slideshowImages.forEach(function(image) {

    image.addEventListener("click", function() {

        // Remove zoom from other images
        slideshowImages.forEach(function(otherImage) {

            if (otherImage !== image) {
                otherImage.classList.remove("zoomed");
            }

        });

        // Zoom / unzoom clicked image
        image.classList.toggle("zoomed");

    });

});




const galleryImages = document.querySelectorAll(
    ".gallery-card img"
);

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        image.classList.toggle("zoomed");

    });

});