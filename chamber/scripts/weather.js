

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

//cruzeiro do sul - acre weather informations 
//Latitude: -7.61764310211554, -72.67983938595285 

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-7.61764310211554&lon=-72.67983938595285&units=imperial&appid=050271941b81b4668fba3e27d09a33dc';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());

    }
  } catch (error) {
    console.log(error);
    
  }
}
function displayResults(data) {
  //Current weather
  currentTemp.innerHTML = `
  <div class="day">
    <p>Today</p>
    <p><strong>  ${data.list[0].main.temp.toFixed(0)}&#176;F</strong></p>
    <img src="https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png" alt="${data.list[0].weather[0].description}">    
    <figcaption>${data.list[0].weather[0].description}</figcaption>
  </div>
  `
  

  for(let i = 0; i < 24; i+=8) {
    //3days forecast
    const today = `${data.list[i].dt_txt}`;
    console.log(today);
    const day = today.slice(8, 11)

    currentTemp.innerHTML += `
    <div class="day">
    <p>Day ${day}</p>
    <p><strong>  ${data.list[i].main.temp.toFixed(0)}&#176;F</strong></p>
    <img src="https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt="${data.list[i].weather[0].description}">    
    <figcaption>${data.list[i].weather[0].description}</figcaption>
    </div>`;

  }

}


apiFetch();

