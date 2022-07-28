let ex1 = [1, 8, 9, 5, 4, 845742585];
let ex2 = ["azul", "amarelo", "feijão", "charmander"];
let ex3 = [7, "espadas", true];

let ex1Copia = ex1.slice();
ex1Copia.push(751);
console.log (ex1, ex1Copia);

let ex2Copia = ex2.slice();
ex2Copia.pop();
console.log (ex2, ex2Copia);

let ex3Copia = ex3.slice();
ex3Copia.splice(1,1);
console.log (ex3, ex3Copia);


