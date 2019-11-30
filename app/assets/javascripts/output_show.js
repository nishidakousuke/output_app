$(document).on('turbolinks:load', function() {
    $('.output_content_left-explanation').on('click', function() {
      $('.output_content_right_box2').css('display', 'none');
      $('.output_content_right_box3').css('display', 'none');
      $('.output_content_right_box').fadeIn("slow");
    });
    $('.output_content_left-learn').on('click', function() {
      $('.output_content_right_box').css('display', 'none');
      $('.output_content_right_box3').css('display', 'none');
      $('.output_content_right_box2').fadeIn("slow");
    });
    $('.output_content_left-remark').on('click', function() {
      $('.output_content_right_box').css('display', 'none');
      $('.output_content_right_box2').css('display', 'none');
      $('.output_content_right_box3').fadeIn("slow");
    });
  }
)