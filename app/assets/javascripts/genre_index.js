$(document).on('turbolinks:load', function() {
    // サブジャンルをクリックした時の処理
    let numPatternResult = 0;
  $('li').on('click', function() {
    let dataId = $(this).data('id');
    if (dataId === "subgenre") {
      // 以下の１行は、前回クリックされた箇所を最初に消すための処理
    $(`${".output" + numPatternResult[0]}`).css('display', 'none');
    let className = this.className;
    let numPattern = /\d+/;
    numPatternResult = className.match(numPattern);
    $(`${".output" + numPatternResult[0]}`).css('display', 'block');
    }
  });

  // ジャンルをクリックした時の処理
  $('.genre_content_box_left_top').on('click', function() {
    let genreNameId = this.children[0].getAttribute('id');
    let genreNameIdNumber = genreNameId.match(/\d+/);
    if($(`${"#genre_content_box_left_bottom" + genreNameIdNumber[0]}`).css('display') === "none") {
      $(`${"#genre_content_box_left_bottom" + genreNameIdNumber[0]}`).css('display', 'block');
    } else {
      $(`${"#genre_content_box_left_bottom" + genreNameIdNumber[0]}`).css('display', 'none');
    }

    if($(`${".genre_content_box_right_" + genreNameIdNumber[0]}`).css('display') === "none") {
      $(`${".genre_content_box_right_" + genreNameIdNumber[0]}`).css('display', 'block');
    } else {
      $(`${".genre_content_box_right_" + genreNameIdNumber[0]}`).css('display', 'none');
    }
  });
});