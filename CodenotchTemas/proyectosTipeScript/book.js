"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    //Constructor:
    function Book(title, nPages, issn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;
    }
    //metodos publicos:
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getNPages = function () {
        return this.nPages;
    };
    Book.prototype.getIssn = function () {
        return this.issn;
    };
    Book.prototype.getAutor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setNPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.setIssn = function (issn) {
        this.issn = issn;
    };
    Book.prototype.setAutor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        return "Nombre del libro:" + this.title + "\n" + "Numero de paginas:" + this.nPages + "\n" + "ISSN:" + this.issn + "Autor:" + this.author + "\n" + "Editorial:" + this.editorial + "\n" + "Direccion:" + "\n" + "Manager";
    };
    return Book;
}());
exports.Book = Book;
//let book1:Book= new Book( "Introduccion a Javascript",233,"2344433-BC23333","Joseph Smith","Now editions"); 
//let book2:Book= new Book( "Introduccion a Javas",365,"2345484-BC23333","Lara Torres","Now editions"); 
//let book3:Book= new Book( "RECETAS",100,"1234567-RI23333","Ricardo Montes","Now editions"); 
// console.log(book1);
