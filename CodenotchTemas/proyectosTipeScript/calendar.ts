

import{Person}from "./persona" 


export class Calendar{
    //declaracion de atributos
    public people:Person[];

    constructor(){
      this.people= new Array();
      
    }
    //metodos imprime por consola los datos de todas las personas de la agenda
    public printCalendar(){
        for( let i =0;i<this.people.length; i++){
          
          console.log(this.people[i].mostrarDatos());
        }
    }

} 
//let calendar1 = new Calendar();// Creando un objeto

//calendar1.people = [person1,person2,person3];

//console.log(calendar1.people )


/*console.log(person1.mostrarDatos);
console.log(person2.mostrarDatos);
console.log(person3.mostrarDatos); */


/*let person1:Person= new Person("TANIA",24,"retiro"); //objetos personas
let person2:Person= new Person("SONIA",29,"retiro");
let person3:Person= new Person("CARMEN",34,"retiro");*/

