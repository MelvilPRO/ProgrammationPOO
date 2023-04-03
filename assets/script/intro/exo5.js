var nb1 = 5;
var nb2 = 3;
var tmp;
console.log('nb1 : ', nb1);
console.log('nb2 : ', nb2);
tmp = nb1;
nb1 = nb2;
nb2 = tmp;
console.log('nb1 : ', nb1);
console.log('nb2 : ', nb2);
/*

Ne fonctionne qu'avec des nombres
  nb1 = nb1 + nb2;
  nb2 = nb1 - nb2;
  nb1 = nb1 - nb2;
  console.log('nb1 : ', nb1);
  console.log('nb2 : ', nb2);

*/
