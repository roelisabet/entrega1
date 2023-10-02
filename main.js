function verificarFan() {
    var fan = parseInt(prompt("Cuantas canciones de Taylor Swift conoces?"));

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