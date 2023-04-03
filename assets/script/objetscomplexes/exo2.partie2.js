/**
 * Constructeur de diaporama
 * @param {Object} cible - un élément du DOM
 * @param {Array<String>} images 
 * @param {Number} time - durée en ms
 * @param {Number} currentImg - indice de l'image dans le tableau
 */
function Diaporama(cible, images, time, currentImg) {
  this.cible = cible;
  this.images = images;
  this.time = time;
  this.currentImg = currentImg;

  this.diaporama = function() {
    this.cible.style.backgroundImage = `url(../assets/img/${this.images[this.currentImg]})`;
    setInterval(() => {
      this.currentImg++;
      if(this.currentImg == this.images.length) {
        this.currentImg = 0;
      }
      this.cible.style.backgroundImage = `url(../assets/img/${this.images[this.currentImg]})`;
    }, this.time);
  }
}

let container = document.querySelector('#partie2');
let images1 = ['code.jpg', 'deadpool1.jpg', 'deadpool2.jpg', 'hatsune.jpg', 'lilith.jpg'];
let images2 = ['hatsune1.jpg', 'hatsune2.jpg', 'hatsune3.jpg'];

let diapo1 = document.createElement('div');
diapo1.style.border = '1px solid black';
diapo1.style.width = '500px';
diapo1.style.margin = '20px auto';
diapo1.style.height = '300px';
diapo1.style.backgroundSize = 'cover';

let diapo2 = document.createElement('div');
diapo2.style.border = '1px solid black';
diapo2.style.width = '500px';
diapo2.style.margin = '20px auto';
diapo2.style.height = '300px';
diapo2.style.backgroundSize = 'cover';


container.appendChild(diapo1);
container.appendChild(diapo2);

let d1 = new Diaporama(diapo1, images1, 2000, 0);
let d2 = new Diaporama(diapo2, images2, 5000, 1);

d1.diaporama();
d2.diaporama();