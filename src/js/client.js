$(init);

const newsSources = ['bbc-news', 'the-guardian-uk', 'associated-press', 'breitbart-news', 'the-economist', 'metro', 'newsweek', 'recode', 'the-new-york-times', 'the-verge'];

function init() {
  $('div').on('click', '.highlight', function() {
    const data = {
      title: $(this).parent().find('h2').text(),
      description: $(this).parent().find('p').text(),
      url: $(this).parent().find('a').attr('href'),
      image: $(this).parent().parent().find('img').attr('src')
    };
    $.post('http://localhost:8000/highlights', data)
    .done(data => {
      console.log(data);
    })
    .fail(data => {
      console.log(data);
    });
  });
  newsSources.forEach(function(source) {
    newsApi(source);
  });
}

function newsApi(source) {
  $
  .get(`https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=e791d42519134d8ca50ff49ea0b3d33a`)
  .done(data => {
    var articleArray = data.articles;
    articleArray.forEach(function(element) {
      $(`<div class="grid-item">
      <img src="${element.urlToImage}">
        <div class="hover">
          <br >
          <h2>${element.title}</h2>
          <hr >
          <p>${element.description}</p>
          <hr >
          <button class="highlight btn btn-outline-primary">Highlight</button>
          <button class="btn btn-outline-primary"><a href="${element.url}">Read</a></button>
        </div>
      </div>`)
      .appendTo('#news');
    });
  });
}
