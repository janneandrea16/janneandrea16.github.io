
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) { 
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
        if element 
        let article = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.textContent = towns[i].name ;
        article.appendChild(h2);
        document.querySelector('div.article').appendChild(article);

        image.setAttribute('src', towns[i].imageurl);

        //console.table(jsonObject);  // temporary checking for valid response and data parsing
      }});
    

