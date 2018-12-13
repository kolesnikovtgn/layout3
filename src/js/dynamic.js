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

function setImage(id, url) {
  $(id).append(`<img src="${url}">`);
}

function httpGetImage(id, url) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', url);
  xmlHttp.send();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4) {
      setImage(id, xmlHttp.responseURL);
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

    httpGetImage('#img1', 'https://picsum.photos/400/400/?random');
    httpGetImage('#img2', 'https://picsum.photos/400/400/?random');
    httpGetImage('#img3', 'https://picsum.photos/400/400/?random');
    httpGetImage('#img4', 'https://picsum.photos/400/400/?random');
    httpGetImage('#pimg1', 'https://picsum.photos/50/40/?random');
    httpGetImage('#pimg2', 'https://picsum.photos/50/40/?random');
    httpGetImage('#pimg3', 'https://picsum.photos/50/40/?random');
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

  httpGetImage('#img1', 'https://picsum.photos/400/400/?random');
  httpGetImage('#img2', 'https://picsum.photos/400/400/?random');
  httpGetImage('#img3', 'https://picsum.photos/400/400/?random');
  httpGetImage('#img4', 'https://picsum.photos/400/400/?random');
  httpGetImage('#pimg1', 'https://picsum.photos/50/40/?random');
  httpGetImage('#pimg2', 'https://picsum.photos/50/40/?random');
  httpGetImage('#pimg3', 'https://picsum.photos/50/40/?random');
});
