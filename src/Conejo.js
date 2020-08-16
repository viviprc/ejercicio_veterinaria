import Animal from './animal.js'

// Esta clase hereda de 'nombre y su tipo de animal' y su constructor genera 'id y visita'
class Conejo extends Animal{
    constructor(nombre, visita){
        super(nombre, 'Conejo')
        this.id = "3"
        this.visita = visita
    }
}
export default Conejo