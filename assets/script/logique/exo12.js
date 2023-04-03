function jet() {
  return Math.floor(Math.random() * (6)) + 1;
}

function dejaBon(tab, tmp) {
  // vérifier dans un tableau que la valeur tmp n'y est pas déjà
  for (var o = 0; o < tab.length; o++) {
    if(tab[o] == tmp) {
      return true;
    }
  }
  return false;
}

var numberLancer = 3; // variable qui m'indique le nombre de jet de dé à effectuer
var numberTotalLancer = 1; // variable qu ienregistre le nombre de jet de dé total
var jetReussi = 0; // le nombre de jet = pour la première à 4, 2, 1
var tab = [0, 0, 0]; // mon tableau des réussites
while(jetReussi != 3) {
  console.log('Tour ' + numberTotalLancer);
  console.log('Nombre de lancer : ' + numberLancer);
  // je vais réaliser une boucle pour réaliser mes jets
  for (var i = 1; i < numberLancer + 1; i++) {
    var tmp = jet();
    console.log('Jet n° ' + i + ' : ' + tmp);
    if(tmp == 4 || tmp == 2 || tmp ==1) {
      // si j'ai fait un jet de 4, 2 ou 1
      if(!dejaBon(tab, tmp)) {
        // Si je n'ai pas déjà enregistré dans mon tableau
        tab[jetReussi] = tmp; // je l'ajoute
        jetReussi++; // j'augmente mon nombre de jet réussi
      }
    }
  }
  numberLancer = 3 - jetReussi;
  numberTotalLancer++;
  console.log(tab[0] + ' | ' + tab[1] + ' | ' + tab[2]);
  console.log(' ----------- ');
}
numberTotalLancer--;
console.log('La partie a durée ' + numberTotalLancer + ' tours');