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