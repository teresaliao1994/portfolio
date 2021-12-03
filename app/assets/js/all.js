$('.menu-icon').click(function (e) {
  e.preventDefault(); $('.menu__list').toggleClass('active')
})

function menuScrollInit() {
  var target = document.getElementsByClassName("nav__bar");
  if (scrollY >= 600) {
    target[0].classList.add("nav__bar--active");
  } else {
    target[0].classList.remove("nav__bar--active");
  }
}
// menuScrollInit();
window.addEventListener("scroll", menuScrollInit);


var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
  $grid.masonry();
});



//Aos
AOS.init({
  once: true,
  duration: 800,
});