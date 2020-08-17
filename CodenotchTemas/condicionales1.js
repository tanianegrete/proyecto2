var diaSemana = "lunes";
var dia = "";
switch (diaSemana) {
    case "lunes":
        dia = "Feliz lunes";
        break;
    case "martes":
        dia = "feliz martes";
        break;
    case "miercoles":
        dia = "feliz miercoles";
        break
    case "jueves":
        dia = "feliz jueves";
        break;
    case "viernes":
        dia = "feliz viernes";
        break;
    default:
        dia = "fin de semana";


}
console.log("hey!!  " + dia);



//reto1
var color = verde;


if (color == verde) {
    console.log("Puede cruzar");

} else if (color == amarillo) {
    console.log("Cruza rapido ¡cuidado!");
} else {
    console.log("No cruzar");
}


//RETO 2




var ingredienteEstrella = "arroz";
var objetivo = "PUEDES COCINAR ESTAS 3 OPCIONES:"
switch (ingredienteEstrella) {
    case "nopales":
        console.log(objetivo + " 1.NOPALES A LA NAPOLITANA  2.NOPALES CON HUEVOS AHOGADOS. 3.NOPALES CON CHORIZO.");
        break;
    case "arroz":
        console.log(objetivo + " 1.ARROZ FRITO. 2.SUSHI. 3.ARROZ CON LECHE.");
        break;
    case "harina":
        console.log(objetivo + " 1.PASTEL DE MAIZ.  2.PASTEL 3 LECHES. 3.PASTEL CHOCOLATE.");
        break
    case "patata":
        console.log(objetivo + " 1.ENSALADA RUSA  2.PATATAS FRITAS.  3.TORTITAS DE PAPA.");
        break;
    case "camarones":
        console.log(objetivo + " 1.Coctel. || 2.CAMARONES CON PAPA.   ||3.CAMARONES EMPANIZADOS.");
        break;

    case "pescado":
        console.log(objetivo + " 1.PESCADO CON LECHUGA.  2.TIRAS DE PESCADO. 3.AGUACHILE.");
        break;
    case "huevo":
        console.log(objetivo + " 1.HUEVOS DUROS  2.TORTILLA DE CHAMPIÑONES.  3.HUEVOS ROTOS.");
        break;
    case "pasta":
        console.log(objetivo + " 1.ESPAGUETI A LA CREMA DE QUESO  2.MACARRONES CON CARNE PICADA Y TOMATE.");
        break;
    case "lechuga":
        console.log(objetivo + " 1.CREMA DE LECHUGA.  2.GAZPACHO DE LECHUGA. 3.ENSALADA.");
        break
    case "ternera":
        console.log(objetivo + " 1.CARNE AZADA.  2.ROLLOS DE TERNERA.  3.HAMBURGUESA.");
    default:
        console.log("Imposible proponer receta.");

}



//RETO 3 
var menus = 3;
var dj = false;
var barraLibre = 1;
var coctel = false;

if (menus == 3 && dj == true && barraLibre >= 2) {
    console.log("Se puede hacer una celebracion");
} else if (coctel == true && menus == 2 && barraLibre == 1) {
    console.log("Se puede hacer una celebracion");
} else {
    console.log("No cumple con los requisitos ");
}



//RETO 4 

var persona1 = {
    "nombre": "Tania",
    "apellido": "Morales",
    "anoNacimiento": 1991,
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
    "anoNacimiento": 1983,
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
    "anoNacimiento": 2000,
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
    "anoNacimiento": 1980,
    "aficiones": ["dormir", "leer", "cocinar"],
    "dni": {
        "ayoExpedicion": 2014,
        "lugarNacimiento": "madrid",

    },
    "colorPelo": "oscuro"

}



var arrayPersonas = [persona1, persona2, persona3, persona4];


var siColor = "El cabello es castaño ";

if (arrayPersonas[0].colorPelo == "castaño") {
    console.log("el cabello es castaño " + arrayPersonas[0].nombre);

}

if (arrayPersonas[1].colorPelo == "castaño") {
    console.log(siColor + arrayPersonas[1].nombre);
}
if (arrayPersonas[2].colorPelo == "castaño") {
    console.log(siColor + arrayPersonas[2].nombre);
}
if (arrayPersonas[3].colorPelo == "castaño") {
    console.log(siColor + arrayPersonas[3].nombre);
}





/*console.log(arrayPersonas[0].añoNacimiento);
console.log(arrayPersonas[1].añoNacimiento);
console.log(arrayPersonas[2].añoNacimiento);
console.log(arrayPersonas[3].añoNacimiento);*/



if (arrayPersonas[0].anoNacimiento <= 1990) {
    opEdad = 2020 - arrayPersonas[0].anoNacimiento;
    console.log(opEdad);
}
if (arrayPersonas[1].anoNacimiento <= 1990) {
    opEdad = 2020 - arrayPersonas[1].anoNacimiento;
    console.log(opEdad)
}
if (arrayPersonas[2].anoNacimiento <= 1990) {
    opEdad = 2020 - arrayPersonas[2].anoNacimiento;
    console.log(opEdad)
}
if (arrayPersonas[3].anoNacimiento <= 1990) {
    opEdad = 2020 - arrayPersonas[3].anoNacimiento;

    console.log(opEdad)
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