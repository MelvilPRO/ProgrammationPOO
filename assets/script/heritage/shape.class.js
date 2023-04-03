export class Shape {
  _name;
  _nbSide;
  _bgColor;
  _borderColor;

  constructor(nom, side, bg, brd) {
    this.name = nom;
    this.nbSide = side;
    this.bgColor = bg;
    this.borderColor = brd;
  }

  get name() {
    return this._name;
  }

  set name(tmp) {
    this._name = tmp;
  }

  get nbSide() {
    return this._nbSide;
  }

  set nbSide(tmp) {
    this._nbSide = tmp;
  }

  get bgColor() {
    return this._bgColor;
  }

  set bgColor(tmp) {
    this._bgColor = tmp;
  }

  get borderColor() {
    return this._borderColor;
  }

  set borderColor(tmp) {
    this._borderColor = tmp;
  }

  area() {
    console.log('Area : Execution depuis Shape');
  }

  perimeter() {
    console.log('Perimeter : Execution depuis Shape');
  }

}