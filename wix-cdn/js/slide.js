document.addEventListener("DOMContentLoaded", function() {
  new Swiper('.premiumslide', {
    loop: true,
    pagination: {
      el: '.pr-pagination',
      clickable: true
    },
    autoplay: {
      delay: 4000,
    },
    speed: 800
  });
});