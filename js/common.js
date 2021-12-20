// スライダー設定
$(function () {
  $(".mv-list").slick({
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    fade: true,
    prevArrow: '<div class="slick-prev s-arrow">></div>',
    nextArrow: '<div class="slick-next s-aroow"><</div>',
  });
});

// $(".mv-list").slick({
//   centerMode: true,
//   centerPadding: "25%",
// });
