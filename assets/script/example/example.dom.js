var body = document.body;
console.log(body);
console.log(body.childNodes);
body.style.backgroundColor = 'red';

/* ------------------------------ */
var p = document.createElement('p');
console.log(p);
var test1 = document.querySelector('#test1');
test1.appendChild(p);
p.innerText = 'innerText : <strong>Prout</strong>'; // modifie le texte
p.innerHTML += '<br>innerHTML : <strong>Prout</strong>'; // modifie le texte en interpretant les balises HTML
/* --------------------------- */
// Selection des éléments de classe prout
var prout = document.querySelectorAll('.prout');
console.log(prout);
prout.forEach(function(elt, key) {
  elt.style.backgroundColor = 'darkBlue'; // fond en bleu foncé
  elt.style.color = 'white';
  if(key % 2 == 0) {
    elt.classList.toggle('super');
  }
});