const numeros = [1, 5, 6, 8, 9]; // indice es el del lado izquierdo y inicia con indice cero el numero 1 esta en el indice 0
console.log(numeros);

console.table(numeros); // TE INDOICA EN FORMA DE TABLA LOS ARREGLOS


const meses = new Array('enero', 'febrero', 'marzo');
console.log(meses);
console.log(meses[0]); // mostrara el dato que este en el indice 0
console.table(meses);




const arreglo = ['hola', 58, 12, 'si', null]; // todo lo que este en [] es un array
arreglo.push('añadir'); //push: añade despues de agregar el valor 
arreglo.push('añade todo lo que sea despues de la declaracion') //agraga al final del arreglo

arreglo.unshift('mes 0'); // coloca el primer valor en el indice 0
arreglo.unshift('mes 0.1'); //  agraga al principio del arreglo

console.table(arreglo);
console.log(Array.isArray(arreglo)); // si la variable arreglo es array te lo comprueba
console.log(arreglo[2]); // acceder al indice 2 con el valor 12


//funciones para arreglos

//arreglo.push('agrega al final del arreglo');
///arreglo.unshift('agrega inicio del arreglo');
//arreglo.pop(); //elimina el ultimo valor del arreglo
//arreglo.shift(); // elimina el principio del arreglo

//

let frutas = ['platano', 'manzana', 'arandano', 'caña', "banana"];

frutas.sort(); //sort te acomoda la lista por orden alfabetico
console.log(frutas);
console.table(frutas);






var numeroAleatorio = Math.floor(Math.random() * (50 - 0 + 0) + 0);

console.log(numeroAleatorio);


var arrayMatriz = [];
for (i = 0; i < 5; i++) {
    var arrayNumero = [];

    for (x = 0; x < 3; x++) {
        var elemento = Math.floor(Math.random() * (50 - 0 + 0) + 0);
        arrayNumero[x] = elemento;
    }
    arrayMatriz[i] = arrayNumero;
}

console.log(arrayMatriz);


for (i = 0; i < arrayMatriz.length; i++) {
    var valor = arrayMatriz[i];
    var numeroAleatorio = Math.floor(Math.random() * (50 - 0 + 0) + 0);
    var multiplicacion = valor * numeroAleatorio;

    console.log(multiplicacion);

}