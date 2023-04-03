/**
 * Permet la création d'un utilisateur
 * @param {String} nom 
 * @param {String} prenom 
 * @param {Number} ddn - année de naissance
 * @param {String} password 
 * @param {Array<String>} diploma 
 * @param {Array<String>} experience 
 * @param {Array<String>} hobby 
 * @param {Boolean} codeur 
 * @param {String} github 
 */
function User(nom, prenom, ddn, password, diploma, experience, hobby, codeur, github) {
  this.nom = nom;
  this.prenom = prenom;
  this.ddn = ddn;
  this.password = password;
  this.diploma = diploma;
  this.experience = experience;
  this.hobby = hobby;
  this.codeur = codeur;
  this.github = github;

  this.getDiploma = function() {
    return this.diploma;
  }

  this.getExperience = function() {
    return this.experience;
  }

  this.hello() = function() {
    let res = `Bonjour ${this.nom} ${this.prenom}, comment allez-vous aujourd'hui ?`; 
    console.log(res);
  }

  this.getAge() = function() {
    let current = new Date();
    let age = current.getFullYear() - this.ddn;
    console.log(age);
    return age;
  }

  this.login = function(pseudo, password) {
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
}

let user1 = new User('Girard', 'Daniel', 1988, 'test', ['BAC', 'DUT'], ['Developpeur', 'Entrepreneur'], ['Games', 'Bass'], true, 'https://github.com/Sikara57');

let user2 = new User('Test', 'test', 2004, 'test', ['Test1', 'Test2'], ['Test1', 'Test2'], ['Test1', 'Test2'], false, '');