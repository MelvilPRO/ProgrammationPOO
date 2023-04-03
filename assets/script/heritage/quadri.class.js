import { Shape } from './shape.class.js';

export class Quadri extends Shape {
  constructor(nom, bg, brd) {
    super(nom, 4, bg, brd);
  }

  area() {
    super.area();
    console.log('Area : Execution depuis Quadri');
  }

  perimeter() {
    super.perimeter();
    console.log('Perimeter : exécution depuis Quadri');
  }
}