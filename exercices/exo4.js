/*
1. Déclarer un tableau vide nommé nombreEntiers
2.Faire une boucles pour ajouter les 100 premiers nombres (de 1 a 100) dans le tableau
*/

let nombreEntiers = [];

for (let i = 1; i <= 100; i++) {
    nombreEntiers.push(i);
}
console.log(nombreEntiers)



const carresNbEntiers = [];

// les boucles commence généralement par 0 mais vu qu'on veux des chiffres paires on met 2
// for c'est pour faire des boucles

for (let i = 2; i <= 100; i += 2) {
// les crochets c'est pour faire un tableau 
    carresNbEntiers.push([i, i * i]);
}
console.log(carresNbEntiers);

/* **QUAND ON VEUX COMMENCER DE 0**
    const carreNbEntiers = [];
    for (let i = 0; 1 < 100, i += 2){
    let nb = i + 2;
    carreNbEntiers.push([nb, nb * nb]);
    }
*/
    
    
//Boolean cest soit quand c'est vraie soit quand c'es faux genre 5>2 ca c'est un boolean







