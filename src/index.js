import Dueno from './dueno'

// Este listener imprime método de Dueño y resetea el formulario.
document.getElementById('button').addEventListener("click", function(){
  let dueno = new Dueno()
    
  document.getElementById("imprimir").innerHTML += dueno.mostrarInfo();
  document.getElementById('formulario-inputs').reset();
  
});
