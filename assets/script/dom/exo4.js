// Selection du container
var correcExo4 = document.querySelector('#correcExo4');

// Demandez les informations à l'utilisateur
var nbStep = +prompt('Nombre d\'étages ?');
var colorFirst = prompt('Première couleur');
var colorSecond = prompt('Seconde couleur');

// Création d'une fonction permettant d'afficher une ligne de 1
function step(nb, color) {
  var mySpan = document.createElement('span');
  mySpan.style.color = color;
  for (var index = 1; index < nb + 1; index++) {
    mySpan.innerText = mySpan.innerText + '1 ';
  }
  var myBr = document.createElement('br');
  correcExo4.appendChild(mySpan);
  correcExo4.appendChild(myBr);
}

// Première boucle croissante <=> première moitiée du losange
for(var i = 1; i < nbStep +1; i++) {
  step(i, colorFirst);
}

// Deuxième boucle décroissante <=> deuxième moitiée du losange
for(var j = nbStep - 1; j > 0; j--) {
  step(j, colorSecond);
}