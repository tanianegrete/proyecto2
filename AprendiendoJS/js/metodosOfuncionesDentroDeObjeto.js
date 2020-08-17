// cuando una funcion esta dentro de un objeto se le conocen como metodos 

const musica = { // objeto

    reproducir: function(cancion, artista = '  Artista no encontrado') {
        console.log('Reproduciendo la cancion : ' + cancion + 'Canta el artista: ' + artista);

    },
    pausar: function() {
        console.log('pausa... reproducir la sig cancion ')
    }
}

// LOS METODOS TAMBIEN PUEDEN IR POR FUERA DEL OBJETO

musica.borrar = function(id) { // nombre del objeto musica + borrar que es el nombre de la funcion
    console.log('borrando la cancion con el id:' + id);

}

musica.reproducir(' Rosa Salvaje ', );
musica.pausar();
musica.reproducir(' Pelo Suelto ', ' Gloria Trevi');
musica.pausar();
musica.reproducir(' Doctor psiquiatra', ' Gloria Trevi');

musica.borrar(25);