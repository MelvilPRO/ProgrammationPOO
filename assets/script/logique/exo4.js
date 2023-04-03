// Solution qui marche dans la console
var floor = +prompt('Nombre d\'étages voulus');

var str = '';

for (let index = 0; index < floor; index++) {
  str +=1;
  // str = str +1;
  console.log(str);
}

// Solution qui marche partout
for (let i = 0; i <= floor; i++) {
  str = '';
  for (let j = 0; j < i; j++) {
    str +=1;
  }
  console.log(str);
}