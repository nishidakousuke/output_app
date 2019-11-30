$(document).on('turbolinks:load', function() {
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
});