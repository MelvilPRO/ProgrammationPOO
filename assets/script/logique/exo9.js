function tableMultiplication(nb) {
  console.log('Voici la table de multiplication de ' + nb);
  for (var index = 0; index < 11; index++) {
    var tmp = index * nb;
    console.log(index + ' x ' + nb + ' = ' + tmp);
    
  }
}

var table = +prompt('Saisir le nombre de la table');
tableMultiplication(table);