var sf = new Snowflakes({
    color: "#7ec7ec",
    speed: 0.9,
    minOpacity: 0.2,
    maxOpacity: 0.5
});

// swiper
var mySwiper = new Swiper('.swiper-container', {

    // 4초 = 4000
    autoplay: {delay: 4000},
    direction: 'vertical'
});