function mostrar()
{
    var respuesta;
    var marca;
    var productos;
    var peso;
    var pesoMaximo;
    var pesoMinimo;
    var tempAlmacenamiento; 
    var temperaturasPares = 0;
    var marcaProducPesado;
    var productosCeroGrados = 0;
    var promedioPeso;    
    var max;
    var min;
    var acumuladorPesos = 0;
    var cantidadPeso = 0;
    
    //Creo un flag 
    var primeraVez = true
    
  
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
            
            } while(isNaN(tempAlmacenamiento) || tempAlmacenamiento < -30 || tempAlmacenamiento > 30);

            if(temperaturasPares % 2 == 0){

                temperaturasPares ++;
            } 
            
            if (temperaturasPares < 0){

                productosCeroGrados ++;
            }


            // evaluamos primera vez para calcular peso maximo y minimo
            
            if (primeraVez){

                primeraVez = false;
                pesoMaximo = peso;
                pesoMinimo = peso;
                marcaProducPesado = marca;
            } else {

                if (peso>pesoMaximo){

                    pesoMaximo = peso;
                    marcaProducPesado = marca;
                } else if (peso<pesoMinimo){

                    pesoMinimo = peso;

                }
            }



    
        respuesta = confirm("Desea continuar?");
    
    } while(respuesta);  

    if(productos > 0){

        promedioPeso = acumuladorPesos / productos
    } else {

        promedioPeso = "No ingreso ningun producto";
    }

    document.write("La cantidad de temperaturas pares: " + temperaturasPares + "<br>");
    document.write("La marca del producto mas pesado: " + marcaProducPesado + "<br>");
    document.write("La cantidad de productos que se conservan a menos grados: " + productosCeroGrados + "<br>");
    document.write("El promedio de todos los pesos: " + promedioPeso + "<br>");
    document.write("El peso maximo: " + max + "<br>");
    document.write("El peso minimo: " + min + "<br>");



}