/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

 
menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close mobile menu after clicking a navigation link

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});
 

}

/* ================= IMAGE LIGHTBOX ================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const closeLightbox = document.getElementById("closeLightbox");

const imageButtons = document.querySelectorAll(".image-button");

imageButtons.forEach(button => {

 
button.addEventListener("click", () => {

    const image = button.getAttribute("data-image");
    const title = button.getAttribute("data-title");

    lightboxImage.src = image;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

});
 

});

/* ================= CLOSE LIGHTBOX ================= */

function closeImageLightbox() {

 
lightbox.classList.remove("active");

lightboxImage.src = "";

document.body.style.overflow = "";
 

}

if (closeLightbox) {

 
closeLightbox.addEventListener("click", closeImageLightbox);
 

}

/* ================= CLOSE BY BACKGROUND CLICK ================= */

if (lightbox) {

 
lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
        closeImageLightbox();
    }

});
 

}

/* ================= ESC KEY ================= */

document.addEventListener("keydown", event => {

 
if (event.key === "Escape" && lightbox.classList.contains("active")) {

    closeImageLightbox();

}
 

});
