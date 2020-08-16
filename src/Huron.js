import Animal from './animal.js'

// Esta clase hereda de 'nombre y su tipo de animal' y su constructor genera 'id y visita'
class Huron extends Animal{
    constructor(nombre, visita){
        super(nombre, 'Hurón')
        this.id = "4"
        this.visita = visita
    }
}

export default Huron