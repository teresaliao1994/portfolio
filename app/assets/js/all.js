$('.menu-icon').click(function (e) {
  e.preventDefault();
  $('.menu__list').toggleClass('active')
})

function menuScrollInit() {
  var target = document.getElementsByClassName("nav__bar");
  if (screen.width > 1400) {
    if (scrollY >= 700) {
      target[0].classList.add("nav__bar--active");
    } else {
      target[0].classList.remove("nav__bar--active");
    }
  }
  else if (screen.width > 1200) {
    if (scrollY >= 500) {
      target[0].classList.add("nav__bar--active");
    } else {
      target[0].classList.remove("nav__bar--active");
    }
  }
  else {
    if (scrollY >= 360) {
      target[0].classList.add("nav__bar--active");
    } else {
      target[0].classList.remove("nav__bar--active");
    }
  }
}
// menuScrollInit();
window.addEventListener("scroll", menuScrollInit);



// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  //columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
  $grid.masonry();
});


//Lightbox
lightbox.option({
  'fitImagesInViewport': true
})


//Aos
AOS.init({
  once: true,
  duration: 800,
});