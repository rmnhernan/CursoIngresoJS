var nombreHuesped;
var cantidadPersonas;
var cantidadDiasEstadia;
var formaPago;
var respuesta;
var maxReservas = 0;
var primeraVez = true
var maxNombre;
var maxDiasEstadia = 0;
var contadorEfectivo = 0;
var contadorTarjeta = 0;
var contadorQR = 0;
var contadorReservas = 0;
var acumuladorDias = 0;
var contadorReservas = 0;
var promedioDias;
var maxFormaPago;


function mostrar()
{

    respuesta = confirm("Desea ingresar sus datos?");
    
do{

    do{
        nombreHuesped = prompt("Ingrese su nombre");
        if(nombreHuesped == null){
            break;
        }
    } while (!isNaN(nombreHuesped));
    
    do{
        cantidadPersonas = prompt("Ingrese la cantidad de personas");
        cantidadPersonas = parseInt(cantidadPersonas);
        if (cantidadPersonas > 15){
            cantidadPersonas = alert("No se permiten mas de 15 huespedes");
        }
    } while (isNaN(cantidadPersonas) || cantidadPersonas < 1 || cantidadPersonas > 16);
    
    do{
        cantidadDiasEstadia = prompt("Ingrese sus dias de estadía");
        cantidadDiasEstadia = parseInt(cantidadDiasEstadia);
        
        if(cantidadDiasEstadia > 35){
            cantidadDiasEstadia = alert("La reserva máxima es de 35 días");
        }

    } while (isNaN(cantidadDiasEstadia) || cantidadDiasEstadia < 0 || cantidadDiasEstadia > 36);
    
    do{
        formaPago = prompt("ingrese su método de pago (Efectivo/Tarjeta/QR)").toLowerCase();
        
        
    } while(!isNaN(formaPago) || formaPago != "efectivo" && formaPago != "tarjeta" && formaPago != "qr");

    //Datos del promedio de dias de reserva:
    //COMMENT = VA EN ESTE ORDEN, SI NO NO PROMEDIA***
    acumuladorDias += cantidadDiasEstadia;
    contadorReservas ++;
    
    //No es necesario el FLAG; lo reemplazo por un máximo igual a 0 (O al número mas chico posible)
    
    /*if(primeraVez){
        primeraVez = false;
        maxReservas = cantidadPersonas;
        maxNombre = nombreHuesped;
        maxDiasEstadia = cantidadDiasEstadia;
    }
        */
        
     if(cantidadPersonas > maxReservas){
        
        maxReservas = cantidadPersonas;
        maxNombre = nombreHuesped;
        
    } 
    
     if(cantidadDiasEstadia > maxDiasEstadia){
        
        maxDiasEstadia = cantidadDiasEstadia;
        maxReservas = cantidadPersonas;
        
    }        

    //Forma de pago más utilizada 
    if (formaPago == "efectivo"){
        contadorEfectivo ++;
        } else if(formaPago == "tarjeta"){
            contadorTarjeta ++;
            } else if(formaPago = "qr"){
                contadorQR ++
            }

    if (contadorEfectivo > contadorTarjeta && contadorTarjeta > contadorQR){
        maxFormaPago = "efectivo"
        } else if (contadorTarjeta > contadorEfectivo && contadorTarjeta > contadorQR){
            maxFormaPago = "tarjeta";
            } else if(contadorQR > contadorEfectivo && contadorQR > contadorTarjeta){
                maxFormaPago = "qr";
                }   
    
    //Calculo promedio
    
    promedioDias = acumuladorDias / contadorReservas;
    promedioDias = parseInt(promedioDias);

   
    respuesta = confirm("Desea continuar ingresando datos?");

        

} while (respuesta);

alert("El huespued que trajo más personas en una sola reserva es " + maxNombre);
alert("La cantidad de personas que se quedaron más días es de " + maxReservas + " y se quedaron " + maxDiasEstadia + " días");
alert("La forma de pago más utilizada fue " + maxFormaPago);
alert("El promedio de cantidad de días por reserva fue de " + promedioDias);
}

