// スクリーン
$(function () {
  setTimeout(function () {
    $(".screen").addClass("screen-active", 500);
  }, 500); // 500ミリ秒後に
});

// ハンバーガー
$(".toggle-button").on("click", function () {
  $(".toggle-button").toggleClass("toggle-button-active");
});

$(".toggle-button").on("click", function () {
  $(".menu").toggleClass("menu-active");
});

// .contentの領域をクリックして初期化
$(".content").on("click", function () {
  $(".toggle-button").removeClass("toggle-button-active");
  $(".menu").removeClass("menu-active");
});

// navの領域をクリックして初期化
$("nav").on("click", function () {
  $(".toggle-button").removeClass("toggle-button-active");
  $(".menu").removeClass("menu-active");
});

// ナビゲーションをクリックして初期化
$("header a").on("click", function () {
  $(".toggle-button").removeClass("toggle-button-active");
  $(".menu").removeClass("menu-active");
});

// アコーディオン
$(".works-list").on("click", function () {
  $(this).next(".works-detail").attr("id", "works-top"); // アコーディオン本体にidを付与する
  $(this).hide(500, "easeInOutExpo"); // 自分を消す
  $(".works-list").addClass("works-list-noclick"); // クラスを付与してカードをクリックさせなくする
  $(".works-detail-close").addClass("works-detail-close-active"); // 閉じるボタンを出す
  // $(".works-list").hide(1000, "easeInOutExpo"); // 全部消す
  // $(".works-list").not($(this)).show(1000, "easeInOutExpo"); // 自分以外を表示する
  $(this).next(".works-detail").slideToggle(1000, "easeInOutExpo"); // スライドして開く
  $(".works-list").not($(this)).next(".works-detail").slideUp(1000, "easeInOutExpo"); // 他を閉じる
});

$(".works-detail").on("click", function () {
  $(".works-detail").removeAttr("id", "works-top"); // アコーディオン本体にidを削除する
  $(".works-detail").hide(1000, "easeInOutExpo"); // 自分を消す
  $(".works-list").not($(this)).show(1000, "easeInOutExpo"); // 自分以外を表示する
  $(".works-list").removeClass("works-list-noclick"); // クラスを削除してカードをクリックできるようにする
  $(".works-detail-close").removeClass("works-detail-close-active"); // 閉じるボタンを削除する
});

// アコーディオンの閉じるボタンの動作
$(".works-detail-close").on("click", function () {
  $(".works-detail").removeAttr("id", "works-top"); // アコーディオン本体にidを削除する
  $(".works-detail").hide(1000, "easeInOutExpo"); // 自分を消す
  $(".works-list").not($(this)).show(1000, "easeInOutExpo"); // 自分以外を表示する
  $(".works-list").removeClass("works-list-noclick"); // クラスを削除してカードをクリックできるようにする
  $(".works-detail-close").removeClass("works-detail-close-active"); // 閉じるボタンを削除する
});

// アコーディオンが開いたらそこまでスクロールする
$(".works-list").on("click", function () {
  const memberTop = $("#works-top").offset().top - 64;
  $("html").animate({ scrollTop: memberTop }, 1000, "easeInOutExpo");
});

// scrollreveal
ScrollReveal().reveal(".content", {
  reset: false,
  delay: 1000,
  duration: 1000,
  scale: 0.9,
});

ScrollReveal().reveal("h2,.works-list,.text-box-content li", {
  reset: false,
  delay: 500,
  duration: 1000,
  scale: 0.9,
});
