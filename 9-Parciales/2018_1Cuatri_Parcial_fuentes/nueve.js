function mostrar()
{
    var respuesta;
    var marca;
    var peso;
    var pesoMaximo = 0;
    var pesoMinimo = 0;
    var tempAlmacenamiento; 
    var temperaturasPares = 0;
    var marcaProducPesado;
    var productosCeroGrados = 0;
    var promedioPeso;    
    var acumuladorPesos = 0;
    var contadorPeso = 0;
    
    //Creo un flag 
    var primeraVez = true
    
  
    do{
       
        do {
           marca = prompt ("Ingrese una marca")
           if(marca == null){
               break;
           }
             
       
        } while (!isNaN(marca));
        do{
            peso = prompt("Ingrese un peso entre 1 y 100");
            peso = parseInt(peso);
           
            if (peso == null){
               break;
           } 

        } while(isNaN(peso) || peso < 1 || peso > 100);
            
    
            do{
                tempAlmacenamiento = prompt("Ingrese una temperatura entre -30 y 30");
            
            } while(isNaN(tempAlmacenamiento) || tempAlmacenamiento < -30 || tempAlmacenamiento > 30);

            if(tempAlmacenamiento % 2 == 0){

                temperaturasPares ++;
            } 
            
            if (tempAlmacenamiento < 0){

                productosCeroGrados ++;
            } 
            // D) El promedio del peso de todos los productos
            if(peso > 0){

                contadorPeso ++
                acumuladorPesos += peso
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

    if(contadorPeso > 0){

        promedioPeso = acumuladorPesos / contadorPeso
    } else {

        promedioPeso = "No ingreso ningun producto";
    }

    document.write("La cantidad de temperaturas pares: " + temperaturasPares + "<br>");
    document.write("La marca del producto mas pesado: " + marcaProducPesado + "<br>");
    document.write("La cantidad de productos que se conservan a menos grados: " + productosCeroGrados + "<br>");
    document.write("El promedio de todos los pesos: " + promedioPeso + "<br>");
    document.write("El peso maximo: " + pesoMaximo + "<br>");
    document.write("El peso minimo: " + pesoMinimo + "<br>");



}