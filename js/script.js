$(function () {
  setTimeout(function () {
    $(".screen").addClass("screen-active", 500);
  }, 500); // 500ミリ秒後に
});

$(".toggle-button").on("click", function () {
  $(".toggle-button").toggleClass("toggle-button-active");
});

$(".toggle-button").on("click", function () {
  $(".menu").toggleClass("menu-active");
});

$(".content").on("click", function () {
  $(".toggle-button").removeClass("toggle-button-active");
  $(".menu").removeClass("menu-active");
});

$("nav").on("click", function () {
  $(".toggle-button").removeClass("toggle-button-active");
  $(".menu").removeClass("menu-active");
});

$("header a").on("click", function () {
  $(".toggle-button").removeClass("toggle-button-active");
  $(".menu").removeClass("menu-active");
});

$(".works-list").on("click", function () {
  $(this).next(".works-detail").attr("id", "works-top");
  $(this).hide(500, "easeInOutExpo");
  $(".works-list").addClass("works-list-noclick");
  $(".works-detail-close").addClass("works-detail-close-active");
  $(this).next(".works-detail").slideToggle(1000, "easeInOutExpo");
  $(".works-list").not($(this)).next(".works-detail").slideUp(1000, "easeInOutExpo");
});

$(".works-detail").on("click", function () {
  $(".works-detail").removeAttr("id", "works-top");
  $(".works-detail").hide(1000, "easeInOutExpo");
  $(".works-list").not($(this)).show(1000, "easeInOutExpo");
  $(".works-list").removeClass("works-list-noclick");
  $(".works-detail-close").removeClass("works-detail-close-active");
});

$(".works-detail-close").on("click", function () {
  $(".works-detail").removeAttr("id", "works-top");
  $(".works-detail").hide(1000, "easeInOutExpo");
  $(".works-list").not($(this)).show(1000, "easeInOutExpo");
  $(".works-list").removeClass("works-list-noclick");
  $(".works-detail-close").removeClass("works-detail-close-active");
});

$(".works-list").on("click", function () {
  const memberTop = $("#works-top").offset().top - 64;
  $("html").animate({ scrollTop: memberTop }, 1000, "easeInOutExpo");
});

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
