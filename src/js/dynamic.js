const article = (i, text, urlImage, headLineText) => `
  <div class="article${i}">
  <div class="article${i}__header container-row">
      <div class="article${i}__square"></div>
      <div class="article${i}__headline">${headLineText}</div>
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

function httpGetData(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (this.status === 200) {
        resolve(xhr);
      } else {
        reject();
      }
    };
    xhr.onerror = () => {
      reject();
    };
    xhr.send();
  });
}

$(document).ready(() => {
  $('#baconButton').click(() => {
    Promise.all([httpGetData('GET', 'https://baconipsum.com/api/?callback=?type=all-meat&start-with-lorem=0&paras=3&sentence=0'),
      httpGetData('GET', 'https://picsum.photos/30/30/?random')])
      .then((results) => {
        $('#article').prepend(article(1, JSON.parse(results[0].responseText),
          results[1].responseURL, 'ABOUT SUPER LOGO'));
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
