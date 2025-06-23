// toggle menu button
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// change the background video click on the gallery image
function changeVideo (name) {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');
    const gallery = document.querySelectorAll('.gallery');

    // javascript higher order array function for each
    bgVideoList.forEach((video) => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    });
//  mapping model name change
    models.forEach(model => {
        model.classList.remove('active');
        if (model.classList.contains(name)) {
           model.classList.add('active');
        }
    });

     trailers.forEach((video) => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    });

    galleryItems.forEach((item) => {
    item.classList.remove('active');
    if (item.getAttribute('data-name') === name) {
      item.classList.add('active');
    }
  });
}

// change play and pause button on click event
function togglePlay() {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');
   
}

// video play and pause button

function pauseVideo(){
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach((video) => {
        video.pause();
    });
    togglePlay();
}

function playVideo(){
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach((video) => {
        video.play();
    });
    togglePlay();
}
