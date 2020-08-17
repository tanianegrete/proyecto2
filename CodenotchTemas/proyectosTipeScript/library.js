"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    // Implementacion de metodo Constructor:
    function Library(books, addres, manager) {
        this.books = books;
        this.addres = addres;
        this.manager = manager;
    }
    //Metodos
    Library.prototype.getAddres = function () {
        return this.addres;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAddres = function (addres) {
        this.addres = addres;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        var result = "";
        for (var i = 0; i < this.books.length; i++) {
            result += this.books[i].toString() + "\n";
        }
        return result;
    };
    Library.prototype.getNumberBooks = function () {
        var totalLibros = this.books.length;
        return totalLibros;
    };
    Library.prototype.findByAuthor = function (author) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAutor() == "Joseph Smith") {
                console.log(this.books[i] + "Libro encontrado");
            }
        }
        return;
    };
    return Library;
}());
exports.Library = Library;
//primero se declaran los objetos de la clase Book de la importacion 
/*let book1:Book= new Book( "Introduccion a Javascript",233,"2344433-BC23333","Joseph Smith","Now editions");
let book2:Book= new Book( "Introduccion a Javas",365,"2345484-BC23333","Lara Torres","Now editions");
let book3:Book= new Book( "RECETAS",100,"1234567-RI23333","Ricardo Montes","Now editions");

//se crea un objeto de la clase Library añadiendo los datos del array y los dos string
  
let library1:Library=new Library([book1,book2,book3],"Av america","manolo");
console.log(library1.toString())

console.log(library1.getNumberBooks());

library1.findByAuthor("Joseph Smith");*/
