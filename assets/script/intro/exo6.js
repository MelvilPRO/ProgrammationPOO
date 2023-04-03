var voiture = {
  marque : 'Peugeot',
  modele: '208',
  abs: true,
  finition: {
    couleur: 'red',
    option: 'Sport',
    chromes: ['enjoliveur avant', 'enjoliveur arrière']
  },
  kilometrage: 20205
};

console.log(voiture);
console.table(voiture);

console.log('Marque ', voiture.marque);
console.log('Couleur ', voiture.finition.couleur);
console.log('Kilometrage ', voiture.kilometrage);
console.log('ABS ', voiture.abs);
console.log('2ème chrome ', voiture.finition.chromes[1]);