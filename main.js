function verificarFan() {
    let fan = parseInt(prompt("Cuantas canciones de Taylor Swift conoces?"));

    if (fan >= 5) {
        var eresSwiftie = prompt("¿Te consideras Swiftie?");
        if (eresSwiftie === "si") {
            alert("¡Genial! Eres swiftie");
        } else if (eresSwiftie === "no") {
            alert("No eres Swiftie");
        } else {
            alert("Respuesta inválida, por favor responde 'si' o 'no'");
        }
    } else {
        alert("Lo siento, no conoces muchas canciones, no puedes ser considerado Swiftie");
    }
}

verificarFan();


function diasPelicula() {
let cuenta = parseInt(prompt("Hagamos una cuenta regresiva para ver el film"));
let dias =13
while(dias >0){
    dias = dias -1 
        alert("faltan " + dias + " dias para la pelicula!")
    if(dias === 5){
        break;
        
    }
  
        
    
}
}
 diasPelicula(); 


 function diaFuncion(){
    const diaSemana = (prompt("¿Que dia de la semana veras el film?"))
    switch (diaSemana){
        case "lunes":
            alert("tu funcion es el lunes!")
            break;
            case "martes":
                alert("tu funcion es el martes!")
                break;
                case "miercoles":
                    alert("tu funcion es el miercoles!")
                    break;
                    case "jueves":
                        alert("tu funcion es el jueves!")
                        break;
                            case "viernes":
                                alert("tu funcion es el viernes!")
                                break;
                                default:
                                alert("solo aplica dias de semana.")
                            
    }
    
 }
 diaFuncion(); 

 
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

const merchMensaje = prompt("Te dejamos la lista de la merch de la pelicula. Presiona Enter para continuar");

const listaProductos = [
  new Producto("remera", 2500),
  new Producto("Pantalon", 4000),
  new Producto("gorra", 600),
  new Producto("buzo", 10000),
];

function mostrarProductos(precioMaximo) {
    let mensaje = "Lista de Productos: \n";
    listaProductos.filter(producto => producto.precio <= precioMaximo).forEach((producto, indice) => {
      mensaje += `Producto ${indice + 1}: ${producto.nombre}, Precio: $${producto.precio}\n`;
    });
  
    if (mensaje === "Lista de Productos: \n") 
      alert( "No hay productos que cumplan con el filtro de precio máximo.");
    
  
  }

function mostrarProductos() {
  let mensaje = "Lista de Productos: \n";
  listaProductos.forEach((producto, indice) => {
    mensaje += `Producto ${indice + 1}: ${producto.nombre}, Precio: $${producto.precio}\n`;
  });
  alert("Este es el precio  y los numeros de la merch de la pelicula:\n" + mensaje);
}

function calcularPrecioTotal() {
  const precioTotal = listaProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  alert(`Precio Total de la merch de la pelicula: $${precioTotal}`);
}

mostrarProductos(10000);

const confirmCompra = prompt("¿Deseas comprar algún producto?");
if (confirmCompra) {
  const productoCompra = prompt("Ingresa el número del producto que deseas comprar");
  if (productoCompra >= 1 && productoCompra <= listaProductos.length) {
    const productoSeleccionado = listaProductos[productoCompra - 1];
    alert(`Has elegido comprar ${productoSeleccionado.nombre} por $${productoSeleccionado.precio}`);
    const confirmacionCompra = confirm("¿Deseas confirmar la compra?");
    if (confirmacionCompra) {
      alert("Compra realizada con éxito. ¡Gracias por tu compra!");
    } else {
      alert("Compra cancelada. Hasta luego.");
    }
  } else {
    alert("Número de producto inválido, la compra ha sido cancelada.");
  }
} else {
  alert("Gracias por visitarnos. ¡Hasta luego!");
}

calcularPrecioTotal();
