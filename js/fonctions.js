function bonjour() {
  document.write("bonjour, tout le monde ! <br>");
}

document.write("<h1> Les functions </h1>");
// appek de la fonction bonjour
bonjour();
bonjour();

// déclarations de fonctions avec desarguments

function salut(prenom) {
  document.write("<p>salut " + prenom + ", bienvenue</p>");
}

// appel de la fonctons salut
salut("Greg");
salut("Ilhem");
let prenom = "Sirine";
salut(prenom);

// déclaration d'une fonction avec plusieurs arguments
function phrase(mot1, mot2, mot3) {
  document.write(mot1 + " " + mot2 + " " + mot3 + "<br>");
}

let fin = "d'aller manger";
let debut = "Il est ";
let millieu = "l'heure";

// EXO : utiliser la fonctions phrase et les variables fin, debut,
//   millieu pour afficher "Il est l'heurebd'aller manger"
//

phrase(debut, millieu, fin);

/* EXO :  appeler la fonctoin phrase pour afficher "on a faim" */
 
phrase("on", "a", "faim<br>");
document.write("<br>");
phrase("on a faim", "", "");
document.write("<br>");
phrase("on a toujours", "faim", "");
document.write("<br>");

function phrase2(mott1, mot2, mot3) {
  let str = mot1;
  if (mot2 != undefined) {
    str = str + " " + mot2;
  }
  if (mot3 != undefined) {
    str = str + " " + mot3;
  }
  document.write(str + "<br>");
}


document.write("<hr>");


function nbAuCarre(nb) {
    if(isNaN(nb)){
    document.write("'" + nb + "'" + " n'est pas un nombre. ")
    } else {
        return nb * nb;
    }
}

let resultat = nbAuCarre(5);
document.write("Le carré de 5 est = " + resultat + "<br>")

document.write("<p>Le théorème de pythagore :</p>");
document.write("Un triangle rectangle dont les côtés ont pour longueur 2 et 5." + "<br>");
document.write("Le carré de l'hypothénuse de ce triangle rectangle vaut : " + (nbAuCarre(2)+nbAuCarre(5)) + "°" + "<br>");

document.write("<hr>");

/*Exo : affichez la liste des carrés des nombres de 1 à 100 
            pour la présentation on ira seulement jusqu'à 10 */
for(i=1; i<=10; i++){
    document.write(i + "² = " + nbAuCarre(i) + "<br>")
}
document.write("<hr>");

/* Exo : écrire une fonction nomée tva qui prend un prix en argument et qui retourne la tva calculée sur ce prix :
            prix * 20 /100
            prix * 0.2 */
function tva(prix){
  return prix * 0.2;
}
let tvaCalcule = tva(100)
document.write(tvaCalcule)


let maFoncton = function (texte) {
  document.write(texte + "<br>");
}

maFonction("Bonjour, nous sommes le jeudi");
maFonction("11 juillet 2024");

console.log("maFonction", typeof maFoncton);

let fonctionFlechee = (arg1, arg2) => {
  return arg1;
}

let vari = fonctionFlechee(4, test);
