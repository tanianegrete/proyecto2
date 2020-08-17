//RETO 1 

class Person {
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

    //IMPLEMENTACION DE METODO imprime por consola el nombre
    public printName() {
        let nombres=name;
            console.log(nombres);
        }
    /*    //METODO CALCULA Y DEVUELVE EL AÑO DE NACIMIENTO
    public yearOfBirth(currentYear: number) {
            return Number;
        }
        //METODO  sett MODIFICA EL ATRIBUTO ATRIBUTO ADDRESS CON EL VALOR PASADO COMO PARAMETRO

        public setAddress(address:string){

        }

        //METODO gett DEVUELVE EL VALOR DEL ATRIBUTO ADDESS
        public getAddress(){
            return //valor del atributo address
        }*/
}

let person:Person= new Person("TANIA",24,"retiro");
console.log(person.printName);