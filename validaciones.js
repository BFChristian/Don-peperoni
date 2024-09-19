document.addEventListener("DOMContentLoaded", function() {
    console.log("Evento submit detectado");
    var formularioEncuesta = document.getElementById('formularioEncuesta');
    formularioEncuesta.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validarEncuesta()) {
            formularioEncuesta.submit();
            alert("El formulario se envio correctamente");
        }
    });
});

function validarEncuesta() {
    var campos = ["margarita", "cuatroQuesos", "napolitana", "pepperoni", "vegetariana", "prosciutto"];
    let camposVacios = 0;
    console.log(campos);
    
    for (let index = 0; index < campos.length; index++) {
        var sdsd = document.getElementById(campos[index]).value;
        if (sdsd == undefined) {
            camposVacios++;
        }
    }
    console.log(camposVacios);
    console.log(campos.length)
    if (camposVacios == 6) {
        for (let i = 0; i < campos.length; i++) {
            console.log(campos[i].value);
            var valor = document.getElementById(campos[i]).value;
            if (!valor == undefined) {
                if (valor < 1 || valor > 10) {
                    alert("La calificación de " + campos[i] + " debe estar entre 1 y 10");
                    return false; 
                }
            }
            
        }
        return true;
    }else{
        alert("Todos vacios");
    }
    
}
