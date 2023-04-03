// Création d'une variable qui va déterminer la vitesse de déplacement à chaque evt
var speed = 10;

// Sélection du carré qui bouge + Initialisation de la position
var mvSq = document.querySelector('#sqMvt');
mvSq.style.top = '0px';
mvSq.style.left = '0px';

// Event permet de capter des informations liées à la touche tapé
// Dans le cas d'une touche pressé => event.key pour repérer la touche
document.addEventListener('keydown', function(evt) {
  // parseInt converti du string en Integer et me permet de récupérer la position en un nombre
  var top = parseInt(mvSq.style.top);
  var left = parseInt(mvSq.style.left);

  if(evt.key == 'ArrowRight') {
    left = left + speed;
  }

  if(evt.key == 'ArrowLeft') {
    left = left - speed;
  }

  if(evt.key == 'ArrowUp') {
    top = top - speed;
  }

  if(evt.key == 'ArrowDown') {
    top = top + speed;
  }

  if(top < 0) {
    top = 0;
    setRed();
    mvSq.style.top = top + 'px';
  } else if(top > 360) {
    top = 360;
    setRed();
    mvSq.style.top = top + 'px';
  } else {
    mvSq.style.top = top + 'px';
  }

  if(left < 0) {
    left = 0;
    setRed();
    mvSq.style.left = left + 'px';
  } else if(left > 360) {
    left = 360;
    setRed();
    mvSq.style.left = left + 'px';
  } else {
    mvSq.style.left = left + 'px';
  }
});



// Il existe une classe 'toucher' dans le CSS qui modifie la couleur du fond en rouge
// Je vais créer une fonction qui ajoute cette classe quand elle est absente et qui l'enlève quand elle présente => toggle
// On va enlever la couleur donc la classe au bout d'une durée
function setRed() {
  mvSq.classList.toggle('toucher');
  // La fonction setTimeout prend 2 paramètres : 
  // Une fonction anonyme, où je vais préciser ce qu'il va se passer une fois la durée terminé
  //  Une durée en ms
  setTimeout(function(){
    mvSq.classList.toggle('toucher');
  }, 3000);
}
