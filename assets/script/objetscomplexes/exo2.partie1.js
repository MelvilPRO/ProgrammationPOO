let diapo = document.querySelector('#partie1');

let diaporama = {
  cible: diapo,
  images: ['code.jpg', 'deadpool1.jpg', 'deadpool2.jpg', 'hatsune.jpg', 'lilith.jpg'],
  time: 3000,
  currentImg: 0,
  diaporama: function() {
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

diaporama.diaporama();