//infor for inHome page or index
const requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f292db7505b0a669d84477ccdd0ad970"
fetch(requestURL)
.then((response) => {
    return response.json()
})
.then((fiveDayData) => {
    console.table(fiveDayData)

    // grabbing the list
    let fiveDayList = fiveDayData.list

    // filter the list 
    let filteredList = fiveDayList.filter(day => day.dt_txt.includes("18:00:00"))

    // create each days forecast
    // loop
    for (let i = 0; i < filteredList.length; i++) {
        let curDay = filteredList[i]

        let name = document.createElement("h3");
        let temp = document.createElement("p");
        let icon = document.createElement("img");
       

        // get the whole date time string
        let dateTimeString = curDay.dt_txt
        // break it into date and time 
        let dateTimeParts = dateTimeString.split(" ")
        // grab just the date
        let dateStringRaw = dateTimeParts[0]
        // break the date into parts [year, month, day]
        let dateStringParts = dateStringRaw.split('-')
        // Create a date object with correct format new Date(year, monthIndex, day)
        let date = new Date(dateStringParts[0], dateStringParts[1] - 1, dateStringParts[2])
        console.log(date)
        let dateNum = date.getDay()

        switch (dateNum) {
            case 0:
                name.innerHTML = "Sunday"
                break;
            case 1:
                name.innerHTML = "Monday"
                break;
            case 2:
                name.innerHTML = "Tuesday"
                break;
            case 3:
                name.innerHTML = "Wednesday"
                break;
            case 4:
                name.innerHTML = "Thursday"
                break;
            case 5:
                name.innerHTML = "Friday"
                break;
            case 6:
                name.innerHTML = "Saturday"
                break;
        }

        
        // set the icon
        let iconId = curDay.weather[0].icon
        icon.src = `http://openweathermap.org/img/wn/${iconId}.png`

        // set the temp
        let main = curDay.main;
        temp.innerHTML = Math.round(main.temp_max) + " °F";


        // append the children
        let containerId = 'day' + (i + 1)
        let container = document.getElementById(containerId)
        container.appendChild(name)
        container.appendChild(icon)
        container.appendChild(temp)
        
    }
})


console.log("hello")
const weatherURL="https://api.openweathermap.org/data/2.5/weather?id=f292db7505b0a669d84477ccdd0ad970";
fetch(weatherURL)
.then((response) => {
    return response.json()
})
.then((weathersummary) => {
    console.log(weathersummary);
    document.getElementById("currently").innerHTML=weathersummary.weather[0].main;
    document.getElementById("temperature").innerHTML=weathersummary.main.temp;
    document.getElementById("humidity").innerHTML = weathersummary.main.humidity;
    document.getElementById("wind_speed").innerHTML= weathersummary.wind.speed;
});

//Weather summary on the hero image
const temp = document.getElementById('temp').innerHTML;
const speed = document.getElementById('speed').innerHTML;


let windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, .16)) + (0.4275 * temp * Math.pow(speed, .16));
  if (temp <= 50 && speed > 3) {
     windchill = Math.round(windchill);
  } 
  else {
     windchill = "N/A";
  }
document.getElementById('windchill').innerHTML = windchill;
