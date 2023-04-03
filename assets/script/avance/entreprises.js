import { Employe } from "./employe.class.js";
import { Chef } from "./chef.class.js";

let equipes = [
    [
        new Employe("Einstein", "Albert", "1999", 0, 2500, false, "PH", "retraité"),
        new Employe("Einstein", "Albert", "1999", 0, 3000, false, "PH", "retraité"),
        new Employe("Einstein", "Albert", "1999", 0, 5000, false, "PH", "retraité"),
        new Chef("Gilberto", "Piento", "2000", 365, 500, true, 1, "Flemmard")
    ],

    [
        new Employe("Jean", "Albert", "1999", 0, 2500, false, "PH", "retraité"),
        new Employe("Jean", "Albert", "1999", 0, 3000, false, "PH", "retraité"),
        new Employe("Jean", "Albert", "1999", 0, 5000, false, "PH", "retraité"),
        new Chef("Jacques", "Piento", "2000", 365, 500, true, 1, "Flemmard")
    ]
];

console.log(equipes);