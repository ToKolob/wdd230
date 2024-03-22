const adv = document.querySelectorAll('.adv')

async function getMembers() {
  try {
    const response = await fetch('./scripts/data/members.json');
    const members = await response.json();

    return members

  } catch (error) {
    console.error('Error fetching members:', error);
  }
}
async function displayAdv() {
  //clear previous content
  adv1.innerHTML = ''
  adv2.innerHTML = ''
  adv3.innerHTML = ''
  //call async function
  const members = await getMembers()
  //filter members gold
  const goldMembers = members.companies.filter(member => member.membership_level === 'Gold')
  //select 3 ramdonly
  const selectMembers = goldMembers.sort(() => 0.5 - Math.random()).slice(0,3)
  //display content
  for(let i = 0; i < 3; i++){
    adv[i].innerHTML = `
    <h2>${selectMembers[i].name}</h2>
    <p>${selectMembers[i].other_information}</p>
  `
  }
  

}
getMembers().then(displayAdv)


