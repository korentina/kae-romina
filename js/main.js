let saludo = 'Bienvenidos a Seamas\nTienda de Indumentaria Femenina de venta Mayorista'
alert(saludo);

let nombreIngresado = prompt ('Ingrese su nombre');
while(nombreIngresado === '' || /\d/.test(nombreIngresado)){
    nombreIngresado = prompt('El nombre ingresado no es valido. Ingrese su nombre para continuar');
}
alert('Hola ' + nombreIngresado + ', necesitamos que ingreses un dato mas para continuar');

let ID;
let regex = /^\d{11}$/;
do{
    do{
    ID = prompt('Ingresa tu numero de CUIT, sin . y sin /, \nRecorda que los numero de CUIT constan de 11 digitos');
}while(ID === '' || !regex.test(ID))
ID = !confirm('El CUIT ingresado es ' + ID + '\nSi es correcto haga click en aceptar, \nsino cancele para volver a ingresar su CUIT');
}while(ID)

alert('Genial, continuemos')


let agregarMas = true;
let art1 = 'Camisa'
let art2 = 'Pantalon'
let art3 = 'Remera'
let art4 = 'Campera'
let art5 = 'Sweater'
let precio1 = 15000
let precio2 = 20000
let precio3 = 10000
let precio4 = 35000
let precio5 = 25000


function compraCliente(){
    let listaArticulos = [];
    let precioTotal = 0;
    do{
        let artElegido
        do{
            artElegido = parseInt(prompt('Selecionar un articulo que quiera agregar a su compra. \n1.Camisa $15.000 \n2.Pantalon $20.000 \n3.Remera $10.000 \n4.Campera $30.000 \n5.Sweater $25.000 \n6.Cancelar operacion y Salir'));
        }while (artElegido === 0 || artElegido > 6 || isNaN(artElegido));
        switch(artElegido){
            case 1:
                precioTotal += precio1;
                listaArticulos.push(art1 +' $'+ precio1);
                break;
            case 2:
                precioTotal += precio2;
                listaArticulos.push(art2 +' $'+ precio2);
                break;
            case 3:
                precioTotal += precio3;
                listaArticulos.push(art3 +' $'+ precio3);
                break;
            case 4:
                precioTotal += precio4;
                listaArticulos.push(art4 +' $'+ precio4);
                break;
            case 5:
                precioTotal += precio5;
                listaArticulos.push(art5 +' $'+ precio5);
                break;
            case 6:
                agregarMas = false;
                listaArticulos = [];
                precioTotal = 0;
                alert('Cancelaste la operación. Esperamos verte pronto...');
                break;
        }
        if (agregarMas && confirm('Los articulos seleccionados hasta el momento son:\n\n' + listaArticulos.join('\n') + '\n\n Subotal: $' + precioTotal +'\n\n¿Deseas agregar más artículos?')) {
            agregarMas = true;
        } else {
            agregarMas = false;
        }
    } while (agregarMas);
    return 'Los artículos seleccionados son: \n' + listaArticulos.join('\n') + '\n\nTu total es $' + precioTotal;
}

let pedidoFinal = compraCliente();
alert(pedidoFinal)
alert('Gracias por tu visita, hasta la proxima')
