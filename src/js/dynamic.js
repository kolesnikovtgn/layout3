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

function httpGetData(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status === 200) {
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

async function asyncGetData() {
  const text = await httpGetData('GET', 'https://baconipsum.com/api/?callback=?type=all-meat&start-with-lorem=0&paras=3&sentence=0');
  const url = await httpGetData('GET', 'https://picsum.photos/400/400/?random');

  return [text, url];
}

$(document).ready(() => {
  $('#baconButton').click(() => {
    asyncGetData()
      .then((data) => {
        $('#article').prepend(article(1, JSON.parse(data[0].responseText), data[1].responseURL));
      });
  });
});
