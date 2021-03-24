//SELECTORS --------------------------------
const slides = document.getElementsByClassName('carousel-item')
const bullets = document.getElementsByClassName('carousel-nav-item')
const totalSlides = slides.length
let slidePosition = 0



//EVENT LISTENERS --------------------------
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)


//FUNCTIONS --------------------------------
setInterval(moveToNextSlide, 3000)

function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add('carousel-item-visible')
    removeAllNavVisible()
    bullets[slidePosition].classList.add('carousel-nav-item-visible')
}

function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--       
    }   
    slides[slidePosition].classList.add('carousel-item-visible')
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

function removeAllNavVisible() {
    for (let i = 0; i < 3; i++) {
        bullets[i].classList.remove('carousel-nav-item-visible')
    }
}


