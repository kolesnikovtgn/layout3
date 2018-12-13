// const _ = require('lodash');

let resultUrl;

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

// function generateNumber() {
//   return _.random(1, 50);
// }

function getImage(id, url) {
  $(id).append(`<img src="${url}">`);
}

function httpGet(url, callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', url);
  xmlHttp.send();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4) {
      resultUrl = xmlHttp.responseURL;

      callback.apply(this, [resultUrl]);
    }
  };
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

    getImage('#img1', 400, 400);
    getImage('#img2', 400, 400);
    getImage('#img3', 400, 400);
    getImage('#img4', 400, 400);
    getImage('#pimg1', 50, 40);
    getImage('#pimg2', 50, 40);
    getImage('#pimg3', 50, 40);
    httpGet('https://picsum.photos/200/300/?random');
    console.log(resultUrl);
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

  getImage('#img1', 400, 400);
  getImage('#img2', 400, 400);
  getImage('#img3', 400, 400);
  getImage('#img4', 400, 400);
  getImage('#pimg1', 50, 40);
  getImage('#pimg2', 50, 40);
  getImage('#pimg3', 50, 40);
});
