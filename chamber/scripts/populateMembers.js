const mainElement = document.querySelector('main');
const buttonsContainer = document.createElement('div');
const gridButton = document.createElement('button');
const listButton = document.createElement('button');
const members = getMembers();
const divContainer = document.createElement('div');

gridButton.textContent = 'Grid';
listButton.textContent = 'List';
gridButton.classList.add('toggle-button');
listButton.classList.add('toggle-button');
divContainer.classList.add('container');
buttonsContainer.classList.add('buttons-container');
buttonsContainer.append(gridButton, listButton);
mainElement.append(buttonsContainer, divContainer);

listButton.addEventListener('click',()=> displayList(members));
gridButton.addEventListener('click',()=> displayGrid(members));

async function getMembers() {
  try {
    const response = await fetch('./scripts/data/members.json');
    const members = await response.json();

    return members

  } catch (error) {
    console.error('Error fetching members:', error);
  }
}
async function displayGrid() {
  const members = await getMembers()

  divContainer.innerHTML = ''

  members.companies.forEach((member) => {
    const card = document.createElement('section');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${member.name}</h3>
      <p>${member.other_information}</p>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      <p>${member.membership_level}</p>


    `;
    divContainer.appendChild(card);
  });   
}
async function displayList() {
  try {
    const members = await getMembers();
    
    divContainer.innerHTML = ''

    const table = document.createElement('table');
    table.innerHTML = 
      `<thead> 
        <tr>
          <th>Name</th>
          <th>Other Information</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Membership Level</th>
        </tr>
      </thead>
      <tbody>`;


    members.companies.forEach((member) => {
      table.innerHTML += `
        <tr>
          <td>${member.name}</td>
          <td>${member.other_information}</td>
          <td>${member.address}</td>
          <td>${member.phone}</td>
          <td><a href="${member.website}" target="_blank">${member.website}</a></td>
          <td>${member.membership_level}</td>
        </tr>`;
    });

    divContainer.appendChild(table);
  } catch (error) {
    console.error('Error displaying list:', error);
  }
}







