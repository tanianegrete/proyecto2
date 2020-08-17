//RETO1 

// RETO 1.1
//Imprime los numeros del 1 al 10

for (i = 1; i < 11; i++) {
    console.log(i);

}



i = 1;
while (i < 11) {
    console.log(i);
    i++;
}


//RETO 1.2 Mostrar numeros pares

for (i = 1; i < 11; i++) {
    var operacion = i % 2;
    if (operacion == 0) {

        console.log("Numeros pares: " + i);

    }
}

var i = 0;
while (i < 10) {
    var operacion = i % 2;
    if (operacion == 0) {

        console.log("Numeros pares: " + i);

    }

    i++
}

//RETO 1.3 Numeros impares y que sean divisibles por 3


for (i = 1; i < 11; i++) {
    var operacion = i % 2;
    var tres = i % 3;

    if (operacion == 1 && tres == 0) {

        console.log(i + "Son impares y divisibles por 3");

    }
}

var i = 1;
while (i < 11) {
    var operacion = i % 2;
    var tres = i % 3;

    if (operacion != 0 && tres == 0) {

        console.log(i);


    }

    i++;
}







//RETO2

var persona1 = {
    "nombre": "Tania",
    "apellido": "Morales",
    "anoNacimiento": 1990,
    "aficiones": ["dormir", "cocinar", "dibujar"],
    "dni": {
        "ayoExpedicion": 2013,
        "lugarNacimiento": "mexico",

    },
    "colorPelo": "oscuro"

}

var persona2 = {
    "nombre": "Cesar",
    "apellido": "Martinez",
    "anoNacimiento": 2010,
    "aficiones": ["dormir", "dibujar", "trabajar"],
    "dni": {
        "ayoExpedicion": 2014,
        "lugarNacimiento": "mexico",

    },
    "colorPelo": "oscuro"

}

var persona3 = {
    "nombre": "Ana",
    "apellido": "Lopez",
    "anoNacimiento": 1990,
    "aficiones": ["rezar", "comer", "tejer"],
    "dni": {
        "ayoExpedicion": 2020,
        "lugarNacimiento": "madrid",

    },
    "colorPelo": "oscuro"

}

var persona4 = {
    "nombre": "Pablo",
    "apellido": "Torres",
    "anoNacimiento": 2020,
    "aficiones": ["dormir", "leer", "cocinar"],
    "dni": {
        "ayoExpedicion": 2014,
        "lugarNacimiento": "madrid",

    },
    "colorPelo": "oscuro"

}

//RETO 2.1

var arrayPersonas = [persona1, persona2, persona3, persona4];



//RETO 2.2

for (index = 0; index < arrayPersonas.length; index++); {

    console.log(arrayPersonas[i]);
}


var index = 0;

while (index < arrayPersonas.length); {

    console.log(arrayPersonas[i]);
    index++;
}


// RETO 2.3
inf = "";

for (index = 0; index < arrayPersonas.length; index++) {



    inf += arrayPersonas[index].anoNacimiento;
    //console.log(arrayPersonas[index].anoNacimiento);

    if (arrayPersonas[index].anoNacimiento < 2000 && arrayPersonas[index].anoNacimiento > 1978) {
        console.log("Tu edad esta entre 40 y 20 " + arrayPersonas[index].nombre);
    } else {
        console.log("Tu edad es menor " + arrayPersonas[index].nombre);
    }


    arrayPersonas[index].aficiones.push("la play");
    console.log("Tu aficion nueva es: " + arrayPersonas[index].aficiones[3]);
}

//RETO 3

var multiplicar = 1;

for (i = 1; i <= 5; i++) {

    multiplicar = multiplicar * i;
    console.log([i] + " el resultado es: " + multiplicar);
}






var numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var multiplo2 = 0;
var i = 0;
while (i < numero.length) {

    multiplo2 = numero[i] % 2;
    if (multiplo2 == 0) {
        console.log("es multiplo" + numero[i]);
    }
    i++
}


var suma = 0;

for (i = 1; i <= 100; i++) {

    suma = suma + i;
    console.log([i] + " el resultado es: " + suma);
}


var suma = 0;
i = 1;
while (i <= 100) {

    suma = suma + i;
    console.log([i] + " el resultado es: " + suma);
    i++
}



var nombresA = ["ana", "sara", "toto", "susi", "pepe", "tomas"];
var encontrarPp = "";
var i = 0;
while (i < nombresA.length) {


    if (nombresA[i] == "pepe") {
        console.log([i] + " Aqui esta pepe");
    }
    i++
}



var vector1 = [];
var vector2 = [];
var suma = 0;
for (i = 0; i < 5; i++) {
    var numeroAleatorio = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    var numeroAleatorio2 = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    vector1[i] = numeroAleatorio;
    vector2[i] = numeroAleatorio2;


}

console.log(vector1);
console.log(vector2);




var resultado = 0;
var vector3 = [];
for (i = 0; i < vector1.length; i++) {
    resultado = vector1[i] + vector2[i];
    vector3[i] = resultado;

}
console.log(vector3);


