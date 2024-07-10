/*


*/

let a = 5, b = 12;
let temps = a;
a = b;
b = temps;
console.log("a", a);
console.log("b", b);

// faire la même chose sans declarer de variables intermediaires (cette
//solution ne fonctionnera pas qu'avec des numeriques)

a = 5;
b = 12;

a = a + b; // a 17
b = a - b; // b 5 
a = a - b; // a 12






































































    

