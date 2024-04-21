// //Funcion que engloba todo el proceso de compra
// function iniciarCompra(){
//     //saludo de bienvenida al usuario
//     let saludo = 'Bienvenidos a Seamas\nTienda de Indumentaria Femenina de venta Mayorista'
//     alert(saludo);

//     //Le pedimos al usuario que ingrese su nombre prohibiendo el ingreso de vacio y numeros
//     let nombreIngresado = prompt ('Ingrese su nombre');
//     while(nombreIngresado === '' || /\d/.test(nombreIngresado)){
//         nombreIngresado = prompt('El nombre ingresado no es valido. Ingrese su nombre para continuar');
//     }
//     alert('Hola ' + nombreIngresado + ', necesitamos que ingreses un dato mas para continuar');

//     //Ciclo en el que se le pide al cliente el ingreso de su CUIT que debe ser estrictamente numero de 11 digitos
//     let ID;
//     let regex = /^\d{11}$/;
//     do{
//         do{
//             ID = prompt('Ingresa tu numero de CUIT, sin . y sin /, \nRecorda que los numero de CUIT constan de 11 digitos');
//             if (ID === null) {
//                 alert('Cancelaste el Ingreso de Datos ¡Gracias por tu visita, hasta la próxima!');
//                 return;// si el usuario decide cancelar sale de la funcion
//             }
//         } while(ID === '' || !regex.test(ID))
//         ID = !confirm('El CUIT ingresado es ' + ID + '\nSi es correcto haga click en aceptar, \nsino cancele para volver a ingresar su CUIT');
//         }while(ID) //reconfirmacion del dato ingresado

//     alert('Genial, continuemos')

//     //Estreuctura de Objeto para los articulos y sus respectivos precios
//     let agregarMas = true;
//     let articulos = [
//         { nombre: 'Camisa', precio: 15000 },
//         { nombre: 'Pantalon', precio: 20000 },
//         { nombre: 'Remera', precio: 10000 },
//         { nombre: 'Campera', precio: 35000 },
//         { nombre: 'Sweater', precio: 25000 }
//     ];

//     function compraCliente(){
//         let listaArticulos = [];
//         let precioSubtotal = 0;

//         do {
//             let artElegido;
//             do{
//                 // mostramos al usuario los articulos disponibles con su respectivo numero de indce +1 asi evitamos usar la opcion 0
//                 let opciones = '';
//                 for (let i = 0; i < articulos.length; i++) {
//                     opciones += (i + 1) + '. ' + articulos[i].nombre + ' $' + articulos[i].precio + '\n';
//                 }
//                 opciones += (articulos.length + 1) + '. Terminar pedido\n';
//                 opciones += (articulos.length + 2) + '. Cancelar operación y salir\n';

//                 artElegido = parseInt(prompt('Selecciona un artículo que quieras agregar a tu compra:\n' + opciones));

//                 // en el caso de que seleccione un opcion invalida, avisarle a traves de un alert que ingrese un numero valido
//                 if (isNaN(artElegido) || artElegido < 1 || artElegido > articulos.length + 2) {
//                     alert('Por favor, selecciona un número de artículo válido.');
//                 }
//             } while (isNaN(artElegido) || artElegido < 1 || artElegido > articulos.length + 2);
//                 //condicional en el que si decide terminar la compra, salir del ciclo

//             if (artElegido === articulos.length + 1) {
//                 break;
//             } else if (artElegido === articulos.length + 2) {
//                 // Si el usuario decide cancelar la compra, reiniciar y salir del ciclo
//                 listaArticulos = [];
//                 precioSubtotal = 0;
//                 alert('Cancelaste la operación. ¡Esperamos verte pronto!');
//                 break;
//             }else { //si decide seguir agregando articulos
//                 let articuloSeleccionado = articulos[artElegido - 1];
//                 // Verificar si el artículo ya está en la lista
//                 let articuloExistente = listaArticulos.find(articulo => articulo.nombre === articuloSeleccionado.nombre);
//                 if (articuloExistente) {
//                     // Si el artículo ya está en la lista, pregunta si desea continuar repitiendo la selección
//                     if (!confirm('Este artículo ya está en tu lista. ¿Deseas agregarlo nuevamente?')) {
//                         continue; // Volver al inicio del bucle
//                     }
//                 }
//                 precioSubtotal += articuloSeleccionado.precio;
//                 listaArticulos.push(articuloSeleccionado);
//                 if (!confirm('Los artículos seleccionados hasta el momento son:\n\n' + listaArticulos.map(articulo => articulo.nombre + '$' + articulo.precio).join('\n') + '\n\nSubtotal: $' + precioSubtotal + '\n\n¿Deseas agregar más artículos?')) {
//                     agregarMas = false;
//                 }
//             }
//         } while (agregarMas);
//         //cuando finaliza la compra pedimos a la funcion que nos devuelva el resultado 
//         return listaArticulos;
//     }

//     let articulosSeleccionados = compraCliente();
//     let montoTotal = articulosSeleccionados.reduce((total, articulo) => total + articulo.precio, 0);

//     alert('Los artículos seleccionados son:\n' + articulosSeleccionados.map(articulo => articulo.nombre + ' $' + articulo.precio).join('\n') + '\n\nEl total es: $' + montoTotal);
//     alert('¡Gracias por tu visita, hasta la próxima!');
// }

// iniciarCompra();