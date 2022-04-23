let menuBtn = document.querySelector('.main-btn');
let menu_1 = document.querySelector('.menu_1');
let menu_2 = document.querySelector('.menu_2');
let menu_3 = document.querySelector('.menu_3');
let menu_4 = document.querySelector('.menu_4');
let menu_5 = document.querySelector('.menu_5');
let main_btn = document.querySelector('.main_btn');


menuBtn.addEventListener('click', function (){
  menuBtn.classList.toggle('active');
  menu_1.classList.toggle('active');
  menu_2.classList.toggle('active');
  menu_3.classList.toggle('active');
  menu_4.classList.toggle('active');
  menu_5.classList.toggle('active');
  main_btn.classList.toggle('active');
})

$(function() {

  /* Reviews: https://kenwheeler.github.io/slick/ */
  let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });
});







