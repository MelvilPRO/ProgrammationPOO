var poids = +prompt('Saisir poids en kg');
var taille = +prompt('Saisir taille en m');
var imc = poids / (taille * taille);
console.log('Votre imc : ', imc);