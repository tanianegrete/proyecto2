//funcion declaracion

function saludar(nombre = 'visitante', trabajo = 'no sabemos ', lugar) { // el igual significa a si no hay valor en la variable se colocara el texto que esta dentro de las comillas
    console.log('HOLA  ' + nombre + 'tu  trabajo es: ' + trabajo + 'en zona:' + lugar);

}

saludar(); //LO QUE ESTA DENTRO DEL PARANTESIS ES UN PARAMETRO
saludar('Sandy ');
saludar('Charly ', 'vender  ', ' este');
saludar('Cira ', 'cuidar  ', ' oeste');
// crear funsion la ventaja esque la puedes llamar muchas veces 


// funcion expresion

const suma = function(a = 0, b = 0) { // creacion de function  la creamos en una variable 
    console.log(a + b);

}
suma(); // llamado de function suma de la variable a mas la variable b
suma(2, 8);
suma(32, 7);
suma(9, 1);

// la mas facil IFIS  ya que no haces el llamado de la funcion 
// LIFE NO HAY SUBPROCESOS O METODOS 

(function(tecnologia) {

    console.log("Aqui estoy aprendiendo  " + tecnologia);


})('JavaScript');