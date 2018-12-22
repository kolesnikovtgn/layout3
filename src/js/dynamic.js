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

function getArticle(styleArticleNum, paras, headLineText) {
  const textHttp = new XMLHttpRequest();
  const imageHttp = new XMLHttpRequest();
  textHttp.open('GET', `https://baconipsum.com/api/?callback=?type=all-meat&start-with-lorem=0&paras=${paras}&sentence=0`);
  imageHttp.open('GET', 'https://picsum.photos/500/400/?random');
  textHttp.send();
  imageHttp.send();
  textHttp.onreadystatechange = () => {
    if (textHttp.readyState === 4) {
      imageHttp.onreadystatechange = () => {
        if (imageHttp.readyState === 4) {
          $('#article').prepend(article(styleArticleNum, JSON.parse(textHttp.responseText), imageHttp.responseURL, headLineText));
        }
      };
    }
  };
}

$(document).ready(() => {
  $('#baconButton').click(() => {
    getArticle(1, 3, 'ABOUT SUPER LOGO');
    getArticle(2, 3, 'SOME WORDS OUR CEO');
  });
});
