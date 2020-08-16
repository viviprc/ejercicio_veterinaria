import Animal from './animal.js'

// Esta clase hereda de 'nombre y su tipo de animal' y su constructor genera 'id y visita'
class Ave extends Animal{
    constructor(nombre, visita){
        super(nombre, 'Ave')
        this.id = "5"
        this.visita = visita
    }
}

export default Ave