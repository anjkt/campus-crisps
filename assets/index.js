$(document).ready(function () {
  $("#headjoin").hide(); //hide your div initially
  var topOfOthDiv = $("#join").offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() > topOfOthDiv) {
      //scrolled past the other div?
      $("#headjoin").show(); //reached the desired point -- show div
    } else {
      $("#headjoin").hide();
    }
  });

  $(".q").on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).next("div").slideUp(400);
      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
      $(this).next("div").slideDown(400);
    }
  });

  $(".FQ").click(function () {
    $(".over").show();
    $(".faqs").show();
    $("body").addClass("overSTOP");
  });

  $(".over, .close").on("click", function () {
    $(".over").hide();
    $(".faqs").hide();
    $("body").removeClass("overSTOP");
  });
});

$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();

  if (scroll >= 80) sticky.addClass("fix");
  else sticky.removeClass("fix");
});

$(document).ready(function () {
  $(".bld").click(function () {
    $(this).toggleClass("mActive");
    $(this).siblings().toggleClass("menushow");
  });

  $(".slid").owlCarousel({
    lazyLoad: true,
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<img src='https://offercdn.paytm.com/blog/2019/07/left-arrow.png'>",
      "<img src='https://offercdn.paytm.com/blog/2019/07/right-arrow.png'>",
    ],
    items: 1,
  });
});
