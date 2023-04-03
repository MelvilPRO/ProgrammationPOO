for (let index = 10; index >= 0; index--) {
  console.log(index);
}
console.log('IGNITION');
console.log('RDV sur Mars');
console.log('-------------------------');

// setInterval qui permet de déclencher une actions toutes les x ms
var i = 10;
var test = setInterval(function() {
  console.log(i);
  i--; // i = i -1;
  if(i == -1) {
    console.log('BOUM');
    clearInterval(test);
  }
}, 1000);