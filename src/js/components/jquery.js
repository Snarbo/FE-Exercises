$(function () {
  // exercise 1
  $(".exercise--1 .shape--square").css("background", "blue");
  $(".exercise--1 .shape--circle").css("background", "green");

  // exercise 2

  $(".exercise--2 .button").click(function () {
    const inputField = $(".exercise--2 input").val();
    $(".exercise--2 .col-2 p").text(inputField);
  });

  // exercise 3
  $(".exercise--3 .col-1 .shape").addClass("block");
  $(".exercise--3 .col-2 .shape").removeClass("block");

  $(".exercise--3 .button").click(function () {
    $(".exercise--3 .col-3 .shape").toggleClass("block");
  });

  // exercise 4
  $(".exercise--4 .col-1 .shape").remove();
  $(".exercise--4 .col-2 .shape").hide();
  $(".exercise--4 .col-3").append("<div class='shape shape--square'></div>");

  //exercise 5
  $(".exercise--5 .button").click(function () {
    $(".exercise--5 .col-1 .alert").show();
    setTimeout(function () {
      $(".exercise--5 .col-1 .alert").hide();
    }, 3000);
  });

  //exercise 6
  $(".exercise--6 .accordion").click(function () {
    const body = $(this).find(".accordion-body");

    $(".accordion-body").not(body).slideUp();

    body.slideToggle();
  });

  //exercise 7
  $(".exercise--7 .carousel--1").slick({
    // infinite: false,
    // slidesToShow: 2,
    // slidesToScroll: 2,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: "linear",
    asNavFor: ".carousel--2",
  });

  $(".exercise--7 .carousel--2").slick({
    // infinite: false,
    // slidesToShow: 2,
    // slidesToScroll: 2,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  });
});
