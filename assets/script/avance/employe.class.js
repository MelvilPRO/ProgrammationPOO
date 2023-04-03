import { Personne } from "./personne.class.js";

export class Employe extends Personne {
    #poste;
    #contrat;

    constructor(nom, prenom, naissance, nombreConges, salaire, present, poste, contrat){
        super(nom, prenom, naissance, nombreConges, salaire, present);
        this.SetPoste = poste;
        this.SetContrat = contrat;
    }

    toString(){
        return super.toString() + " Poste de la personne: " + this.GetPoste + " Contrat de la personne: " + this.GetContrat;
    }

    // Getters & Setters
    get GetPoste(){
        return this.#poste;
    };

    set SetPoste(poste){
        this.#poste = poste;
    };

    get GetContrat(){
        return this.#contrat;
    };

    set SetContrat(contrat){
        this.#contrat = contrat;
    };
};