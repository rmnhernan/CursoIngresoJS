function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value; 

if (edad < 13 || edad > 18){
    
    alert("No es adolescente");
}
}//FIN DE LA FUNCIÓN