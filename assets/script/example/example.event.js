var divExemple = document.querySelector('#exemple1');
var btnToggleBlue = document.querySelector('#toggleBlue');
var btnCancelToggle = document.querySelector('#cancelToggle');

function toggleBlue() {
  console.log('executon changement de couleur');
  divExemple.classList.toggle('blue');
}

// Ecouter l'evt click
btnToggleBlue.addEventListener('click', toggleBlue);

btnCancelToggle.addEventListener('click', function() {
  btnToggleBlue.removeEventListener('click', toggleBlue);
});

/* -------------------------------------- */
// Site pornos
var checkbox = document.querySelector('#check');
var listPorno = document.querySelector('#listPorno');
checkbox.addEventListener('click', function() {
  if(checkbox.checked) {
    listPorno.style.display = 'block';
  } else {
    listPorno.style.display = 'none';
  }
});


/* ------------------------------------- */
var speed = 10;
var spaceship = document.querySelector('#spacecraft');
spaceship.style.left = '310px';
document.addEventListener('keydown', function(evt) {
  var positionLeft = parseInt(spaceship.style.left); // parseInt c'est une fonction qui récupère la partie entière de la valeur le 310 de la chaine de caractère '310 px'
  console.log(positionLeft)
  if(evt.key == 'ArrowRight') {
    positionLeft = positionLeft + speed;
  }

  if(evt.key == 'ArrowLeft') {
    positionLeft = positionLeft - speed;
  }

  if(positionLeft < 0) {
    spaceship.style.left = '0px';
  } else if(positionLeft > 620) {
    spaceship.style.left = '620px';
  } else {
    spaceship.style.left = positionLeft + 'px';
  }
});