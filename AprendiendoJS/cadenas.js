 let banda = 'cricri';
 let cancion = 'muñeca';
 let nombre;

 nombre = banda + ':  ' + cancion;
 nombre = nombre.concat("  ", " y es genial"); //concat= concatenar 
 nombre = nombre.toUpperCase(); // todas las letras en mayusculas 
 nombre = nombre.toLowerCase(); //todas minusculas  
 console.log(nombre);
 console.log(banda.length); // numero de letras de la variable cancion 


 let actividad = 'estoy aprendiendo en el curso';
 separar = actividad.split(' '); // split divide las palabras y las pone en comillas 

 console.log(separar);



 let intereses = 'Aprender, comer, programar mas js'
 separaConComas = intereses.split(', '); //separa con comas y las coloca en comillas

 console.log(separaConComas);


 let reemplazo;

 reemplazo = intereses.replace('js', 'javascript'); // remplazara la palabra js con javascript
 console.log(reemplazo);