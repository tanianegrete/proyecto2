var vector1 = []; //Inicializamos el primer vector donde se guardaran  100 numeros
var vector2 = []; //Inicializamos el segundo vector donde se guardaran  100 numeros

for (i = 0; i < 100; i++) { // desde 0 a 99 hacer...
    var numeroAleatorio = Math.floor(Math.random() * (20 - 1 + 1) + 1); //Generamos un numero aleatorio que este entre el 1 y 20 
    vector1 += numeroAleatorio[i];

    //console.log(numeroAleatorio);
}