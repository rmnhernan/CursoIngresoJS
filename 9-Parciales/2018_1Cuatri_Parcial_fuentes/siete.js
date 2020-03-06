
var contador = 0;
var sexo;
var nota;


function mostrar()
{ while(contador < 5){
    contador ++;
    
    
    do{

        nota = prompt("Ingrese la nota");
        nota = parseInt(nota);
        
    } while (isNaN(nota) || nota < 0 || nota > 10);
    
}   do{
    
    sexo = prompt("Ingrese el sexo del alumno");
    
} while (sexo != "f" && sexo != "m");



} 
