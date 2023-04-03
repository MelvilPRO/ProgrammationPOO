var employees = [
  {
    name: 'Jacques',
    children: 0,
    handicap: false,
    brut: 5000
  }, {
    name: 'Martine',
    children: 5,
    handicap: false,
    brut: 4800,
  }, {
    name: 'Jean',
    children: 2,
    handicap: true,
    brut: 3500,
  }, {
    name: 'Justine',
    children: 1,
    handicap: false,
    brut: 2900,
  }
];

function calculTx(emp) {
  var base = 18;
  var ass = 7;
  var reduc = 0;

  if(emp.handicap) {
    ass = 0;
  }

  if(emp.children >0 && emp.children < 3) {
    reduc = emp.children * 2;
  } else if(emp.children >= 3) {
    reduc = 6;
  } else {
    reduc = 0;
  }
  return 1 - (((base + ass) - reduc) / 100);
}

for (var emp of employees) {
  var tx = calculTx(emp);
  var salary = tx * emp.brut;
  console.log(emp.name + ' a ' + salary + '€ net');
}