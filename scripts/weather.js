

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

//sao paulo weather informations
//lat = -23.5475 lon = -46.6361
//in celcius
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-23.5475&lon=-46.6361&units=metric&appid=050271941b81b4668fba3e27d09a33dc';

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
  currentTemp.innerHTML = `<strong>${data.list[0].main.temp.toFixed(0)}</strong>`;
  const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  const desc = data.list[0].weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}


apiFetch();

