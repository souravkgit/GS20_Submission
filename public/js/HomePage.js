const carouselInner = document.querySelector('.carousel-inner');
const slides = Array.from(document.querySelectorAll('.slide'));
const carouselControls = document.querySelectorAll('.carousel-controls button');
let slideIndex = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function changeSlide(index) {
    slideIndex = index;
    showSlide();
    updateActiveButton();
}

function updateActiveButton() {
    carouselControls.forEach((button, index) => {
        if (index === slideIndex) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}


const trendingButton = document.getElementById('trendingButton');
const newPlayersButton = document.getElementById('newPlayersButton');
const trendingPage = document.getElementById('trendingPage');
const newPlayersPage = document.getElementById('newPlayersPage');

trendingButton.addEventListener('click', () => {
    trendingButton.classList.add('active');
    newPlayersButton.classList.remove('active');
    trendingPage.classList.add('active');
    newPlayersPage.classList.remove('active');
});

newPlayersButton.addEventListener('click', () => {
    newPlayersButton.classList.add('active');
    trendingButton.classList.remove('active');
    newPlayersPage.classList.add('active');
    trendingPage.classList.remove('active');
});