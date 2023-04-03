var SF = ['Star Trek', 'Timeless', 'Another Life', 'Love Death & RObot'];
var Comedie = ['How I Met Your Mother', 'The Big Bang Theory', 'Norsmen', 'Archer'];
var Anime = ['Rick & Morty', 'Boruto', 'Tokyo Ghoul', 'Death Note'];

var Netflix = [SF, Comedie, Anime];
console.log(Netflix);
Netflix[0].splice(2, 0, 'Star Wars', 'Armagedon');
console.log(Netflix);
Netflix[1].splice(2, 1, 'Marié 2 enfants', 'Notre Belle Famille');
console.log(Netflix);
Netflix[0].push('Dune');
console.log(Netflix);
Netflix[2].splice(0, 0, 'L\'Attaque des Titans');
console.log(Netflix);
Netflix[2].splice(4, 1);
console.log(Netflix);