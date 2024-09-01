const swiper = new Swiper('.swiper', {
    // Optional parameters
    // loop: true,
    // autoplay: {
    //     delay: 2000,
    // },

    spaceBetween: 20,
    speed: 600,
    centeredSlides: true,
    slidesPerView: 1.2,
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });

new Accordion('.accordion-container', {
    duration: 600,
    showMultiple: true,
});