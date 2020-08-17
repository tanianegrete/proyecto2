import {Book} from "./book"

let book1:Book= new Book( "Introduccion a Javascript",233,"2344433-BC23333","Joseph Smith","Now editions"); 
console.log(book1);
 
book1.setAutor("cambio de valor de autor");// cambio de valores del autor con sett
console.log(book1.getAutor());// imprime el cambio de valores con gett

book1.setTitle("Cambio de valor de titulo");//set cambias valores del titulo
console.log(book1.getTitle());//get ves el resultado del cambio del titulo

book1.setNPages(5486555); //set cambio del valor de paginas 
console.log(book1.getNPages());//imprimo el nuevo valor 

book1.setIssn("cambio de valor de ISSN")
console.log(book1.getIssn());