//for (i = 0; i < vector2.length; i++) {
//   resultado = resultado + vector2[i];
//}
//console.log("La suma es: " + resultado);


//RETO4

var persona1 = {
    "nombre": "Tania",
    "apellido": "Morales",
    "anoNacimiento": 1990,
    "aficiones": ["dormir", "cocinar", "dibujar"],
    "dni": {
        "ayoExpedicion": 2013,
        "lugarNacimiento": "mexico",

    },
    "colorPelo": "oscuro"

}

var persona2 = {
    "nombre": "Cesar",
    "apellido": "Martinez",
    "anoNacimiento": 2010,
    "aficiones": ["dormir", "dibujar", "trabajar"],
    "dni": {
        "ayoExpedicion": 2014,
        "lugarNacimiento": "mexico",

    },
    "colorPelo": "oscuro"

}

var persona3 = {
    "nombre": "Ana",
    "apellido": "Lopez",
    "anoNacimiento": 1990,
    "aficiones": ["rezar", "comer", "tejer"],
    "dni": {
        "ayoExpedicion": 2020,
        "lugarNacimiento": "madrid",

    },
    "colorPelo": "oscuro"

}

var persona4 = {
    "nombre": "Pablo",
    "apellido": "Torres",
    "anoNacimiento": 2020,
    "aficiones": ["dormir", "leer", "cocinar"],
    "dni": {
        "ayoExpedicion": 2014,
        "lugarNacimiento": "madrid",

    },
    "colorPelo": "oscuro"

}



var hogar = "Tu lugar de nacimiento es: "


if ((arrayPersonas[0].colorPelo == "oscuro" && arrayPersonas[0].dni.ayoExpedicion <= 2015) || (arrayPersonas[0].anoNacimiento > 2002 && (arrayPersonas[0].aficiones[0] == "comer" || arrayPersonas[0].aficiones[0] == "dormir" || arrayPersonas[0].aficiones[1] == "comer" || arrayPersonas[0].aficiones[1] == "dormir" || arrayPersonas[0].aficiones[2] == "comer" || arrayPersonas[0].aficiones[2] == "dormir"))) {
    console.log(hogar + arrayPersonas[0].dni.lugarNacimiento);
}

if ((arrayPersonas[1].colorPelo == "oscuro" && arrayPersonas[1].dni.ayoExpedicion <= 2015) || (arrayPersonas[1].anoNacimiento > 2002 && (arrayPersonas[1].aficiones[0] == "comer" || arrayPersonas[1].aficiones[0] == "dormir" || arrayPersonas[1].aficiones[1] == "comer" || arrayPersonas[1].aficiones[1] == "dormir" || arrayPersonas[1].aficiones[2] == "comer" || arrayPersonas[1].aficiones[2] == "dormir"))) {
    console.log(hogar + arrayPersonas[1].dni.lugarNacimiento);
}


if ((arrayPersonas[2].colorPelo == "oscuro" && arrayPersonas[2].dni.ayoExpedicion >= 2015) || (arrayPersonas[2].anoNacimiento > 2002 && (arrayPersonas[2].aficiones[0] == "comer" || arrayPersonas[2].aficiones[0] == "dormir" || arrayPersonas[2].aficiones[1] == "comer" || arrayPersonas[2].aficiones[1] == "dormir" || arrayPersonas[2].aficiones[2] == "comer" || arrayPersonas[2].aficiones[2] == "dormir"))) {
    console.log(hogar + arrayPersonas[2].dni.lugarNacimiento);
}


if ((arrayPersonas[3].colorPelo == "oscuro" && arrayPersonas[3].dni.ayoExpedicion >= 2015) || (arrayPersonas[3].anoNacimiento > 2002 && (arrayPersonas[3].aficiones[0] == "comer" || arrayPersonas[3].aficiones[0] == "dormir" || arrayPersonas[3].aficiones[1] == "comer" || arrayPersonas[3].aficiones[1] == "dormir" || arrayPersonas[3].aficiones[2] == "comer" || arrayPersonas[3].aficiones[2] == "dormir"))) {
    console.log(hogar + arrayPersonas[3].dni.lugarNacimiento);
}





for (i = 0; i < arrayPersonas.length; i++) {


    if (arrayPersonas[i].colorPelo == "oscuro" && arrayPersonas[i].dni.ayoExpedicion <= 2015 || arrayPersonas[i].anoNacimiento > 2002 && arrayPersonas[i].aficiones[i] == "comer" || arrayPersonas[i].aficiones[i] == "dormir") {

        console.log("hogar + arrayPersonas[3].dni.lugarNacimiento");

    }

}










/*

inf += arrayPersonas[index].nombre + "\n";
inf += arrayPersonas[index].apellido + "\n";
inf += arrayPersonas[index].aficiones + "\n";
inf += arrayPersonas[index].anoNacimiento + "\n";
inf += arrayPersonas[index].aficiones + "\n";*/