//FUNCIONES ARROW
/*
function printer(elemento) {
    console.log(elemento);

}
printer();


printer_arroy = (elemento) => { //creando funcion arrow
        console.log(elemento)
    }
    (elemento) => { console.log(elemento) }


printer_arroy("HELLLLLLOOOOOOOOOOOOOO"); //llamando a la funcion


//Valores por defecto
function sumaValore(v1, v2) { //funcion creandosuma de valores
    let resultado = v1 + v2;
    return resultado;

}

let totales = sumaValore(6, 5); //llamando a funcion
console.log(totales);

//funcion arrow
sumarValores = (n1, n2 = "no hay valor") => {
    let resultado = n1 + n2;
    return resultado;
}

let resultado = sumarValores(15, 14); // llamando a funcion arrow
console.log(resultado);


//RETO 1 Crea una funcion que se imprima siempre lo que se crea en el parametro y si no se le pasa ningun parametro informe esta situacion

parametros = (parametro1, parametro2 = "Falta un parametro") => {
    let mostrar = parametro1 + parametro2;
    return mostrar;
}
let parametrosMuestra = parametros("hola", 4);
console.log(parametrosMuestra);

//RETO2:REESCRIBE LA SIG FUNCTION EN EMASCRIPT:

function multiply(x, y) { //crea funcion
    return x * y;
}
let resultado = multiply(2, 4); //llama a la funcion
console.log(resultado);

multiply2 = (x, y) => { //crea funcion arrow
    let op = x * y;
    return op;
}
let resultado2 = multiply2(8, 2);
console.log(resultado2);







//RETO3 CREA UNA FUNCION CON PARAMETROS DE ENTRADA UN ARRAY DEVUELVA LA SUMA DE LOS ELEMENTOS ARRAY EN UNA VARIABLE SUMA

//funcion con parametros de array
parametros = (arrayNumero) => {

}
let arrayNumero = [1, 5, 8, 4];
let valor = parametros(arrayNumero);


parametros = (arrayNumero) => {
    if (arrayNumero == undefined) { //SI NO HAY VALOR EN PARAMETRO
        return 0;
    } else if (!Array.isArray(arrayNumero)) { //SI INTRODUCEN UN PARAMETRO DIFERENTE A ARRAY
        return "No has introducido un array";
    } else {
        var suma = 0; // SI ES ARRAY declarar suma arriba para que guarde datos de la suma
        for (let i = 0; i < arrayNumero.length; i++) {
            suma = suma + arrayNumero[i];
        }
        return suma;
    }
}
let arrayNumero = [10, 2];
let valor = parametros(arrayNumero);
document.write(valor + "<br>");

arrayNumero = 10;
valor = parametros(arrayNumero);
document.write(valor + "<br>");

arrayNumero = 10;
valor = parametros(); //para no enviarle parametros, quitar:"arrayNumero"
document.write(valor + "<br>");

//console.log(Array.isArray(NOMBREDEVARIABLE)); // si la variable arreglo es array te lo comprueba



//RETO 4 CIFRADO DE TEXTO ASCII
codigoAscii = (cadena) => {
    for (let i = 0; i < cadena.length; i++) {
        console.log(cadena.charCodeAt(i))
    }

}
codigoAscii("ab");
*/

//RETO 5 



class Password {
    length = 8;
    password;
    constructor(length, password) {
        this.length = length;
        this.password = password;
    }

    generatePass(length) { //generando la contraseña
        this.setPassword("");
        this.setLength(length);
        let abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-", "_", "$", "&", "#", "@"];
        let numeroAleatorio = 3;
        let passwordGenerado = "";
        for (var i = 0; i < this.getLength(); i++) { //get recibes la variable
            numeroAleatorio = parseInt(Math.random() * abecedario.length); //valores que funcionan para hacer la contraseña
            var passwordGenerado = passwordGenerado + abecedario[numeroAleatorio];
        }
        this.setPassword(passwordGenerado); //tu das la variable
    }


    isStrong() { //metodonos devuelve si la contraseña es fortaleza o no nos devuelve un true o false
        if (this.password != undefined && this.password.length >= 8) { // undefined: no definido null o nulo
            let mayuscula = false;
            let minuscula = false;
            let numero = false;
            let caracter_raro = false;

            for (var i = 0; i < this.password.length; i++) {
                if (this.password.charCodeAt(i) >= 65 && this.password.charCodeAt(i) <= 90) {
                    mayuscula = true;

                } else if (this.password.charCodeAt(i) >= 97 && this.password.charCodeAt(i) <= 122) {
                    minuscula = true;
                } else if (this.password.charCodeAt(i) >= 48 && this.password.charCodeAt(i) <= 57) {
                    numero = true;
                } else {
                    caracter_raro = true;
                }
            }
            if (mayuscula == true && minuscula == true && caracter_raro == true && numero == true) {
                return true;
            }
        }
        return false;
    }

    getPassword() { //recibes un valor "funcion"
        return this.password;
    }
    setPassword(password) { // modifica variable
        this.password = password;
    }

    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }

}
let contrasena = new Password(30, "T@n1@M0rL35AM0L0sT@c05@1P@5t0R");
console.log("La contraseña: " + contrasena.getPassword() + " tiene fortaleza??? " + contrasena.isStrong() + "\n");
contrasena = new Password(4, "1234");
console.log("La contraseña: " + contrasena.getPassword() + " tiene fortaleza??? " + contrasena.isStrong() + "\n");
contrasena.generatePass(8);
console.log("Ahora generando contraseña aleatoria: " + contrasena.getPassword() + " tiene de tamaño: " + contrasena.getLength() + "\n");
contrasena.setPassword("T@n1@M0rL35AM0L0sT@c05@1P@5t0R");
contrasena.setLength(contrasena.getPassword().length);
console.log("Despues de usar el setter, aqui uso los getters, el password es: " + contrasena.getPassword() + " y tiene de tamaño: " + contrasena.getLength());