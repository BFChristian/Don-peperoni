document.addEventListener("DOMContentLoaded", function () {
    console.log("Evento submit detectado");
    var formularioEncuesta = document.getElementById('formularioEncuesta');
    formularioEncuesta.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validarEncuesta()) {
            formularioEncuesta.submit();
            alert("El formulario se envio correctamente");
        }
    });
});

function validarEncuesta() {
    var campos = ["margarita", "cuatroQuesos", "napolitana", "pepperoni", "vegetariana", "prosciutto"];
    let acum = 0;

    for (let i = 0; i < campos.length; i++) {
        var valor = document.getElementById(campos[i]).value;
        console.log("VALOR "+valor);
        if (!valor == "") {
            if (valor < 1 || valor > 10) {
                alert("La calificación de " + campos[i] + " debe estar entre 1 y 10");
                return false;
            }
        }else if (valor == ""){
            acum++;
        }
    }

    if (acum == 6) {
        alert("Todos los campos estan vacios");
        return false;
    }
    return true;
}
