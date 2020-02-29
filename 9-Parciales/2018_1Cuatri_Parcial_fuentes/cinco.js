var nombreHuesped;
var cantidadPersonas;
var cantidadDiasEstadia;
var formaPago;
var respuesta;
var maxReservas;
var primeraVez = true
var maxNombre
var maxDias


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
                    

                } while(!isNaN(formaPago) || formaPago != "efectivo" && formaPago != "tarjeta" && formaPago != "QR")


                if(primeraVez){
                    primeraVez = false;
                    maxReservas = cantidadPersonas;
                    maxNombre = nombreHuesped;
                    maxDias = cantidadDiasEstadia;
                
                } 
                else if(cantidadPersonas > maxReservas){

                    maxReservas = cantidadPersonas
                    maxNombre = nombreHuesped

                } else if(cantidadDiasEstadia > maxDias){

                        maxDias = cantidadDiasEstadia
                    }

                
                



                
    
              


respuesta = confirm("Desea continuar ingresando datos?");

        

} while (respuesta);


}
