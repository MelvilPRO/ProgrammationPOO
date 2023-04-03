// Sélection de mon élément d'identifiant #footer
var divFooter = document.querySelector('#footer');
// Créez un element footer
var footer = document.createElement('footer');
// Placer l'élément footer dans la div
divFooter.appendChild(footer);
// Ajoutez le text de copyright
footer.innerHTML = '&copy; Sikara &copy;';
// CHangez le style du footer pour aligner au centre le texte
footer.style.textAlign = 'center';
