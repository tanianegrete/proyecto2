
class Vector{

    //Declaracion de atributos:    
 private elements:Number[];
 public n:number;//longitud de vector
 public k:number;//maximo valor de elementos vector
  //Implementacion de Metodo constructor:
  constructor(elements:Number[],n:number,k:number){
      this.n=n;
      this.k=k;
  }
public Vectores(){
  for(let i=0;i<this.n;i++){
      this.elements[i]=Math.floor(Math.random() * (this.n- 1 + 1) + 1);
    }
    return this.elements;
  }
}

 




