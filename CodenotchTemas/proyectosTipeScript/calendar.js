"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
var Calendar = /** @class */ (function () {
    function Calendar() {
        this.people = new Array();
    }
    //metodos imprime por consola los datos de todas las personas de la agenda
    Calendar.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            console.log(this.people[i].mostrarDatos());
        }
    };
    return Calendar;
}());
exports.Calendar = Calendar;
//let calendar1 = new Calendar();// Creando un objeto
//calendar1.people = [person1,person2,person3];
//console.log(calendar1.people )
/*console.log(person1.mostrarDatos);
console.log(person2.mostrarDatos);
console.log(person3.mostrarDatos); */
/*let person1:Person= new Person("TANIA",24,"retiro"); //objetos personas
let person2:Person= new Person("SONIA",29,"retiro");
let person3:Person= new Person("CARMEN",34,"retiro");*/
