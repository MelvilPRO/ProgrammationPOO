// Sélection
var titre1 = document.querySelector('#titre1');
var titre2 = document.querySelector('#titre2');
var titre3 = document.querySelector('#titre3');

var contenu1 = document.querySelector('#contenu1');
var contenu2 = document.querySelector('#contenu2');
var contenu3 = document.querySelector('#contenu3');

titre1.addEventListener('click', function() {
  contenu1.classList.remove('invisible');
  contenu2.classList.add('invisible');
  contenu3.classList.add('invisible');
});

titre2.addEventListener('click', function() {
  contenu2.classList.remove('invisible');
  contenu1.classList.add('invisible');
  contenu3.classList.add('invisible');
});

titre3.addEventListener('click', function() {
  contenu3.classList.remove('invisible');
  contenu1.classList.add('invisible');
  contenu2.classList.add('invisible');
});