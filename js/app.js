//salvo il container delle card in una costante, così da poter aggiungere 
//l'innerHTML iterando l'array che è composto dagli oggetti
const teamContainer = document.querySelector('.team-container');
console.log(teamContainer.innerHTML);
//Salvo gli elementi di input in 4 variabili distinte per poi prendermi il loro value
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
membersIteration(team);

//Quando premo il bottone 'add' resetto innerHTML, creo un nuovo membro con i dati inseriti
//e lu inserisco nell'array che viene nuovamente iterato
addMemberButton.addEventListener('click', function(){

	teamContainer.innerHTML = '';
	//assegno il valore degli input a tre costanti
	const nameValue = memberName.value;
	const roleValue = memberRole.value;
	const imgValue = memberImg.value;
	//passo i 3 valori salvati come parametri della funzione che genera l'oggetto da inserire nel team
	const newMember = createMember(nameValue, roleValue, imgValue);
	team.push( newMember );
	console.log(team);
	//invoco la funzione che itera l'array per inserire il nuovo oggetto nell'array per visualizzarlo nella pagina
	membersIteration(team);
});
//Funzione che itera l'array con i membri del team e inserisce i loro dati nell'innerHTML
function membersIteration(teamArray){
	for(let i = 0; i < teamArray.length; i++){
		const teamMember = team[i];
		//console.log(teamMember);
	
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
}
//Funzione che dati tre parametri crea un oggetto, in questo caso un membro del team
function createMember(name, role, img){
    return{
        name: `${name}`,
        role: `${role}`,
        image: `${img}`
    }
}