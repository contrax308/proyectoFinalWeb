// Variables para el primer carrusel
const track1 = document.querySelector('.carousel-track');
const prevBtn1 = document.querySelector('.carousel-button.prev');
const nextBtn1 = document.querySelector('.carousel-button.next');
const images1 = document.querySelectorAll('.carousel-track img');

let index1 = 0;
let interval1 = setInterval(nextSlide1, 4000); // cambia cada 4 segundos para el primer carrusel

function updateCarousel1() {
    track1.style.transform = `translateX(-${index1 * 100}%)`;
}

function nextSlide1() {
    index1 = (index1 + 1) % images1.length;
    updateCarousel1();
}

function prevSlide1() {
    index1 = (index1 - 1 + images1.length) % images1.length;
    updateCarousel1();
}

nextBtn1.addEventListener('click', () => {
    nextSlide1();
    resetInterval1();
});

prevBtn1.addEventListener('click', () => {
    prevSlide1();
    resetInterval1();
});

function resetInterval1() {
    clearInterval(interval1);
    interval1 = setInterval(nextSlide1, 4000);
}

// Variables para el segundo carrusel
const track2 = document.querySelector('.carousel-track2');
const prevBtn2 = document.querySelector('.carousel-button2.prev');
const nextBtn2 = document.querySelector('.carousel-button2.next');
const images2 = document.querySelectorAll('.carousel-track2 img');

let index2 = 0;
let interval2 = setInterval(nextSlide2, 4000); // cambia cada 4 segundos para el segundo carrusel

function updateCarousel2() {
    track2.style.transform = `translateX(-${index2 * 100}%)`;
}

function nextSlide2() {
    index2 = (index2 + 1) % images2.length;
    updateCarousel2();
}

function prevSlide2() {
    index2 = (index2 - 1 + images2.length) % images2.length;
    updateCarousel2();
}

nextBtn2.addEventListener('click', () => {
    nextSlide2();
    resetInterval2();
});

prevBtn2.addEventListener('click', () => {
    prevSlide2();
    resetInterval2();
});

function resetInterval2() {
    clearInterval(interval2);
    interval2 = setInterval(nextSlide2, 4000);
}
