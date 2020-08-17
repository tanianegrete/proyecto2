"use strict";
//RETO 1 
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    //IMPLEMENTACION DEL METODO CONSTRUCTOR
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //METODO gett DEVUELVE EL VALOR DEL ATRIBUTO ADDESS
    Person.prototype.getAddress = function () {
        return this.address;
    };
    //METODO  sett MODIFICA EL ATRIBUTO ATRIBUTO ADDRESS CON EL VALOR PASADO COMO PARAMETRO
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    //IMPLEMENTACION DE METODO imprime por consola el nombre
    Person.prototype.printName = function () {
        return this.name;
    };
    //METODO CALCULA Y DEVUELVE EL AÑO DE NACIMIENTO
    Person.prototype.yearOfBirth = function (currentYear) {
        var ayo;
        ayo = currentYear;
        var opAyos = currentYear - this.age;
        return opAyos;
    };
    // METODO TODOS LOS DATOS:
    Person.prototype.mostrarDatos = function () {
        return "Nombre:" + this.name + "\n" + "Edad" + this.age + "\n" + "Direccion:" + this.address;
    };
    return Person;
}());
exports.Person = Person;
//let person:Person= new Person("TANIA",24,"retiro");
//console.log(person.printName());
//console.log(person);
//console.log(person.yearOfBirth(2020));
//person.setAddress("av mexico");// cambias el valor 
//console.log(person.getAddress());//ves el valor 
