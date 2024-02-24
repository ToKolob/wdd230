const displayVisits = document.querySelector('#visits');

let numberOfVisits = parseInt(localStorage.getItem('visits')) || 0;
numberOfVisits++;
localStorage.setItem('visits', numberOfVisits);
displayVisits.innerHTML = `Page Visits: ${numberOfVisits > 1 ? numberOfVisits : `This is your first visit!`}`