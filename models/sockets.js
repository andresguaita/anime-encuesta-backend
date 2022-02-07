const AnimeList = require("./anime-list");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.animeList= new AnimeList()

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('Cliente conectado');

            // Emitir al cliente conectado, todos los animes actuales
            socket.emit( 'current-animes' , this.animeList.getAnimes() );

             // Crear un nuevo anime
             socket.on( 'crear-anime', ({ nombre, image }) => {
                this.animeList.addAnime( nombre, image );
                this.io.emit( 'current-animes' , this.animeList.getAnimes() );
            });
        
        });
    }


}


module.exports = Sockets;