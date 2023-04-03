var colorHexa = prompt('Saisissez une couleur de police');
var backGroundHexa = prompt('Saisissez une couleur pour le fond');
var text = prompt('Saisir un texte');

console.log(colorHexa, backGroundHexa, text);

var myDiv = document.querySelector('#blocExo2');
myDiv.style.color = '#' + colorHexa;
myDiv.style.backgroundColor = '#' + backGroundHexa;
myDiv.innerText = text;