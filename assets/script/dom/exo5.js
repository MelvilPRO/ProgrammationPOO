// Selecltion de la div de correction
var correcExo5 = document.querySelector('#correcExo5');

var persos = [
  {
    name: 'Amiral Akbar',
    online: true
  }, {
    name: 'Darth Vador',
    online: true
  }, {
    name: 'Luc Skywalker',
    online: false
  }, {
    name: 'Princesse Leia',
    online: false
  }, {
    name: 'Hann Solo',
    online: true
  }, {
    name: 'R2D2',
    online: false
  }, {
    name: 'C3PO',
    online: true
  }, {
    name: 'Chewbacca',
    online: false
  }, {
    name: 'Yoda',
    online: true
  }, {
    name: 'Darth Sidious',
    online: true
  }
];

// Création de la liste de personnage 'ul'
var myUl = document.createElement('ul');

// Parcourir une liste
for (var perso of persos) {
  var myLi = document.createElement('li');
  myLi.innerText = perso.name;
  if(perso.online) {
    myLi.style.backgroundColor = 'green';
    myLi.style.color = 'blue';
  } else {
    myLi.style.backgroundColor = 'white';
    myLi.style.color = 'red';
  }
  myUl.appendChild(myLi);
}

correcExo5.appendChild(myUl);

/* ---------------------- */
var newPersoName;
var newPersoOnline;

function addCharacter(nom, presence) {
  // Pour l'ajout dans le tableau je dois créer un nouvel objet
  var tmp = {
    name: nom,
    online: null
  };

  // Ajout dans le DOM
  var myLi = document.createElement('li');
  myLi.innerText = tmp.name;
  if(presence == 'OUI' || presence == 'o') {
    myLi.style.backgroundColor = 'green';
    myLi.style.color = 'blue';
    tmp.online = true;
  } else {
    myLi.style.backgroundColor = 'white';
    myLi.style.color = 'red';
    tmp.online = false;
  }
  myUl.appendChild(myLi);
  persos.push(tmp);
}

do {
  newPersoName = prompt('Saisir le nom du personnage (FIN pour arrêter)');
  if(newPersoName != 'FIN') {
    newPersoOnline = prompt('Le personnage est-il connecté ? Taper OUI (ou o) pour vrai');
    addCharacter(newPersoName, newPersoOnline);
  }
} while (newPersoName != 'FIN');