const _ = require('lodash');

function getJson(type, paras, sentence, idOutput) {
  $.getJSON('https://baconipsum.com/api/?callback=?',
    {
      type, 'start-with-lorem': '0', paras, sentence,
    },
    (baconArr) => {
      if (baconArr && baconArr.length > 0) {
        $(idOutput).html('');
        for (let i = 0; i < baconArr.length; i += 1) $(idOutput).append(`<p>${baconArr[i]}</p>`);
        $(idOutput).show();
      }
    });
}

$(document).ready(() => {
  $('#baconButton').click(() => {
    getJson('all-meat', '3', '0', '#blog1');
    getJson('meat-and-filler', '2', '0', '#blog2');
    getJson('all-meat', '3', '0', '#blog3');
    getJson('meat-and-filler', '2', '0', '#blog4');
    getJson('meat-and-filler', '3', '0', '#blog5');
    getJson('meat-and-filler', '4s', '0', '#blog7');
    getJson('all-meat', '0', '1', '#post1');
    getJson('all-meat', '0', '1', '#post2');
    getJson('all-meat', '0', '1', '#post3');
  });
  getJson('all-meat', '3', '0', '#blog1');
  getJson('meat-and-filler', '2', '0', '#blog2');
  getJson('all-meat', '3', '0', '#blog3');
  getJson('meat-and-filler', '2', '0', '#blog4');
  getJson('meat-and-filler', '3', '0', '#blog5');
  getJson('meat-and-filler', '4s', '0', '#blog7');
  getJson('all-meat', '0', '1', '#post1');
  getJson('all-meat', '0', '1', '#post2');
  getJson('all-meat', '0', '1', '#post3');

  const tmp = _.template($('#image_random').html());
  const $main = $('#main');
  $main.html(tmp({ random: _.random(1, 2000) }));
});
