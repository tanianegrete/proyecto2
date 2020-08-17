/*class Poligonos {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    //getter
    get area() {
        return this.calcArea()
    }

    //metodo
    calcArea() {
        return this.height * this.width;

    }

}

//Metodo
var cuadrado = new Poligonos(15, 12);
console.log(cuadrado.height);
console.log(cuadrado.width);
console.log(cuadrado.calcArea()); // llamada a metodo con parentesis




//CLASE
class punto {
    constructor(coordenadaX, coordenadaY) {
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
    }
    get X() {
        return this.coordenadaX;
    }
    get Y() {
        return this.coordenadaY;
    }

}

//OBJETOS:

var p1 = new punto(10, 20);
console.log(p1.coordenadaX);
console.log(p1.coordenadaY);


//cambiar valores
p1.coordenadaX = 11;
console.log(p1.coordenadaX);

p1.coordenadaY = 400;
console.log(p1.coordenadaY);

*/

class Persona {
    constructor(estatura, peso, colorTez, colorPelo, anyoNacimiento, aficiones) {
        this.estatura = estatura;
        this.peso = peso;
        this.colorTez = colorTez;
        this.colorPelo = colorPelo;
        this.anyoNacimiento = anyoNacimiento;
        this.aficiones = aficiones;
    }

    get est() { // get devulven el valor del atributo de estatura 
        return this.estatura;
    }
    set est(nEstatura) {
        this.estatura = nEstatura;
    }
    get pe() {
        return this.peso;
    }
    set pe(nPeso) { //guardan valor peso 
        this.peso = nPeso;
    }

    get ct() {
        return this.colorTez;
    }
    set ct(nColorT) {
        this.colorTez = nColorT;
    }
    get cp() {
        return this.colorPelo;
    }
    set cp(nColorP) {
        this.colorPelo = nColorP;
    }

    imc() {
        var iMc = this.peso / (this.estatura * this.estatura);
        return iMc;
    }

    edad(ayoActual) {
        var anyoActual = 2020;
        var edades = anyoActual - this.anyoNacimiento;
        return edades;
    }

    mostrarTodos() {
        var todos = "La estatura es :" + this.est + "\n" + "Su peso es: " + this.pe + "\n" + "Color de tez: " + this.ct + "\n" + "Color de pelo:" + this.cp + "\n" + "Aficiones:" + "\n" + this.aficiones[0] + "\n" + this.aficiones[1] + "\n" + this.aficiones[2];


        return todos;
    }



}

var persona = new Persona(160, 60, "morena", "castaño", 1991, ["dormi", "comer", "dibujar"]);
//console.log(persona.est);
//console.log(persona.pe);
//console.log(persona.ct);
//console.log(persona.cp);
//console.log(persona.imc());
//console.log(persona.edad());
//console.log(persona.mostrarTodos());

//RETO 7

var persona2 = new Persona(150, 50, "clara", "oscuro", 1980, ["beber", "comer", "bailar"])


class Agenda {
    constructor(personas) {
        this.personas = personas;
    }
    printPersonas() {

        for (var i = 0; i < this.personas.length; i++) {
            persona[i];
            console.log(this.personas[i].mostrarTodos());

        }

    }

}

var agenda1 = new Agenda([persona, persona2]); //objeto con atributos  
agenda1.printPersonas();


/*
class Agenda2 {
    constructor(arrayPersonas) {
        this.arrayPersonas = arrayPersonas;
    }
    printPersonas() {
        var atributosPersonas = [persona, persona2];
        return atributosPersonas;
    }
}


var arrayPersonas = [persona, persona2];

var agenda2 = new Agenda2(arrayPersonas);
console.log(agenda2);
*/