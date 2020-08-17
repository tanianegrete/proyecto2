// CLASE MATH



let resultado;

resultado = Math.round(2.5); // se redondea dependiendo del puntoy seguido del repetido 
console.log(resultado);

resultado1 = Math.floor(2.99); // no se redondea se mantienen el numero entero
console.log(resultado1);

resultado3 = Math.ceil(2.99); // lo redondea hacia arriba aunque sea .1
console.log(resultado3);

resultado4 = Math.sqrt(144); //raiz cuadrada
console.log(resultado4);

resultado5 = Math.abs(-55); //te convierte el numero en positivo
console.log(resultado5);

resultado6 = Math.pow(8, 3); //te convierte en potencia 
console.log(resultado6);


resultado7 = Math.min(8, 3, 5, 1); //te indica que numero es menor  
console.log(resultado7);

resultado8 = Math.max(8, 3, 5, 1); //te indica que numero es el mayor  
console.log(resultado8);

//controlar operaciones
resultado9 = (20 + 30) * 2; //20+30=50*2=100
console.log(resultado9);

resultado9 = 20 + 30 * 2; //30*2= 60 + 20 =80
console.log(resultado9);

let carrito = 0; // incrementa mas en valor que ya tiene 

carrito += 20;
console.log(carrito);

carrito += 30;
console.log(carrito);

carrito += 50;
console.log(carrito);