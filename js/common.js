// スライダー設定
$(function () {
  $(".mv-list").slick({
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    fade: true,
    prevArrow: '<div class="slick-prev">></div>',
    nextArrow: '<div class="slick-next"><</div>',
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

// $(".mv-list").slick({
//   centerMode: true,
//   centerPadding: "25%",
// });
