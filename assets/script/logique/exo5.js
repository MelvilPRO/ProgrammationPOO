function isPrime(num) {
  var isPrime = true;
  for (let i = 2; i < num; i++) {
    if(num % i == 0) {
      isPrime = false;
      break; // permet de sortir exceptionnelement de la boucle avant d'accèder à la valeur limite
    }
  }
  return isPrime;
}

var somme = 0;
for (let i = 2; i <= 100; i++) {
  if(isPrime(i)){
    console.log(i);
    somme += i; // somme = somme + i;
  }
}
console.log(somme);