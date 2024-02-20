const temperatureDiv = document.querySelector('#temperature');
const windSpeedDiv = document.querySelector('#windSpeed');
const moreInfoDiv = document.querySelector('#moreInfo');

function capitalize(str) {
  return str.replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });
}
function windChill(temp, speed) {
  console.log(temp, speed);
  if (temp <= 50 && speed > 3) {
    let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    return `${windChill} °F`;
  }
  else {
    return 'Not applicable'
  }
}

//são paulo weather informations
const openWeather = async () => {
  const url = 'https://open-weather13.p.rapidapi.com/city/sao%20paulo';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5a0c542bdcmsh28b3208390e6518p18e167jsnc79ac1a5c712',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    temperatureDiv.innerHTML = 
      `<p><strong>Temperature now: </strong> ${result.main.temp} °F </p>
      <p><strong>Max Temperature: </strong> ${result.main.temp_max} °F</p> 
      <p><strong>Min Temperature: </strong> ${result.main.temp_min} °F</p>`;
    windSpeedDiv.innerHTML =
      `<p><strong>Wind Speed: </strong> ${result.wind.speed} mph</p>
      <p><strong> Windchill: </strong> ${windChill(result.main.temp, result.wind.speed)}</p>`;
    

    moreInfoDiv.innerHTML = `<p><strong> ${capitalize(result.weather[0].description)} </strong> </p>`;
  } catch (error) {
    console.error(error);
  }
}

openWeather();
