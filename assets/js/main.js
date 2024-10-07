// page 1 slider 

var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

function startSlider() {
    setInterval(function() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 3000); // Change slide every 3 seconds (adjust as needed)
}