//const = constante, elle reste la meme
//form = formulaire (pour des info)
//input
const form = document.querySelector("form");
const input = document.querySelector("input[name='nombre']");
const affichage = document.querySelector("#affichage");

let preposition;
let nbAtrouver = aleatoire(1, 10);
console.log("nbAtrouver", nbAtrouver);
let nbTentatives = 0;

form.addEventListener("submit", function (event) {
    /* event.preventDefault() annule le comportement par défaut prévu par le navigateur pour l'evenement event=
    -par exemple, le comportement par défaut de l'évenement submit est d'envoyer les données du formulaire
    -pour l'évenement clic d'une balise a, le comportement par défaut est la redirection vers l'URL définie dans href
    */
    event.preventDefault();
    //value = tjrs de type string//
    proposition = input.value;
    // si ma 1er proposition 
    if (isNaN(proposition) || (proposition < 1 || >10)) {
        affichage.innerHTML = "tu dois taper un nombre entre 1 et 10";
    } else {
        nbTentatives++;
        if (preposition == nbAtrouver) {
            affichage.innerHTML = "Bravo, tu as trouvé le nombre </</strong>";
            affichage.innerHTML += " après " + nbTentatives + " tentatives.";
            //nbTentatives = 0;
            //nbAtrouver =  aleatoire (1, 10);
            
        } else {
            affichage.innerHTML = "tu as tapé" + proposition + "?Raté, essaye encore";
        }
       
    }
    input.value = "";

});

















