var prenom = prompt('Saisissez votre prénom');
var nom = prompt('Saisissez votre nom');
var ddn = +prompt('Saisissez l\'année de naissance');

// Manière simple
var age = 2022 - ddn;

// Manière plus dynamique
var year = new Date().getFullYear();
var age = year - ddn;

console.log('Bonjour ' + prenom + ' ' + nom + ' vous avez ' + age + ' ans');
// console.log(`Bonjour ${prenom} ${nom} vous avez ${age} ans`);