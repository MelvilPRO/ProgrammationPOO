var today = new Date();
var todayYear = today.getFullYear();

var saisie = +prompt('Année de naissance');
var tarif = 90;

// Pour vérifier la saisie de l'utilisateur je vais pouvoir utiliser la fonction isNaN qui renvoie vrai si la saisie n'est pas un nombre

if(!isNaN(saisie)) {
  var age = todayYear - saisie;
  console.log('Votre tarif est de : ');

  if(age < 12) {
    tarif = 0;
  } else if(age<=18) {
    tarif /=2;
    // tarif = tarif /2;
  } else if(age > 70) {
    tarif *=0.7;
    // tarif = tarif * 0.7;
  } else {
    tarif = 90;
  }

  console.log(tarif + '€');
} else {
  console.log('On a dit une année de naissance gros boulet !');
}