const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');
const images = document.querySelectorAll('.carousel-track img');

let index = 0;
let interval = setInterval(nextSlide, 4000); // cambia cada 4 segundos

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % images.length;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 4000);
}
