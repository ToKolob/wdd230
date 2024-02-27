const displayVisits = document.querySelector('#visits');

// Get today's date in format April, 5
const today = new Date();
const date = today.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' });

// Retrieve last visit date from local storage
const lastVisit = localStorage.getItem('date');


if (!lastVisit) {
  // If no last visit date is found, it's the user's first visit
  displayVisits.innerHTML = `Welcome! Let us know if you have any questions.`;
} else if (lastVisit === date) {
  // If the last visit date is the same as today's date
  displayVisits.innerHTML = `Back so soon! Awesome!`;
} else {
  // Calculate the difference in days between today and the last visit
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const todayDate = new Date(date);
  const lastVisitDate = new Date(lastVisit);
  const differenceInDays = Math.floor((todayDate - lastVisitDate) / millisecondsPerDay);

  displayVisits.innerHTML = `You last visited ${differenceInDays} days ago`;
}

// Store today's date in local storage for future visits
localStorage.setItem('date', date);

console.log(date);
console.log(lastVisit);
