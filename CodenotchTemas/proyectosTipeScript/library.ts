import { Book } from "./book"

export class Library{

    //Declaracion de atributos
    private books:Book[];
    private addres:string;
    private manager:string;

    // Implementacion de metodo Constructor:
    constructor(books:Book[],addres:string,manager:string){
        this.books=books;
        this.addres=addres;
        this.manager=manager;
    }

    //Metodos
  public getAddres():string{
      return this.addres;
  }
  public getManager():string{
      return this.manager;
  }
  public setAddres(addres:string){
      this.addres=addres;
  }
  public setManager(manager:string){
      this.manager=manager;
 }

    public toString():string{ //devuelve un string con toda la informacion de todos los libros de la biblioteca 
        
        let result = ""
        
        for( let i =0;i<this.books.length; i++){

            result += this.books[i].toString() + "\n";
         
        } 
        return result;
       
    } 
  
    public getNumberBooks():number{//devuelve el total de libros que hay en librery
        
       let totalLibros=this.books.length;      
         

      return totalLibros
    } 
   
    
    public findByAuthor(author:string):Book[]{
        for( let i =0;i<this.books.length; i++){
               if(this.books[i].getAutor()=="Joseph Smith"){
                   console.log(this.books[i]+"Libro encontrado")
               }
        }

        return
    }

}


//primero se declaran los objetos de la clase Book de la importacion 
/*let book1:Book= new Book( "Introduccion a Javascript",233,"2344433-BC23333","Joseph Smith","Now editions"); 
let book2:Book= new Book( "Introduccion a Javas",365,"2345484-BC23333","Lara Torres","Now editions"); 
let book3:Book= new Book( "RECETAS",100,"1234567-RI23333","Ricardo Montes","Now editions"); 

//se crea un objeto de la clase Library añadiendo los datos del array y los dos string 
  
let library1:Library=new Library([book1,book2,book3],"Av america","manolo");
console.log(library1.toString())

console.log(library1.getNumberBooks());

library1.findByAuthor("Joseph Smith");*/
