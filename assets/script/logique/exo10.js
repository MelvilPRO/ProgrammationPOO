function isBissextile(year) {
  /*
    if(year % 4 == 0) {
      return true;
    } else {
      return false;
    }
  */
 return year % 4 == 0;
}

var year = +prompt('Saisir une année à tester (AAAA)');
if(isBissextile(year)) {
  console.log('OUI');
} else {
  console.log('NON');
}