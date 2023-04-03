function factor(nb) {
  var factor = 1;
  while(nb != 1) {
    factor *= nb;
    // factor = factor * nb;
    nb--;
  }
  return factor;
}

var nombre = +prompt('Saisir un nombre');
console.log(factor(nombre));