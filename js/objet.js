/* Je veux pouvoir créer des objets qui auront les propriétés suivantes: nom, prénom, âge.
Chaque objet aura des valeurs différentes pour ces propriétés 
*/

function creerObjetPersonne(argNom, argPrenom, argAge) {
    return {
        nom: argNom,
        prenom: argPrenom,
        age: argAge,
        bonjour() {
            return "Bonjour tout le monde";
        },
        identite() {
            let str = "Je m'apelle" + this.prenom + " " + this.nom;
            return str;
        }
        augmenterAge(annees) {
            this.age += annees;
            // this.age + annees;
        }
    };
}

let p1 = creerObjetPersonne("Cérien", "Jean", 33);
let p2 = creerObjetPersonne("Ateur", "Nordine", 46);
console.log(p1, p2);

console.log( anneeNaissance(p1) );
console.log(anneeNaissance(p2));
//bonjour();// erreur, la fonction n'est pas définie
console.log(p1.bonjour() + ", bienenue");
console.log(p2.bonjour());

console.log(p1.identite());
console.log(p2.identite());

/**
 * EXO : Ajouter une méthode'augmenterAge' qui prend 1 argument  nommé 'annees'.
 * Cette méthode ajoute 'annees' à la propriété 'age' de l'objet.
 */




