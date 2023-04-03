import { Personne } from "./personne.class.js";

export class Chef extends Personne {
    #numeroEquipe;
    #nomService;

    constructor(nom, prenom, naissance, nombreConges, salaire, present, numeroEquipe, nomService){
        super(nom, prenom, naissance, nombreConges, salaire, present);
        this.SetNumeroEquipe = numeroEquipe;
        this.SetNomService = nomService;
    }

    toString(){
        return super.toString() + " Numéro de l'équipe de la personne: " + this.GetNumeroEquipe + " Service de la personne: " + this.GetNomService;
    }

    // Getters & Setters
    get GetNumeroEquipe(){
        return this.#numeroEquipe;
    };

    set SetNumeroEquipe(numeroEquipe){
        this.#numeroEquipe = numeroEquipe;
    };

    get GetNomService(){
        return this.#nomService;
    };

    set SetNomService(nomService){
        this.#nomService = nomService;
    };
};