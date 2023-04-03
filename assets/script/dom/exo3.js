// Container global
var divCorrec3 = document.querySelector('#correcExo3');

// Création de la div contenant la liste
var myDiv = document.createElement('div');
// Création de la liste non ordonnée
var myUl = document.createElement('ul');
// Ajout de ma liste dans ma div et la div dans mon container
divCorrec3.appendChild(myDiv);
myDiv.appendChild(myUl);

// Création de la fonction  qui va permettre d'ajotuer des éléments dans la liste avec des liens
function addLiLink(link, textLink) {
  var myLi = document.createElement('li');
  var myA = document.createElement('a');
  myA.href = link;
  myA.innerText = textLink;
  myA.target = '_blank'; // création d'un nouvel onglet lors du clic sur le lien
  myLi.appendChild(myA);
  myUl.appendChild(myLi);
}


var promptLink; // le lien saisie par user
var promptText; // le texte du lien

do {
  promptLink = prompt('Saisir votre lien, tapez \'FIN\' pour arrêter !');
  if(promptLink != 'FIN') {
    promptText = prompt('Saisir le texte du lien');
    addLiLink(promptLink, promptText);
  }
} while (promptLink != 'FIN');