import{Calendar}from "./calendar"
import { Person } from "./persona";

//comprobar 

let person1:Person= new Person("TANIA",24,"retiro"); //objetos personas
let person2:Person= new Person("SONIA",29,"retiro");
let person3:Person= new Person("CARMEN",34,"retiro");

let calendar1:Calendar= new Calendar() //objeto de la clase calendar

calendar1.people = [person1,person2,person3];// accedemos a la clase calendar y comprobamos los datos de la propiedad objetoy de las propiedades de person

console.log(calendar1.people ); //accedemos a la clase person de la propiedad people
console.log(calendar1.people[0].age) //acceso de calendar1 de la propiedad people en la pocicion 1 que es tania  y la edad
console.log(calendar1.printCalendar());// muestra todos los datos de la clase Calendar
console.log(calendar1.people[1].yearOfBirth(2020));//