$(document).on('turbolinks:load', function() {
    $('.output_content_left-explanation').on('click', function() {
      $('.output_content_right_box').css('display', 'block');
    });
  }
)