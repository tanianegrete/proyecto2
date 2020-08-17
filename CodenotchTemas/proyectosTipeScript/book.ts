import{ Library } from "./library" 




export class Book{

    //Declaracion de atributos:
    private title:string;
    private nPages:number;
    private issn:string;
    private author:string;
    private editorial: string;
        //Constructor:
    constructor(title:string,nPages:number,issn:string,author:string,editorial: string){
      this.title=title;
      this.nPages=nPages;
      this.issn=issn;
      this.author=author;
      this.editorial=editorial;
      
    }
  //metodos publicos:
  public getTitle():string{
    return this.title;
  }
  public getNPages():number{
    return this.nPages;
  }
  public getIssn():string{
    return this.issn;
  }
  public getAutor():string{
    return this.author;
  }
  public getEditorial():string{
    return this.editorial;
  }

  public setTitle(title:string){
     this.title=title;
  }
  public setNPages(nPages:number){
    this.nPages=nPages;

  }
  public setIssn(issn:string){
    this.issn=issn;
  }
  public setAutor(author:string){
     this.author=author;
  }
  public setEditorial(editorial:string){
   this.editorial=editorial;
  }

  
  public toString():string{ // devuelve la informacion de todos los libros de la biblioteca 
   
                
      return "Nombre del libro:"+ this.title+"\n"+"Numero de paginas:"+this.nPages+"\n"+"ISSN:"+this.issn+"Autor:"+this.author+"\n"+"Editorial:"+this.editorial+"\n"+"Direccion:"+"\n"+"Manager";
  
    }
  
  } 
  
  
    

  
  //let book1:Book= new Book( "Introduccion a Javascript",233,"2344433-BC23333","Joseph Smith","Now editions"); 
  //let book2:Book= new Book( "Introduccion a Javas",365,"2345484-BC23333","Lara Torres","Now editions"); 
  //let book3:Book= new Book( "RECETAS",100,"1234567-RI23333","Ricardo Montes","Now editions"); 
 // console.log(book1);
  
  