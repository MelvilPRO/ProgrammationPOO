export class Personne {
    #nom;
    #prenom;
    #naissance;
    #nombreConges;
    #salaire;
    #present;

    constructor(nom, prenom, naissance, nombreConges, salaire, present){
        this.SetNom = nom;
        this.SetPrenom = prenom;
        this.SetNaissance = naissance;
        this.SetNombreConges = nombreConges;
        this.SetSalaire = salaire;
        this.SetPresent = present;
    }

    calculerSalaire(){
        
    }

    toString(){
        return "Nom de la personne: " + this.GetNom + " Prenom de la personne: " + this.GetPrenom + " Naissance de la personne: " + this.GetNaissance + " Nombre de congés de la personne: " + this.GetNombreConges + " Salaire de la personne: " + this.GetSalaire + " Présence de la personne: " + this.GetPresent;
    }

    // Getters & Setters
    get GetNom(){
        return this.#nom;
    };

    set SetNom(nom){
        this.#nom = nom;
    };

    get GetPrenom(){
        return this.#prenom;
    };

    set SetPrenom(prenom){
        this.#prenom = prenom;
    };

    get GetNaissance(){
        return this.#naissance;
    };

    set SetNaissance(naissance){
        this.#naissance = naissance;
    };

    get GetNombreConges(){
        return this.#nombreConges;
    };

    set SetNombreConges(nombreConges){
        if (isNaN(nombreConges)){
            console.log("Le paramètre nombreConges n'est pas un nombre");
        } else {
            this.#nombreConges = nombreConges;
        }
    };

    get GetSalaire(){
        return this.#salaire;
    };

    set SetSalaire(salaire){
        if (isNaN(salaire)){
            console.log("Le paramètre salaire n'est pas un nombre");
        } else {
            this.#salaire = salaire;
        }
    };

    get GetPresent(){
        return this.#present;
    };

    set SetPresent(present){
        this.#present = present;
    };
};