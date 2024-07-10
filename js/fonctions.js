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
phrase