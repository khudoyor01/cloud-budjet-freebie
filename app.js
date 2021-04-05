const closeNav = document.querySelector('.close__menu');
const burgerBtn = document.querySelector('.burger__btn');
const menuNavbar = document.querySelector('.mobile__navbar');

burgerBtn.addEventListener('click', () => {
    menuNavbar.classList.add('active');
})

closeNav.addEventListener('click', () => {
    menuNavbar.classList.remove('active');

})
var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate:100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });