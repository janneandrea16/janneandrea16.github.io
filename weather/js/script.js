/*Hamburger Menu*/
function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}

/*Display date*/
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = new Date();
var day = currentDate.getDay();        
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
                           
document.getElementById("displaydate").textContent = `${days[day]}, ${date} ${months[month]} ${year}`; 

//Pancakes message
const d = new Date().getDay();
let status="";
if (d == 5){
   status ="Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";
    }
document.getElementById("pancakes").innerHTML = status;

//

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $("#js-hero img").css({
    width: (100 + scroll/5) + "%"
  })
})




const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
      });

const prophets = jsonObject['prophets'];

for (let i = 0; i < prophets.length; i++ ) {(how would you do this with a foreach method?)

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    card.appendChild(h2);
    document.querySelector('div.cards').appendChild(card);

    image.setAttribute('src', prophets[i].imageurl);