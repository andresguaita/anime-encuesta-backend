const { v4: uuidv4} = require('uuid')

class Anime {
    constructor (name,image){
        this.id= uuidv4()
        this.name = name
        this.image= image
        this.votes = 0
    }
}

module.exports= Anime