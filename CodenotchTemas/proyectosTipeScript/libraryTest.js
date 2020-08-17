"use strict";
exports.__esModule = true;
var library_1 = require("./library");
var book_1 = require("./book");
//CREA UN OBJETO DE LA CLASE Library Y PROBAR TODOS SUS ATRIBUTOS Y METODOS
var book1 = new book_1.Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now editions");
var book2 = new book_1.Book("Introduccion a Javas", 365, "2345484-BC23333", "Lara Torres", "Now editions");
var book3 = new book_1.Book("RECETAS", 100, "1234567-RI23333", "Ricardo Montes", "Now editions");
var library1 = new library_1.Library([book1, book2, book3], "Av america", "manolo");
console.log(library1.toString());
library1.setAddres("Nueva direccion: Ibiza"); //cambio de direccion con set
console.log(library1.getAddres()); // se ve el cambio el valor de direccion 
library1.setManager("Nuevo Manager: Loa"); //cambio del valor del manager
console.log(library1.getManager); // Imprime el nuevo valor de manager
console.log(library1); // los resultados de libreria actualizada
