const botonValidarDatos = document.getElementById("validarDatos");
const mensajeErrorNombre = document.getElementById("mensajeErrorNombre");
const mensajeErrorCuit = document.getElementById("mensajeErrorCuit");

botonValidarDatos.addEventListener("click", function(){
    validarIngresoDeDatos();
});

function validarIngresoDeDatos(){
    let nombre = document.getElementById("nombre").value.trim();
    let cuit = document.getElementById("cuit").value.trim();
    let regex = /^\d{11}$/;

    if(nombre === '' || /\d/.test(nombre)){
        mensajeErrorNombre.textContent="Por favor, ingrese un nombre valido";
        return;
    }

    if(!regex.test(cuit)){
        mensajeErrorCuit.textContent="El CUIT ingresado no es válido. Recuerde que debe contener 11 dígitos numéricos.";
        return;
    }
    window.location.href = "../pages/articulos.html"
}

