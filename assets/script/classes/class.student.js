export class Student {
  _nom;
  _prenom;
  _math;
  _fr;
  _eng;
  _target;

  constructor(nom, prenom, math, fr, eng, target) {
    this.nom = nom;
    this.prenom = prenom;
    this.math = math;
    this.fr = fr;
    this.eng = eng;
    this.target = target;
  }

  get nom() {
    return this._nom;
  }

  set nom(tmp) {
    this._nom = tmp;
  }
  
  get prenom() {
    return this._prenom;
  }

  set prenom(tmp) {
    this._prenom = tmp;
  }
  
  get math() {
    return this._math;
  }

  set math(tmp) {
    if(!isNaN(tmp)) {
      this._math = tmp;
    } else {
      this._math = null;
    }
  }
  
  get fr() {
    return this._fr;
  }

  set fr(tmp) {
    if(!isNaN(tmp)) {
      this._fr = tmp;
    } else {
      this._fr = null;
    }
  }
  
  get eng() {
    return this._eng;
  }

  set eng(tmp) {
    if(!isNaN(tmp)) {
      this._eng = tmp;
    } else {
      this._eng = null;
    }
  }
  
  get target() {
    return this._target;
  }

  set target(tmp) {
    this._target = tmp;
  }
  
  average() {
    let tmp = (this.math + this.fr + this.eng) / 3;
    return tmp.toFixed(2);
  }
  
  initStudent() {
    let myDiv = document.createElement('div');
    myDiv.style.borderBottom = '1px solid';

    let myH3 = document.createElement('h3');
    myH3.innerHTML = `${this.nom} - ${this.prenom}`;

    let myUl = document.createElement('ul');

    let myLi1 = document.createElement('li');
    myLi1.innerHTML = `<strong> Mathématiques : </strong> ${this.math}`;

    let myLi2 = document.createElement('li');
    myLi2.innerHTML = `<strong> Français : </strong> ${this.fr}`;

    let myLi3 = document.createElement('li');
    myLi3.innerHTML = `<strong> Anglais : </strong> ${this.eng}`;

    let myLi4 = document.createElement('li');
    myLi4.innerHTML = `<strong> Moyenne : </strong> ${this.average()}`;

    this.target.appendChild(myDiv);
    myDiv.appendChild(myH3);
    myDiv.appendChild(myUl);
    myUl.appendChild(myLi1);
    myUl.appendChild(myLi2);
    myUl.appendChild(myLi3);
    myUl.appendChild(myLi4);

  }
}