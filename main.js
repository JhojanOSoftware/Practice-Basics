let a = 5;      //coloca o asigna valor 
let b = '5';

console.log(a == b);   // se convierte en true porque compara solo el valor
console.log(a === b);  // falso, porque compara el tipo de dato y el valor

let x = true;
let y = false;

console.log(x || y);   // true, porque al menos uno es verdadero
console.log(x && y);   // false, porque ambos no son verdaderos