function toggleMenu() {
  document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
 }

const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay(); 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var dateStr = day1[day] + ', ' + date + ' ' + month1[month] + ' ' + year;
document.getElementById("dates").innerHTML = dateStr;
document.getElementById("copyright").innerHTML = year;


const url = "https://mfuller45.github.io/final/data/scoots.json";
fetch(url)
  .then((response) => response.json())
    .then((data) => {
        data.rentals.forEach((rental, index) => {
            document.getElementById('rhd' + (index + 1)).innerHTML = rental.half1;
            document.getElementById('rfd' + (index + 1)).innerHTML = rental.full1;
            document.getElementById('whd' + (index + 1)).innerHTML = rental.half2;
            document.getElementById('wfd' + (index + 1)).innerHTML = rental.full2;
        });
});

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px"
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);


  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}