import Animal from './animal.js'

// Esta clase hereda de 'nombre y su tipo de animal' y su constructor genera 'id y visita'
class Perro extends Animal{
    constructor(nombre, visita){
        super(nombre, 'Perro')
        this.id = "2"
        this.visita = visita
    }
}

export default Perro