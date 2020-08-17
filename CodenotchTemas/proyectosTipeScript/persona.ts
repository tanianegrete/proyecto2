
//RETO 1 

 export class Person {
    //DECLARACION DE ATRIBUTOS O PROPIEDADES
    public name: string;
    public age: number;
    private address: string;

    //IMPLEMENTACION DEL METODO CONSTRUCTOR
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    } 

     //METODO gett DEVUELVE EL VALOR DEL ATRIBUTO ADDESS
     public getAddress():string{
     
           return this.address;
    }
     //METODO  sett MODIFICA EL ATRIBUTO ATRIBUTO ADDRESS CON EL VALOR PASADO COMO PARAMETRO

     public setAddress(address:string){
        this.address=address;
     }

   

    //IMPLEMENTACION DE METODO imprime por consola el nombre
    public printName():string {
       
            return this.name;
        }
     //METODO CALCULA Y DEVUELVE EL AÑO DE NACIMIENTO
    public yearOfBirth(currentYear:number):number {
        let ayo : number;
        ayo= currentYear;
        let opAyos= currentYear -this.age;
        return opAyos;
    }
     // METODO TODOS LOS DATOS:

     public mostrarDatos():string {
       return "Nombre:"+ this.name +"\n"+ "Edad"+this.age +"\n"+ "Direccion:"+this.address
     }

            
 }
    



//let person:Person= new Person("TANIA",24,"retiro");
//console.log(person.printName());
//console.log(person);
//console.log(person.yearOfBirth(2020));
//person.setAddress("av mexico");// cambias el valor 
//console.log(person.getAddress());//ves el valor 



