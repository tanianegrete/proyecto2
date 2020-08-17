// querrySelector: permite seleccionar un elemento html

const nombre = 'tan',
    trabajo = 'desarrollo';

console.log('Nombre: ' + nombre + ',Trabajo:  ' + trabajo);
console.log(`Trabajo
: ${nombre},Trabajo: ${trabajo}`);

const contenedorApp = document.querySelector('#mensaje');

let html = '<ul>' + // ul : lista ordenada 
    '<li>Nombre:' + nombre + '</li>' +
    '<li>Trabajo:' + trabajo + '</li>' +
    '</ul>';

let html2 = `<ul>
           <li>Nombres: ${nombre}</li>  
           <li>Trabajos: ${trabajo}</li>  
           </ul>`;
// para agregar a html :
contenedorApp.innerHTML = html2;