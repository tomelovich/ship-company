const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: "1",
    touchRatio: "0",
    loop: "true",
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 15000,
        desableOnInteraction:false
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
    
  });
  