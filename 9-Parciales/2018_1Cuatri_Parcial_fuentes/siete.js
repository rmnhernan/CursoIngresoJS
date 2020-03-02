
 var nota;
 var sexo;
 var promedio;
 var contador = 0;
 var acumuladorNotas = 0;
 var notaMasBaja;
 var sexoNotaBaja;
 var contadorVarones = 0;

function mostrar()
{
    while (contador < 5){
        contador ++;
console.log(contador)

//iteraciones hasta que el usuario quiera:
//while(respuesta)
// respuesta = confirm() / respuesta "si" / ingrese la cantidad

        do {
            nota = prompt ("Ingrese la nota");
            nota = parseInt(nota);
        
        } while (isNaN(nota) || nota < 0 || nota > 10);

        do {
                sexo = prompt("Ingrese un sexo (f o m)").toLowerCase();
            
            } while (sexo != "f" && sexo != "m");

            
            
            
            
            //tener cuidado de no dividir por cero
            // en este caso sabemos que contador NUNCA es igual a cero
            
            // Punto B
            
            if (contador == 1){
                
                notaMasBaja = nota;
                sexoNotaBaja = sexo
                
            } else if (contador > 1 && nota < notaMasBaja){
                notaMasBaja = nota;
                sexoNotaBaja = sexo
            }
            
            
            // Punto C
            
            if (nota >= 6 && sexo == "m"){
                
                contadorVarones ++;
            }
            // Punto A   ***LOS ACUMULADORES TIENEN VALOR 0 EN  LA VARIABLE***
            
            acumuladorNotas += nota;
            
            promedio = acumuladorNotas / contador;    
        }
            
            console.log("El promedio de las notas totales es " + promedio);
            console.log("La nota más baja es " + notaMasBaja + " y el sexo de esa persona es " + sexoNotaBaja);
            console.log("La cantidad de varones que su nota haya sido mayor o igual a 6 es " + contadorVarones);
            
}
