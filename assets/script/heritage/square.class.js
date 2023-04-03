import { Quadri } from "./quadri.class.js";

export class Square extends Quadri {
  _cote;
  constructor(size, bg, brd) {
    super('Carré', bg, brd);
    this.cote = size;
  }

  get cote() {
    return this._cote;
  }

  set cote(tmp) {
    this._cote = tmp;
  }

  area() {
    super.area();
    return this.cote * this.cote;
  }

  perimeter() {
    super.perimeter();
    return this.cote * 4;
  }
}