var ht = +prompt('Saisissez votre prix');
var taxe = ht * 0.196;
var ttcSansFraisDePort = ht + taxe;
var ttc = ttcSansFraisDePort + 5;

console.log('La taxe est de : ', taxe);
console.log('Le prix TTC est de : ', ttcSansFraisDePort);
console.log('le prix final est de : ', ttc);