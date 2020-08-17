let viajando = function(destino, dEstino) {
    return 'Viajando a la ciudad de: ' + destino;

}

let destino;
let dEstino;
destino = viajando('México');
dEstino = viajando('Paris');

console.log(destino);
console.log(dEstino);

// codigo arrow functions LLEVA LA FLECHA 

let viajandO = (destinO, dEstinO) =>
    'Viajando a la ciudad de: ' + destino;



let destinO;
let dEstinO;
destinO = viajando('SONORA');
dEstinO = viajando('GUANAJUATOS');

console.log(destinO);
console.log(dEstinO);





let suma = function(a = 0, b = 0) {
    return ' la suma es: ', a + b;

}

let resultado;
resultado = suma(5 + 8);

console.log(resultado);

//ARROY FUNCTION:

let resta = (a = 0, b = 0) =>
    a - b;

let resultadoS;
resultadoS = suma(10 - 8);

console.log(resultadoS);