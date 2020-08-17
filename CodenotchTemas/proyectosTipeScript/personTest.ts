import { Person } from "./persona";

 //objetos personas


let person:Person= new Person("TANIA",24,"retiro");
let person2:Person= new Person("SONIA",29,"retiro");
let person3:Person= new Person("CARMEN",34,"retiro");
console.log(person.printName());
console.log(person);
console.log(person.yearOfBirth(2020));
person.setAddress("av mexico");// cambias el valor 
console.log(person.getAddress());//ves el valor 



