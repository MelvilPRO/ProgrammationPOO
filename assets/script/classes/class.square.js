export class Carre {
  _backgroundColor;
  _size;
  _target;
  _style = 'square';

  _dom;

  constructor(bc, size, target, myClass) {
    this.backgroundColor = bc;
    this.size = size;
    this.target = target;
    this.style = myClass;

    let newSquare = document.createElement('div');
    newSquare.style.backgroundColor = this.backgroundColor;
    newSquare.style.width = this.size + 'px';
    newSquare.style.height = this.size + 'px';
    newSquare.classList.add(this.style);
    this.target.appendChild(newSquare);
    this._dom = newSquare;
  }

  get backgroundColor() {
    return this._backgroundColor;
  }

  set backgroundColor(tmp) {
    this._backgroundColor = tmp;
  }
  
  get size() {
    return this._size;
  }

  set size(tmp) {
    if(tmp > 50) {
      this._size = 50;
    } else if(tmp < 10) {
      this._size = 10;
    } else {
      this._size = tmp;
    }
  }

  get target() {
    return this._target;
  }

  set target(tmp) {
    this._target = tmp;
  }

  get style() {
    return this._style;
  }

  set style(tmp) {
    if(tmp != '') {
      this._style = tmp;
    }
  }

  moveHorizontal(step) {
    this._dom.style.left = step + 'px';
  }

  moveVertical(step) {
    this._dom.style.top = step + 'px';
  }
}