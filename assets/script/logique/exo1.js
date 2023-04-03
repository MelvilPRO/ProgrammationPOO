var saisie = +prompt('Année de naissance');
var age = new Date().getFullYear() - saisie;

if(age >= 18) {
  console.log('majeur');
} else {
  console.log('Mineur');
}