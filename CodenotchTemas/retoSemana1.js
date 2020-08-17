//RETO 1 VARIABLES:
/*
var parrafo1 = “ < strong > Lorem ipsum dolor sit amet < /strong>, consectetur adipiscing elit.” ;
var parrafo2 = “ < i > Phasellus mattis vehicula consequat.Proin dapibus nunc quam,
    nec dictum erat feugiat vitae. < /i>“;
var parrafo3 = “ < del > Curabitur dignissim nisi a est vulputate tristique. < /del>“;
var parrafo4 = “Curabitur maximus erat leo,
    sit amet facilisis est egestas sed.“;
var parrafo5 = “ < strong > Morbi aliquam,
    ipsum eget volutpat blandit, lectus odio condimentum dui, eget dictum quam ipsum sit amet < /strong>“+”</br > “+” < strong > nulla. < /strong>“;
var texto = parrafo1 + “ < /br>” + parrafo2 + “</br > ”+parrafo3 + “ < /br>” + parrafo4 + “</br > ”+parrafo5;
document.write(texto);



*/




//RETO2 CONDICIONALES

var españa = false;
var precio = 2000;
var descuento;

if (españa == true) {
    if (precio >= 2000) {
        descuento = precio * 0.16 + precio;
    } else {
        descuento = precio * 0.10 + precio;
    }
} else {
    if (precio >= 2000) {
        descuento = precio * 0.16 + precio;
    } else {
        descuento = precio * 0.10 + precio;
    }
}
console.log(descuento);

//RETO BUCLE

var raizCuadrada;
var suma = 0;
for (i = 1; i <= 101; i++) { // i vale 1, si i es menor que los primeros 101 numeros sigue en el proceso , cada que compruebes el valor y sea sierto incrementa a uno la variablei
    raizCuadrada = Math.pow(i, 2); //operacion para calcular la raiz cuadrada
    suma = suma + raizCuadrada; // suma va a sumar el valor que este en suma mas la raiz cuadrada 


}
console.log(suma);

//RETO  1  FINAL IMPRIMIR EN PANTALLA Y ENTRE CORCHETES EL NUMERO
//DE LETRAS QUE CONTIENE SU NOMBRE emj: Origen[6] 

var librosArray = ["Ready player one.", "El nombre del viento.", "El temor de un hombre sabio.", "Cien años de soledad.", "Origen."]; //array de numeros
var libroMayor = 0; // el  valor del libro con mas letras 
var indicelibroMayor = 0; // indice en el que esta posicionado el valor con mas letras 

for (i = 0; i < librosArray.length; i++) { // en este bucle buscaremos el indice del que tenga mas letras

    var nombreLibro = librosArray[i]; //la variable nombre libro se almacenara el valor que este en el librosArray en la posicion actual 
    var numeroLetras = nombreLibro.length; // la var numeroletras tomara el valor de librosArray y va a contar cuantas letras tiene el libro

    if (numeroLetras > libroMayor) { //si numero de letras es mayor a libro mayor pasa libro mayor se inicializa con 0 y numero letras en la posicion 0 seran 17 de la palabra "Ready player one."
        libroMayor = numeroLetras; //17  letras de la palabra "Ready player one toma el lugar de la variable numero letras 
        indicelibroMayor = i; // toma el indice del libro "Ready player one que esta posicionado en el indice 0

    }

}
// cuando termine el primer for empezara con el segundo

for (i = 0; i < librosArray.length; i++) { //mientras i tiene el valor 0, i sea menor que el numero de arrays hara el for y se incrementa el valor del indice 
    var libro = librosArray[i]; //la var libro toma el valor de el array uno por uno
    var libroTamano = libro + "[" + libro.length + "] <br>"; // var libroTamaño es igual a libro mas en corchetes el tamaño de letras de el libro

    if (indicelibroMayor == i) { //si   indicelibroMayor es igual a pa pocicion del libro con mas letras 
        document.write(libroTamano.bold()); //se imprime el tamaño del libro   var libroTamano = libro + "[" + libro.length + "] <br>"; en negritas
    } else { // de lo contrario
        document.write(libroTamano); // imprime normal

    }
}


//RETO 2.1 FINAL MATRIZ DE 10 VECTORES Y CADA UNO DE ELLOS ES VECTOR DE 10 NUMEROS 

var arrayMatriz = []; //matriz sin valores
for (i = 0; i < 10; i++) { //creara 10 primeros vectores
    var arrayNumero = [];

    for (x = 0; x < 10; x++) { //crea los hijos de los primeros 10 vectores
        var elemento = Math.floor(Math.random() * (50 - 0 + 0) + 0); // numero aleatorios 
        arrayNumero[x] = elemento; // llenar a los vectores con los numeros aleatorios
    }
    arrayMatriz[i] = arrayNumero; //
}
document.write(arrayMatriz);
console.log(arrayMatriz);


//  RETO 2.4 FINAL Crear otra  matriz  y sumar elemento mas elemento


var arrayMatriz = [];
for (i = 0; i < 10; i++) {
    var arrayNumero = [];

    for (x = 0; x < 10; x++) {
        var elemento = Math.floor(Math.random() * (50 - 0 + 0) + 0);
        arrayNumero[x] = elemento;
    }
    arrayMatriz[i] = arrayNumero;
}
document.write(arrayMatriz);
console.log(arrayMatriz);


var arrayMatriz2 = [];
for (i = 0; i < 10; i++) {
    var arrayNumero = [];

    for (x = 0; x < 10; x++) {
        var elemento = Math.floor(Math.random() * (50 - 0 + 0) + 0);
        arrayNumero[x] = elemento;
    }
    arrayMatriz2[i] = arrayNumero;
}
document.write(arrayMatriz2);
console.log(arrayMatriz2);

//SUMA 

var resultado = 0;

for (i = 0; i < arrayMatriz.length; i++) { //camion
    var cajaHuevos = arrayMatriz[i];

    for (x = 0; x < cajaHuevos.length; x++) {
        var huevo = cajaHuevos[x];
        resultado = resultado + huevo;
    }
}
document.write("resultado es" + resultado);
console.log("resultado es" + resultado);

for (i = 0; i < arrayMatriz2.length; i++) { //camion
    var cajaHuevos = arrayMatriz2[i];

    for (x = 0; x < cajaHuevos.length; x++) {
        var huevo = cajaHuevos[x];
        resultado = resultado + huevo;
    }
}
document.write("resultado es" + resultado);
console.log("resultado es" + resultado);

// RETO 2.5 multiplicar un numero aleatorio por la matriz ; todos los 
//elementos de la matriz se multiplicaran por ese numero

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



//var numeroAleatorio = Math.floor(Math.random() * (50 - 0 + 0) + 0);

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