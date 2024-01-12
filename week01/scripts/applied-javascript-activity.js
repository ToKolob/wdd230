// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		weekday: "long",
    month: "short",
		day: "numeric",	
		year: "numeric"
	};

// Question #5 (change)
today1.innerHTML = new Date().toLocaleDateString("en-US", options);
// Question #6 (change)
today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;	
// Question #7
let quantity = document.querySelector('#q').value;

// Question #8
const firstAside = document.querySelector('aside:first-of-type');
firstAside.innerHTML = "Welcome to <mark> our </mark> neighborhood";

// Question #9
document.querySelector('#temp').value = `${getCelsius(33).toFixed(1)} °C`; 

// Question #10
const divs = document.querySelectorAll('div');
numberOfDivs = divs.length;

const divsQuantity = document.querySelector('#divs');
divsQuantity.innerHTML = `There are ${numberOfDivs} divs elements on the page`;


// Question #11
const cNames = document.querySelector('#c-names');
//cities that star with C
const filterCities = citynames.filter(city => city.startsWith('C'));
cNames.innerHTML = filterCities