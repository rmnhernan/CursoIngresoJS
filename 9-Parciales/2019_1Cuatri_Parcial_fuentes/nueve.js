var respuesta;
var marca;
var producto;
var peso;
var tempAlmacenamiento; 
var temperaturasPares;
var marcaProducPesado;
var productosCeroGrados; 
var promedioPeso;    
var max;
var min;

respuesta = confirm ("Desea ingresar datos?");

function mostrar()
{

do{
   
   do{
       peso = prompt("Ingrese un peso entre 1 y 100");
       peso = parseInt(peso);
   } while(isNaN(peso) || peso < 1 || peso > 100);

    do {
       marca = prompt ("Ingrese una marca")
         
    } while (!isNaN(marca));

        do{
            tempAlmacenamiento = prompt("Ingrese una temperatura entre -30 y 30");
        
        } while(isNaN(tempAlmacenamiento) || tempAlmacenamiento < -30 || tempAlmacenamiento > -30);

    respuesta = confirm("Desea continuar?");

} while(respuesta);     
        
    
}