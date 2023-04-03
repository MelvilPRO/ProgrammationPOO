var btn = document.querySelector('#clic'); // selection du bouton
var span = document.querySelector('#iterateur'); // selection du span dans le dom

// variable qui va compter
var iterateur = 0;

// Détecter l'événement 'clic' sur le bouton

// Avec fonction anonyme
btn.addEventListener('click', function() {
  iterateur++;
  console.log(iterateur);
  span.innerText = iterateur;
});

/*
  Avec fonction déclaré
  function comptage() {
    iterateur++;
    console.log(iterateur);
    span.innerText = iterateur;
  }

  btn.addEventListener('click', comptage);
*/