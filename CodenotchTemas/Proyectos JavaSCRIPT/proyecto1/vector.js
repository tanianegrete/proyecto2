//RETO 3.1 VECTOR CON NUMEROS ALEATORIOS

function vectores(cantidad, numeroAleatorio) {
    var vector = new Array();
    for (i = 0; i < cantidad; i++) {
        vector[i] = Math.floor(Math.random() * (numeroAleatorio - 1 + 1) + 1);
    }
    return vector;
}

var vector = vectores(5, 5);
//console.log(vector);


//RETO 3.1 SUMA DE DOS VECTORES 

var v1 = vectores(5, 6);
var v2 = vectores(5, 6);
console.log(v1);
console.log(v2);





function sumarVectores(v1, v2) {
    var sumaArray = [];
    if (v1.length == v2.length) {
        for (var i = 0; i < v1.length; i++) {
            sumaArray[i] = v1[i] + v2[i];
        }
        return sumaArray
    }
}
console.log("la suma de vectores es:" + sumarVectores(v1, v2));


//3.2 multiplicar vector uno por un numero


function multiplicarVector(n, v1) {
    var multArray = [];
    for (var i = 0; i < v1.length; i++) {
        multArray[i] = v1[i] * n;
    }

    return multArray;
}
console.log("la multiplicacion  de vectores es:" + multiplicarVector(3, v1));


// 3.3 Resta de dos vectores 

function restarVectores(v1, v2) {
    var restaArray = [];
    if (v1.length == v2.length) {
        for (var i = 0; i < v1.length; i++) {
            restaArray[i] = v1[i] - v2[i];
        }
        return restaArray
    }
}


console.log("la resta de vectores es:" + restarVectores(v1, v2));


// 3.4 Multiplicacion si solo tienen los mismos numeros de elementos

function multVectores(v1, v2) {
    var muArray = [];
    if (v1.length == v2.length) {
        for (var i = 0; i < v1.length; i++) {
            muArray[i] = v1[i] * v2[i];
        }
        return muArray
    }
}
console.log("la multiplicacion de vectores es:" + multVectores(v1, v2));



//reto ultimo