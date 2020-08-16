import Animal from './animal.js'

// Esta clase hereda de 'nombre y su tipo de animal' y su constructor genera 'id y visita'
class Gato extends Animal{
    constructor(nombre, visita){
        super(nombre, 'Gato')
        this.id = "1"
        this.visita = visita
    }
}

export default Gato