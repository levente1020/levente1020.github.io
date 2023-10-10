document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const scrollTopButton = document.getElementById('scrollTopButton');

    window.addEventListener("scroll", function () {
        // Header style change when scrolled
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Scroll-to-top button visibility
        if (window.pageYOffset > 100) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });
});

function toggleDetails(element) {
    const details = element.nextElementSibling;
    const text = element.querySelector("p");

    if (details.style.display === "none" || !details.style.display) {
        details.style.display = "block";
        text.style.display = "none";
    } else {
        details.style.display = "none";
        text.style.display = "block";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
