let articulos = [
    { nombre: 'Buzo', precio: 15000 },
    { nombre: 'Pantalon', precio: 20000 },
    { nombre: 'Remera', precio: 10000 },
    { nombre: 'Campera', precio: 35000 },
    { nombre: 'Sweater', precio: 25000 }
];

let carrito = [];

function mostrarArticulos() {
    let articulosLista = document.getElementById("articulosLista")
    articulos.forEach((articulo, index) =>{
        let div = document.createElement("div");
        div.classList.add("articulo");

        let img = document.createElement("img");
        img.src = `../assets/img/${articulo.nombre.toLowerCase()}.jpg`
        img.alt = articulo.nombre;

        let label = document.createElement("label");
        label.textContent = `${articulo.nombre} - $${articulo.precio}`;

        let agregarBtn = document.createElement("button");
        agregarBtn.textContent = "Agregar al carrito";
        agregarBtn.addEventListener("click", function(){
            agregarAlCarrito(index);
        });
        
        let quitarBtn = document.createElement("button");
        quitarBtn.textContent = "Quitar al carrito";
        quitarBtn.addEventListener("click", function(){
            quitarDelCarrito(index);
        });
        
        div.appendChild(img);
        div.appendChild(label);
        div.appendChild(agregarBtn);
        div.appendChild(quitarBtn);
        articulosLista.appendChild(div);
    });
    document.getElementById("finalizarCompraBtn").addEventListener("click", finalizarCompra);
}

function agregarAlCarrito(index){
    let articulo = articulos[index];
    let articuloExistente = carrito.find(item => item.nombre === articulo.nombre);
    if (articuloExistente){
        articuloExistente.cantidad++;
        articuloExistente.subtotal = articuloExistente.cantidad *articuloExistente.precio
    }else{
        carrito.push({
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: 1,
            subtotal: articulo.precio,
        })
    }
    actualizarCarrito();
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
}

function quitarDelCarrito(index) {
    let articulo = articulos[index];
    let indexEnCarrito = carrito.findIndex(item => item.nombre === articulo.nombre);
    if(indexEnCarrito !==-1) {
        carrito[indexEnCarrito].cantidad--;
        if(carrito[indexEnCarrito].cantidad <= 0){
            carrito.splice(indexEnCarrito, 1);
        }else {
            carrito[indexEnCarrito].subtotal = carrito[indexEnCarrito].cantidad*carrito[indexEnCarrito].precio;
        }
        actualizarCarrito();
    }
}

function actualizarCarrito(){
    let listaCarrito = document.getElementById("listaCarrito");
    let totalCarrito = document.getElementById("totalCarrito");
    listaCarrito.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} x ${item.cantidad} - $${item.subtotal}`;
        listaCarrito.appendChild(li);
        total += item.subtotal;
    });
    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}

function finalizarCompra() {
    window.location.href = "../pages/cierre.html";
}

mostrarArticulos();

