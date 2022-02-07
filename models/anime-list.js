const Anime = require('./anime')


class AnimeList{
    constructor(){
        this.animes= []
    }

    addAnime(name,image){
        if(this.animes.length>=2) return null
        const newAnime = new Anime(name,image)
        this.animes.push(newAnime)
        return this.animes
    }

    removeAnime(id){
        this.animes = this.animes.filter(anime => anime.id !== id)
    }

    getAnimes(){
        return this.animes
    }

    increaseVotes(id){
        this.animes= this.animes.map(anime =>{
            if(anime.id===id){
                anime.votes +=1
            }
            return anime
        })
    }

}

module.exports= AnimeList