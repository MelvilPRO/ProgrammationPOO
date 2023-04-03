var btn = document.querySelector('#sendForm');
var resultat = document.querySelector('#resultat');
var resNom = document.querySelector('#resNom');
var resPrenom = document.querySelector('#resPrenom');
var resAge = document.querySelector('#resAge');

btn.addEventListener('click', function() {
  var nom = document.querySelector('#nom');
  var prenom = document.querySelector('#prenom');
  var ddn = document.querySelector('#ddn');
  // var nom = document.querySelector('#nom').value;
  // var prenom = document.querySelector('#prenom').value;
  // var ddn = document.querySelector('#ddn').value;
  resultat.classList.remove('invisible');
  resNom.innerText = nom.value;
  resPrenom.innerText = prenom.value;
  resAge.innerText = new Date().getFullYear() - new Date(ddn.value).getFullYear();
});