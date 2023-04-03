// Selection de schamps du formulaire d'identification
let nomF = document.querySelector('#nom');
let passwordF = document.querySelector('#pwd');
let loginF = document.querySelector('#login');

// Selection des champs d'affichage
let reponse = document.querySelector('#reponse');
let nomR = document.querySelector('#nomR');
let prenomR = document.querySelector('#prenom');
let ageR = document.querySelector('#age');
let git = document.querySelector('#git');
let diplomaR = document.querySelector('#diploma');
let experiencesR = document.querySelector('#experiences');
let hobbyR = document.querySelector('#hobby');

// Selection de la div qui affichera le message d'erreur
let wrong = document.querySelector('#wrong');

/**
 * Permet la création d'un li dans un parent
 * @param localisation - le parent
 * @param data - le tableau qui permettra de générer autant de li que d'info contenu dedans
 */
function createLi(localisation, data) {
  for (const info of data) {
    let newLi = document.createElement('li');
    newLi.innerText = info;
    localisation.appendChild(newLi);
  }
}

/*
  loginF.addEventListener('click', function() {
  });
*/
loginF.addEventListener('click', () => {
  // Rendre invisible mes champs
  reponse.style.display = 'none';
  wrong.style.display = 'none';

  // Je teste l'identification et je fais apparaitre le bon bloc
  if(user.login(nomF.value, passwordF.value)) {
    reponse.style.display = 'block';
    nomR.innerText = user.nom;
    prenomR.innerText = user.prenom;
    ageR.innerText = user.getAge();
    git.innerText = user.github;
    createLi(diplomaR, user.diploma);
    createLi(experiencesR, user.getExperience());
    createLi(hobbyR, user.hobby);
  } else {
    wrong.style.display = 'block';
  }

  // Lors de la validation je n'oublie pas d'effacer mon formulaire
  nomF.value = '';
  passwordF.value = '';
});


