const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter > 2) {
        counter = 0;
    }
    updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    updateSliderPosition();
});

function updateSliderPosition() {
    slider.style.transform = `translateX(-${counter * 320}px)`;
}






