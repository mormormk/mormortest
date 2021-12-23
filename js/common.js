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

// TOPへ戻るボタンスクロールで現れる
$(function () {
  // 変数にクラスを入れる
  var btn = $(".topback-btn");

  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on("load scroll", function () {
    if ($(this).scrollTop() > 300) {
      btn.addClass("isActive");
    } else {
      btn.removeClass("isActive");
    }
  });
});
