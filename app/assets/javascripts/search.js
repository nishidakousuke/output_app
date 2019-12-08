$(document).on('turbolinks:load', function() {
  let search_list = $('.search_contents');

  function appendOutput(output) {
    let html = `<ul class="more_list">
                  <li class="more_list_li">
                    <a href="/outputs/${output.id}" class="more_list_li_link">${output.title}</a>
                  </li>
                </ul>`
    search_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    let html2 = `<div class="none_search_title">
                  <p class="none_search_title_text">${msg}</p>
                </div>`
    search_list.append(html2);
  }

  $(".search-input").on("keyup", function() {
    let input = $(".search-input").val();
    $.ajax({
      type: 'GET',
      url: '/outputs/search',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(outputs) {
      $(".search_contents").empty();
      if(outputs.length !== 0) {
        outputs.forEach(function(output) {
          console.log(output);
          appendOutput(output);
        });
      } else {
        appendErrMsgToHTML("一致するタイトルがありません");
      }
    })
    .fail(function() {
      alert('検索に失敗しました');
    })
  });
});