import { Student } from './class.student.js';
import { students } from './liste.student.js';

let exo2 = document.querySelector('#exo2');
let tab = [];

students.forEach(eleve => {
  let tmp = new Student(eleve.nom, eleve.prenom, eleve.math, eleve.fr, eleve.eng, exo2);

  tab.push(tmp);
  tmp.initStudent();
});

console.log(tab);