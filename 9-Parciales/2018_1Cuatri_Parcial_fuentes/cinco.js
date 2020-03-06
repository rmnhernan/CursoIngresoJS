var respuesta;
var nombreHuesped;
var personas;
var diasEstadia;
var formaPago;
var formaPagoMasUsada = 0;
var contadorEfectivo = 0
var contadorTarjeta = 0
var contadorQR = 0;
var huespedMaspersonas;
var maxPersonas = 0;
var personasMasDias;
var maxDias = 0;
var acumuladorDias = 0;
var contadorReservas = 0;
var promedoDias;




function mostrar()
{ 
    do{
        do{
            nombreHuesped = prompt("Ingrese su nombre");
            if (nombreHuesped == null){
                break;
            }
        } while (!isNaN(nombreHuesped))
        
        do{
            personas = prompt("Ingrese la cantidad de personas");
            personas = parseInt(personas);
        } while(isNaN(personas) || personas < 1);
        
        do{
            diasEstadia = prompt("Ingrese la cantidad de días de estadía");
            diasEstadia = parseInt(diasEstadia);
            
        } while (isNaN(diasEstadia) || diasEstadia < 1);
        
        do{
            formaPago = prompt("Ingrese la forma de pago");
        } while (formaPago != "efectivo" && formaPago != "tarjeta" && formaPago != "qr");
        
        contadorReservas ++;
        acumuladorDias += diasEstadia;
        promedioDias = acumuladorDias / contadorReservas;
        promedioDias = parseInt(promedoDias);
        
        if (personas > maxPersonas){
            
            maxPersonas = personas;
            huespedMaspersonas = nombreHuesped;
        }
        
         
         if(diasEstadia > maxDias){
             maxDias = diasEstadia;
             personasMasDias = personas;
         }


         switch (formaPago){
             case "efectivo":
                 contadorEfectivo ++;
                 if(contadorEfectivo > formaPagoMasUsada){
                    formaPagoMasUsada = contadorEfectivo;
                    stringPago = formaPago;
                 }
                 break;
             case "tarjeta":
                 contadorTarjeta ++;
                 if(contadorTarjeta > formaPagoMasUsada){
                    formaPagoMasUsada = contadorTarjeta;
                    stringPago = formaPago;
                }
                 break;
             case "qr":
                 contadorQR ++;
                 if(contadorEfectivo > formaPagoMasUsada){
                    formaPagoMasUsada = contadorQR;
                    stringPago = formaPago;
                }
                 break;    
        }

       

         /*
         if (formaPago == "efectivo"){
             contadorEfectivo ++;
             if(contadorEfectivo > formaPagoMasUsada){
                 formaPagoMasUsada = contadorEfectivo;
                 stringPago = formaPago;
                } 
            }
            
            
            if (formaPago == "tarjeta" ){
                contadorTarjeta ++;
                if(contadorTarjeta > formaPagoMasUsada){
                    formaPagoMasUsada = contadorTarjeta;
                    stringPago = formaPago;
                }
            }
            
            if (formaPago == "qr"){
                contadorEfectivo ++;
                if(contadorEfectivo > formaPagoMasUsada){
                    formaPagoMasUsada = contadorQR;
                    stringPago = formaPago;
                }
            }*/
            
            respuesta = confirm("Desea seguir ingresando datos?");
            
        } while (respuesta);

alert("La forma de pago más utilizada fue " + stringPago);
alert ("El huesped que trajo más personas fue "+ huespedMaspersonas);
alert ("La cantidad de personas que se quedaron más días es de "+ personasMasDias);
alert ("El promedio de cantidad de días por reserva fue de " + promedioDias);
}

