// Sélection des éléments
var container = document.querySelector('#containerColor');
var clicColor = document.querySelector('#clicColor');
var affichRed = document.querySelector('#affichRed');
var affichGreen = document.querySelector('#affichGreen');
var affichBlue = document.querySelector('#affichBlue');

// Détecter l'événement click sur mon bouton 'changer' dans le template
clicColor.addEventListener('click', function() {
  // Je génère mes nombres aléatoires
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  //On place ensuite le nombre dans les span (ou les inputs)
  affichRed.value = red;
  affichGreen.value = green;
  affichBlue.value = blue;

  // Modification de la couleur de fond
  container.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});


// Partie 2
// Sélection du bouton qui permet de valider le choix du formulaire
var formColor = document.querySelector('#formColor');
// Si j'ai fait une erreur il existe un emplacement dans le template qui s'appelle #error et qui me permettra d'afficher une erreur
var messError = document.querySelector('#error');

formColor.addEventListener('click', function() {
  var red = affichRed.value;
  var green = affichGreen.value;
  var blue = affichBlue.value;

  if (parseInt(red) >= 0 && parseInt(red) <= 255 && parseInt(green) > 0 && parseInt(green) <= 255 && parseInt(blue) > 0 && parseInt(blue) <= 255) {
    container.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  } else {
    console.log('Erreur de sélection de couleur');
    messError.classList.remove('invisible');
    setTimeout(function(){
      messError.classList.add('invisible');
    }, 3000);
  }

});