document.write("<h1>Opérateurs arithmétiques </h1>");

/*
Les opérateurs arithmétiques sont :
+ addition
- soustraction
* multiplication
/ division
% modulo (reste de la division entière)
Ces opérateurs  s'utilisent avec des expressionsde type number
*/

// let a = 5;
// let b = 2;
// document.write("5 + 2 =");
// document.write ( a + b );
// document.write("<br>");

// let c = a * b;
// document.write(" la variable c vaut ");
// document.write(c);
// document.write("<br>");

// c = a % b;
// document.write("le modulo de 5 par 2 vaut ")
// document.write(120 % 2);
// document.write(93 % 3);
// document.write("<br>")

// document.write("<h1> Opérateur de concaténation</h1>");
// document.write(
//     "<p> La concaténation consiste à coller une chîne de caractère derrière une autre chaîne </h1>");
  
// let texte1 = "Bienvenue au";
// let texte2 = "PoleS Vitry";
// document.write(texte1 + texte2 + "<br>")

// let texte3 = a + " - " + b + " = " + (a - b);
// document.write(texte3 + "<br>");

// document.write("<br><br><br><br><br><br>");


/* Exercice :
1. Déclarez les variables nb1 et nb2 avec les valeurs suivantes:
12 et 4

2. Affichez le résultat de toutes les opérations sous la forme : 
    • ... + ... = ...
    • ... - ... = ...
    • ... x ... = ...
    • ... / ... = ...

*/

// let nb1 = 12;
// let nb2 = 4;

// let addition = a + " + " + b + " = " + (a + b);
// let soustraction = a + " - " + b + " = " + (a - b);
// let multiplication = a + " * " + b + " = " + a * b;
// let division = a + " / " + b + " = " + a / b;
// let modulo = a + " % " + b + " = " + (a % b);

let nbTape = prompt("Tapez un nombre entre 1 et 10 :");
let nbAtrouver = 3;
if (nbTape >= 1 && nbTape <= 10) {
  if (nbTape == nbAtrouver) {
    document.write(nbTape + " : vous avez gagné !<br>");
  } else if (nbTape < nbAtrouver) {
      document.write(nbTape + " : Trop petit !<br>") 
  } else {
      document.write(nbTape + " : Trop grand !<br>");
  }
}