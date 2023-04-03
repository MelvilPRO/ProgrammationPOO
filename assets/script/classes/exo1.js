import { Carre } from './class.square.js';

let container = document.querySelector('#exo1');

let test = new Carre('red', 45, container, '');
let test2 = new Carre('blue', 20, container, '');

test.moveHorizontal(-45);
test.moveVertical(-100);

test2.moveHorizontal(500);
test2.moveVertical(300);