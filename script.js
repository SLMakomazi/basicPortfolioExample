// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("project-slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Contact Form Submission (just an example; replace with actual backend)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    alert(`Message sent from ${email}: ${message}`);
});

// Hiding Header on Scroll
let lastScrollTop = 0; // Keep track of the last scroll position

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        header.classList.add("hidden");
    } else {
        // Scroll up
        header.classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});
