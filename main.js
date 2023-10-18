// PRIMERA PRE-ENTREGA


// function verificarFan() {
//     let fan = parseInt(prompt("Cuantas canciones de Taylor Swift conoces?"));

//     if (fan >= 5) {
//         var eresSwiftie = prompt("¿Te consideras Swiftie?");
//         if (eresSwiftie === "si") {
//             alert("¡Genial! Eres swiftie");
//         } else if (eresSwiftie === "no") {
//             alert("No eres Swiftie");
//         } else {
//             alert("Respuesta inválida, por favor responde 'si' o 'no'");
//         }
//     } else {
//         alert("Lo siento, no conoces muchas canciones, no puedes ser considerado Swiftie");
//     }
// }

// verificarFan();


// function diasPelicula() {
// let cuenta = parseInt(prompt("Hagamos una cuenta regresiva para ver el film"));
// let dias =13
// while(dias >0){
//     dias = dias -1 
//         alert("faltan " + dias + " dias para la pelicula!")
//     if(dias === 5){
//         break;
        
//     }
  
        
    
// }
// }
//  diasPelicula(); 


//  function diaFuncion(){
//     const diaSemana = (prompt("¿Que dia de la semana veras el film?"))
//     switch (diaSemana){
//         case "lunes":
//             alert("tu funcion es el lunes!")
//             break;
//             case "martes":
//                 alert("tu funcion es el martes!")
//                 break;
//                 case "miercoles":
//                     alert("tu funcion es el miercoles!")
//                     break;
//                     case "jueves":
//                         alert("tu funcion es el jueves!")
//                         break;
//                             case "viernes":
//                                 alert("tu funcion es el viernes!")
//                                 break;
//                                 default:
//                                 alert("solo aplica dias de semana.")
                            
//     }
    
//  }
//  diaFuncion(); 










// SEGUNDA PRE-ENTREGA


function Producto(nombre, categoria, precio) {
  this.nombre = nombre;
  this.categoria = categoria;
  this.precio = precio;
}

const merchMensaje = prompt("Te dejamos la lista de la merch de la pelicula. Presiona Enter para continuar");

const listaProductos = [
  new Producto('Remera Lover', 'Ropa', 2500),
  new Producto('Pantalon Lover', 'Ropa', 4000),
  new Producto('CD Folklore', 'Música', 2000),
  new Producto('Gorra Reputation', 'Accesorios', 600),
  new Producto('Aritos', 'Accesorios', 10000)
];

function buscarProductoPorNombre(nombre) {
  return listaProductos.find(item => item.nombre.toLowerCase() === nombre.toLowerCase());
}

function filtrarProductosPorCategoria(categoria) {
  return listaProductos.filter(item => item.categoria.toLowerCase() === categoria.toLowerCase());
}

function mostrarProductos() {
  let mensaje = 'Productos disponibles:\n';
  listaProductos.forEach(item => {
      mensaje += `Nombre: ${item.nombre}, Categoría: ${item.categoria}, Precio: ${item.precio}\n`;
  });
  alert(mensaje);
}
function buscarProducto() {
  const nombre = prompt('Ingrese el nombre del producto:');
  const productoBuscado = buscarProductoPorNombre(nombre);
  if (productoBuscado) {
      alert(`Producto encontrado:\nNombre: ${productoBuscado.nombre}\nCategoría: ${productoBuscado.categoria}\nPrecio: ${productoBuscado.precio}`);
  } else {
      alert('Producto no encontrado.');
  }
}


function filtrarProductos() {
  const categoria = prompt('Ingrese la categoría a filtrar:');
  const productosFiltrados = filtrarProductosPorCategoria(categoria);
  if (productosFiltrados.length > 0) {
      let mensaje = `Productos de la categoría "${categoria}":\n`;
      productosFiltrados.forEach(item => {
          mensaje += `Nombre: ${item.nombre}, Precio: $${item.precio}\n`;
      });
      alert(mensaje);
  } else {
      alert(`No se encontraron productos en la categoría ${categoria}.`);
  }
}


mostrarProductos();
buscarProducto();
filtrarProductos();
function verProductos(precioMaximo) {
  let mensaje = "Lista de Productos: \n";
  listaProductos.filter(producto => producto.precio <= precioMaximo).forEach((producto, indice) => {
      mensaje += `Producto ${ indice + 1 }: ${ producto.nombre }, Precio: $${ producto.precio } \n`;
  });

  if (mensaje === "Lista de Productos: \n")
      alert("No hay productos que cumplan con el filtro de precio máximo.");

}

function calcularPrecioTotal() {
  const precioTotal = listaProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  alert(`Precio Total de la merch de la pelicula: ${ precioTotal }`);
}

verProductos(10000);

const confirmCompra = prompt("¿Deseas comprar algún producto?");
if (confirmCompra) {
  const productoCompra = prompt("Ingresa el número del producto que deseas comprar");
  if (productoCompra >= 1 && productoCompra <= listaProductos.length) {
      const productoSeleccionado = listaProductos[productoCompra - 1];
      alert(`Has elegido comprar ${productoSeleccionado.nombre} por ${productoSeleccionado.precio}`);
      const confirmacionCompra = confirm("¿Deseas confirmar la compra?");
      if (confirmacionCompra)
          alert("Compra realizada con éxito. ¡Gracias por tu compra!");
  }
}