const slides = document.querySelectorAll('.photo'),
      next = document.querySelector('.arrow_right'),
      prev = document.querySelector('.arrow_left'),
      total = document.querySelector('.sliders_switch'),
      current = document.querySelectorAll('.slider_switch');

let slideIndex = 1;
let currentIndex =1;

showSlides(slideIndex);
showActives(currentIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    slides.forEach(item => item.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block'; 
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showActives(n) {
    if (n > current.length) {
        currentIndex = 1;
    }
    if (n < 1) {
        currentIndex = current.length;
    }
    
    current.forEach(item => item.classList.remove('slider_switch_active'));
    current[currentIndex - 1].classList.add('slider_switch_active');
}

function plusActives(n) {
    showActives(currentIndex += n);
}

prev.addEventListener('click', () => {
    plusSlides(-1);
    plusActives(-1);
});

next.addEventListener('click', () => {
    plusSlides(1);
    plusActives(1);
});


total.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains('slider_switch')) {
        current.forEach((item, n) => {
            if (target == item) {
                plusSlides(n);
                plusActives(n);
            }
        });
    }
} );


