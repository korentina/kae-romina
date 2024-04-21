mostrarResumen();

document.getElementById("cancelarCompraBtn").addEventListener("click", function(){
    cancelarCompra();
});
document.getElementById("finalizarCompraBtn").addEventListener("click", function(){
    finalizarCompra();
});

function mostrarResumen(){
    let articuloSeleccionados = JSON.parse(sessionStorage.getItem("carrito"));

    if(articuloSeleccionados && articuloSeleccionados.length >0){
        let resumenCompra = document.getElementById("resumenCompra");
        let totalCompra=0;
        articuloSeleccionados.forEach(articulo => {
            let p = document.createElement("p");
            let subtotal = articulo.precio * articulo.cantidad;
            p.textContent = `${articulo.nombre} - $${articulo.precio} x ${articulo.cantidad} = $${subtotal.toFixed(2)}`;
            resumenCompra.appendChild(p);
            totalCompra += subtotal;
        });
        document.getElementById("totalCompra").textContent = `$${totalCompra.toFixed(2)}`;
    }else{
        let resumenCompra = document.getElementById("resumenCompra");
        resumenCompra.textContent = "No se han seleccionado articulos.";
        document.getElementById("totalCompra").textContent = "$0.00";
    }
}

function cancelarCompra(){
    alert("Cancelaste tu compra, esperamos verte pronto");
    window.location.href = "../index.html";
}
function finalizarCompra(){
    alert("Gracias por tu compra, hasta la proxima");
    window.location.href = "../index.html";
}

