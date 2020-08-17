import{ Library } from "./library" 
import { Book } from "./book"
//CREA UN OBJETO DE LA CLASE Library Y PROBAR TODOS SUS ATRIBUTOS Y METODOS
let book1:Book= new Book( "Introduccion a Javascript",233,"2344433-BC23333","Joseph Smith","Now editions"); 
let book2:Book= new Book( "Introduccion a Javas",365,"2345484-BC23333","Lara Torres","Now editions"); 
let book3:Book= new Book( "RECETAS",100,"1234567-RI23333","Ricardo Montes","Now editions"); 

let library1:Library=new Library([book1,book2,book3],"Av america","manolo");
console.log(library1.toString())

library1.setAddres("Nueva direccion: Ibiza");//cambio de direccion con set
console.log(library1.getAddres());// se ve el cambio el valor de direccion 

library1.setManager("Nuevo Manager: Loa"); //cambio del valor del manager
console.log(library1.getManager);// Imprime el nuevo valor de manager
console.log(library1);// los resultados de libreria actualizada
 


