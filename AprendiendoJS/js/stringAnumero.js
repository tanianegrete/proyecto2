let numero1 = 50;
let numero2 = "10";
let numero3 = "tres";
let numero4 = "20.20";

console.log(numero1 + numero2); // solo concatena los numeros ya que el numero 10 piensa que es un string

console.log(Number(numero2) + numero1); // convierte el string en un entero

console.log(parseInt(numero2) + numero1); // convierte el string en un entero 

console.log(parseFloat(numero4) + numero1); // convierte el string a entero y en numero flotante para que da el punto decimal

let dato;

dato = Number("20"); // cambia de strig a enteros number
dato2 = Number("-20.20");

console.log(dato);
console.log(dato2);

//To fixed selecciona numeros en cadena conviertienolo en entero 
//en los corcghetes va en numero de decimales que quieres agregar  
let numeroA = "4525589.5565645"
console.log(Number(numeroA).toFixed(3)); //CONVIERTE A ENTERO Y CON 3 DECIMALES 

let numeroB = 454154584.55848;
console.log(numeroB.toFixed(3)); // AGARRA 3 NUMEROS DECIMALES