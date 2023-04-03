function translateToString() {
  var tab = ['zéro', 'Un', 'Deux', 'Trois', 'Quatre', 'Cinq'];
  var saisie;
  do {
    saisie = prompt('Saisissez un nombre compris entre 0 et 5');
  } while (isNaN(saisie) || saisie > 5 || saisie < 0);
  console.log('Saisie : ' + saisie + ' => ' + tab[saisie]);
}

translateToString();