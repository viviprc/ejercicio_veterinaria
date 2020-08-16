import Gato from './Gato'
import Perro from './Perro'
import Conejo from './Conejo'
import Huron from './Huron'
import Ave from './Ave'

// Esta clase tiene su constructor que genera 'nombre, dirección, telefono'. Tiene constantes locales para instanciar la nueva mascota que se agrega a dueño.
class Dueno {
    constructor(){
        this.nombre = document.getElementById('duenoNombre').value;
        this.direccion = document.getElementById('direccion').value;
        this.telefono = document.getElementById('telefono').value;
        // Clase dueño instancia a mascota
        const visita = document.getElementById('Visita').value;
        const nombreMascota = document.getElementById('mascota').value;
        const tipo = document.getElementById('Tipo').value;
        this.mascota = this.agregarMascota(nombreMascota, tipo, visita)  
    }
    // Este método instancia la nueva mascota.
    agregarMascota(nombreMascota, tipo, visita) {
        const tiposMascota = [Gato, Perro, Conejo, Huron, Ave]
        const mascota = tiposMascota.find(claseMascota => new claseMascota().id === tipo)
        return new mascota(nombreMascota, visita)
    }
    // Este método imprime en el html la lista de los animales agregados.
    mostrarInfo(){
        return `Paciente: ${this.mascota.nombre}<br> Tipo: ${this.mascota.tipo}<br> Dueño: ${this.nombre}<br> Motivo: ${this.mascota.visita}<hr>`
    }
}


export default Dueno