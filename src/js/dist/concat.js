$(function () {
  // exercise 1
  $('.exercise--1 .shape--square').css('background', 'blue');
  $('.exercise--1 .shape--circle').css('background', 'green');

  // exercise 2

  $('.exercise--2 .button').click(function () {
    const inputField = $('.exercise--2 input').val();
    $('.exercise--2 .col-2 p').text(inputField);
  });

  // exercise 3
  $('.exercise--3 .col-1 .shape').addClass('block');
  $('.exercise--3 .col-2 .shape').removeClass('block');

  $('.exercise--3 .button').click(function () {
    $('.exercise--3 .col-3 .shape').toggleClass('block');
  });

  // exercise 4
  $('.exercise--4 .col-1 .shape').remove();
  $('.exercise--4 .col-2 .shape').hide();
  $('.exercise--4 .col-3').append("<div class='shape shape--square'></div>");

  //exercise 5
  $('.exercise--5 .button').click(function () {
    $('.exercise--5 .col-1 .alert').show();
    setTimeout(function () {
      $('.exercise--5 .col-1 .alert').hide();
    }, 3000);
  });

  $('.accordion').click(function () {
    $('.accordion-body').slide();

    $(this).find('.accordion-body').slide();
  });
});
