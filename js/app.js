//creo un singolo oggetto come prova e lo stampo con console.log
// const teamMember = {
//     name : 'Weyne Barnett',
//     role : 'Founder & CEO' 
// }

// console.log(teamMember.name);

// card.innerHTML = `<div class="card-text">
// <h3>${teamMember['name']}</h3>
// <p>Founder & CEO</p>
// </div>`

//salvo il container delle card in una costante, così da poter aggiungere 
//l'innerHTML iterando l'array che è composto dagli oggetti
const teamContainer = document.querySelector('.team-container');
console.log(teamContainer.innerHTML);

const memberName = document.getElementById('name');
console.log(memberName);

const memberRole = document.getElementById('role');
console.log(memberRole);

const memberImg = document.getElementById('image');
console.log(memberImg);

const addMemberButton = document.getElementById('addMemberButton');
console.log(addMemberButton);
//creo un array composto da più oggetti
//ogni oggetto rappresenta un membro del team
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg'
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg'
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg'
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg'
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg'
    },
  ];

function createMember(name, role, img){
    return{
        name: `${name}`,
        role: `${role}`,
        image: `${img}`
    }
}

console.log(createMember());

const newMember = createMember('Alessandro','Director','new-team-member-02.jpg');

team.push( newMember );
console.log(team);

for(let i = 0; i < team.length; i++){
    const teamMember = team[i];
    console.log(teamMember);

    teamContainer.innerHTML += `<div class="team-card">
                                    <div class="card-image">
                                        <img
                                        src="img/${teamMember.image}"
                                        alt="${teamMember.name}"
                                        />
                                    </div>
                                    <div class="card-text">
                                        <h3>${teamMember.name}</h3>
                                        <p>${teamMember.role}</p>
                                    </div>
                                    </div>`
}


  
