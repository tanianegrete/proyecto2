"use strict";
exports.__esModule = true;
var calendar_1 = require("./calendar");
var persona_1 = require("./persona");
//comprobar 
var person1 = new persona_1.Person("TANIA", 24, "retiro"); //objetos personas
var person2 = new persona_1.Person("SONIA", 29, "retiro");
var person3 = new persona_1.Person("CARMEN", 34, "retiro");
var calendar1 = new calendar_1.Calendar(); //objeto de la clase calendar
calendar1.people = [person1, person2, person3]; // accedemos a la clase calendar y comprobamos los datos de la propiedad objetoy de las propiedades de person
console.log(calendar1.people); //accedemos a la clase person de la propiedad people
console.log(calendar1.people[0].age); //acceso de calendar1 de la propiedad people en la pocicion 1 que es tania  y la edad
console.log(calendar1.printCalendar()); // muestra todos los datos de la clase Calendar
console.log(calendar1.people[1].yearOfBirth(2020)); //
