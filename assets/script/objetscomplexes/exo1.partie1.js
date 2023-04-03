let user = {
  nom: 'GIRARD',
  prenom: 'Daniel',
  ddn: 1988,
  password: 'test123',
  diploma: ['BAC', 'DUT'],
  experience: ['Developpeur', 'Entrepreneur'],
  hobby: ['Games', 'Bass'],
  codeur: true,
  github: 'https://github.com/Sikara57',
  getDiploma: function() {
    console.log(this.diploma)
    // je peux retourner la valeur incluse dans l'objet grâce au mot clé return
    return this.diploma;
  },
  getExperience: function() {
    console.log(this.experience);
    return this.experience;
  },
  hello: function() {
    let res = `Bonjour ${this.nom} ${this.prenom}, comment allez-vous aujourd'hui ?`;
    console.log(res);
  },
  getAge: function() {
    let current = new Date();
    let age = current.getFullYear() - this.ddn;
    console.log(age);
    return age;
  },
  login: function(pseudo, password) {
    if(pseudo != this.nom && pseudo != this.prenom) {
      console.log('Erreur du pseudo');
      return false;
    }

    if(password != this.password) {
      console.log('Erreur de password');
      return false;
    }

    console.log('Identification valide');
    return true;
  }
};

console.log(user);
console.log('-------------------');
let diplomes = user.getDiploma(); 
console.log(diplomes);
console.log('-------------------');
user.getExperience();
let experiences = user.getExperience();
console.log(experiences);
console.log('-------------------');
user.hello();
console.log('-------------------');
let age = user.getAge();
console.log(age);
console.log('-------------------');
let test1 = user.login('prout', 'test123');
console.log(test1);
console.log('-------------------');
let test2 = user.login('GIRARD', 'test');
console.log(test2);
console.log('-------------------');
let test3 = user.login('GIRARD', 'test123');
console.log(test3);