const myTown = document.querySelector("#town");
const myDescription = document.querySelector("#description");
const myTempeture = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic");
const myTempetureForecast = document.querySelector("#temperatureForecast");

const myTempetureForecast2 = document.querySelector("#temperatureForecast2");
const myTempetureForecast3 = document.querySelector("#temperatureForecast3");
const humidity = document.querySelector("#humidity");

const myKey = "00519c4bdbb30c883815029f736b771a";
const myLat = "-12.045467672787273";
const myLong = "-77.03025468147189";
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}`;
const myForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}`;

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function capitalizeWords(string) {
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function displayResults(data) {
  myTown.innerHTML = data.name;
  myDescription.innerHTML = capitalizeWords(data.weather[0].description);
  myTempeture.innerHTML = `${Math.round(
    kelvinToCelsius(data.main.temp)
  )}&deg;C`;
  myTempetureForecast.innerHTML = `Today: ${Math.round(
    kelvinToCelsius(data.main.temp)
  )}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  myGraphic.setAttribute("SRC", iconsrc);
  myGraphic.setAttribute("alt", data.weather[0].description);
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
}
apiFetch(myURL);

/*Forecast2*/

async function apiFetchForecast2(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data);
      displayResultsForecast2(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResultsForecast2(data) {
  const dateString = data.list[6].dt_txt;
  const dateObject = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekIndex = dateObject.getDay();
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];
  //console.log(dayOfWeek);
  myTempetureForecast2.innerHTML = `${dayOfWeek}: ${Math.round(
    kelvinToCelsius(data.list[6].main.temp_max)
  )}&deg;C`;
}

apiFetchForecast2(myForecastURL);

/*forecast3*/
async function apiFetchForecast3(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data);
      displayResultsForecast3(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResultsForecast3(data) {
  const dateString = data.list[21].dt_txt;
  const dateObject = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekIndex = dateObject.getDay();
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];
  //console.log(dayOfWeek);
  myTempetureForecast3.innerHTML = `${dayOfWeek}: ${Math.round(
    kelvinToCelsius(data.list[21].main.temp_max)
  )}&deg;C`;
}

apiFetchForecast3(myForecastURL);