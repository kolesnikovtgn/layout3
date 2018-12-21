const article = (i, text, urlImage) => `
  <div class="article${i}">
  <div class="article${i}__header container-row">
      <div class="article${i}__square"></div>
      <div class="article${i}__headline">ABOUT SUPER LOGO</div>
      <div class="article${i}__rectangle"></div>
  </div>
  <div class="article${i}__body container-row">
      <div class="article${i}_image"><img src="${urlImage}">--></div>
      <div class="article${i}__text-block container-column">
          <div class="article${i}__text">
            <p>${text}</p>
          </div>
          <div class="article${i}__footer">
              <span><a>Read more...</a></span>
          </div>
      </div>
  </div>
  </div>
`;

// function getJson(type, paras, sentence, idOutput) {
//   $.getJSON('https://baconipsum.com/api/?callback=?',
//     {
//       type, 'start-with-lorem': '0', paras, sentence,
//     },
//     (baconArr) => {
//       if (baconArr && baconArr.length > 0) {
//         console.log(baconArr);
//         $(idOutput).html('');
//         for (let i = 0; i < baconArr.length; i += 1) {
//           $(idOutput).append(`<p>${baconArr[i]}</p>`);
//         }
//         $(idOutput).show();
//       }
//     });
// }

// function setImage(id, url) {
//   $(id).html('');
//   $(id).append(`<img src="${url}">`);
// }

// function httpGetImage(id, url) {
//   const xmlHttp = new XMLHttpRequest();
//   xmlHttp.open('GET', url);
//   xmlHttp.send();
//   xmlHttp.onreadystatechange = () => {
//     if (xmlHttp.readyState === 4) {
//       setImage(id, xmlHttp.responseURL);
//     }
//   };
// }

function getArticle() {
  const textHttp = new XMLHttpRequest();
  const imageHttp = new XMLHttpRequest();
  textHttp.open('GET', 'https://baconipsum.com/api/?callback=?type=all-meat&start-with-lorem=0&paras=3&sentence=0');
  imageHttp.open('GET', 'https://picsum.photos/30/30/?random');
  textHttp.send();
  imageHttp.send();
  textHttp.onreadystatechange = () => {
    if (textHttp.readyState === 4) {
      imageHttp.onreadystatechange = () => {
        if (imageHttp.readyState === 4) {
          $('#article').append(article(1, textHttp.response, imageHttp.responseURL));
        }
      };
    }
  };
}

$(document).ready(() => {
  $('#baconButton').click(() => {
    getArticle();
    // getJson('all-meat', '3', '0', '#blog1');
    // getJson('meat-and-filler', '2', '0', '#blog2');
    // getJson('all-meat', '3', '0', '#blog3');
    // getJson('meat-and-filler', '2', '0', '#blog4');
    // getJson('meat-and-filler', '3', '0', '#blog5');
    // getJson('meat-and-filler', '4s', '0', '#blog7');
    // getJson('all-meat', '0', '1', '#post1');
    // getJson('all-meat', '0', '1', '#post2');
    // getJson('all-meat', '0', '1', '#post3');

    // httpGetImage('#img1', 'https://picsum.photos/400/400/?random');
    // httpGetImage('#img2', 'https://picsum.photos/400/400/?random');
    // httpGetImage('#img3', 'https://picsum.photos/400/400/?random');
    // httpGetImage('#img4', 'https://picsum.photos/400/400/?random');
    // httpGetImage('#pimg1', 'https://picsum.photos/50/40/?random');
    // httpGetImage('#pimg2', 'https://picsum.photos/50/40/?random');
    // httpGetImage('#pimg3', 'https://picsum.photos/50/40/?random');
  });
  // getJson('all-meat', '3', '0', '#blog1');
  // getJson('meat-and-filler', '2', '0', '#blog2');
  // getJson('all-meat', '3', '0', '#blog3');
  // getJson('meat-and-filler', '2', '0', '#blog4');
  // getJson('meat-and-filler', '3', '0', '#blog5');
  // getJson('meat-and-filler', '4s', '0', '#blog7');
  // getJson('all-meat', '0', '1', '#post1');
  // getJson('all-meat', '0', '1', '#post2');
  // getJson('all-meat', '0', '1', '#post3');

  // httpGetImage('#img1', 'https://picsum.photos/400/400/?random');
  // httpGetImage('#img2', 'https://picsum.photos/400/400/?random');
  // httpGetImage('#img3', 'https://picsum.photos/400/400/?random');
  // httpGetImage('#img4', 'https://picsum.photos/400/400/?random');
  // httpGetImage('#pimg1', 'https://picsum.photos/50/40/?random');
  // httpGetImage('#pimg2', 'https://picsum.photos/50/40/?random');
  // httpGetImage('#pimg3', 'https://picsum.photos/50/40/?random');
});
