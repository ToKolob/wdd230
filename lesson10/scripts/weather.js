

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'http://api.openweathermap.org/data/2.5/forecast?lat=49.7596&lon=6.6412&units=imperial&appid=050271941b81b4668fba3e27d09a33dc';

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


// {cod: '200', message: 0, cnt: 40, list: Array(40), city: {…}}
// city
// : 
// {id: 2821164, name: 'Trier', coord: {…}, country: 'DE', population: 100129, …}
// cnt
// : 
// 40
// cod
// : 
// "200"
// list
// : 
// Array(40)
// 0
// : 
// {dt: 1710622800, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 1
// : 
// {dt: 1710633600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 2
// : 
// {dt: 1710644400, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 3
// : 
// {dt: 1710655200, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 4
// : 
// {dt: 1710666000, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 5
// : 
// {dt: 1710676800, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 6
// : 
// {dt: 1710687600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 7
// : 
// {dt: 1710698400, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 8
// : 
// {dt: 1710709200, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 9
// : 
// {dt: 1710720000, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 10
// : 
// {dt: 1710730800, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 11
// : 
// {dt: 1710741600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 12
// : 
// {dt: 1710752400, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 13
// : 
// {dt: 1710763200, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 14
// : 
// {dt: 1710774000, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 15
// : 
// {dt: 1710784800, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 16
// : 
// {dt: 1710795600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 17
// : 
// {dt: 1710806400, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 18
// : 
// {dt: 1710817200, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 19
// : 
// {dt: 1710828000, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 20
// : 
// {dt: 1710838800, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 21
// : 
// {dt: 1710849600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 22
// : 
// {dt: 1710860400, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 23
// : 
// {dt: 1710871200, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 24
// : 
// {dt: 1710882000, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 25
// : 
// {dt: 1710892800, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 26
// : 
// {dt: 1710903600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 27
// : 
// {dt: 1710914400, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 28
// : 
// {dt: 1710925200, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 29
// : 
// {dt: 1710936000, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 30
// : 
// {dt: 1710946800, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 31
// : 
// {dt: 1710957600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 32
// : 
// {dt: 1710968400, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 33
// : 
// {dt: 1710979200, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 34
// : 
// {dt: 1710990000, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 35
// : 
// {dt: 1711000800, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 36
// : 
// {dt: 1711011600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 37
// : 
// {dt: 1711022400, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 38
// : 
// {dt: 1711033200, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// 39
// : 
// {dt: 1711044000, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …}
// length
// : 
// 40
// [[Prototype]]
// : 
// Array(0)
// message
// : 
// 0
// [[Prototype]]
// : 
// Object