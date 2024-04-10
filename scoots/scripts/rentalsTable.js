document.addEventListener("DOMContentLoaded", function() {
  fetch("data/rentals.json")
    .then(response => response.json())
    .then(data => {
      const rentalsTable = document.getElementById("rentals-table");
      const tbody = rentalsTable.querySelector("tbody");

      data.rentals.forEach(rental => {
        rental.models.forEach(model => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td><img src="./images/${model.image}" alt="${model.name}"></td>
            <td>${rental.type}</td>
            <td>${model.name}</td>
            <td>${model.capacity}</td>
            <td>${model.price}</td>
          `;
          tbody.appendChild(row);
        });
      });
    })
    .catch(error => console.error("Error fetching data:", error));
});
