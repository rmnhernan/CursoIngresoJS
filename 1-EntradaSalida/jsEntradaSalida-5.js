/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;

    var edad;

    var texto;

    nombre = document.getElementById("elNombre").value;

    edad = document.getElementById("laEdad").value;

    texto = "Su nombre es " + nombre.concat(" y tiene " + edad + " años");

    alert(texto);

    

    
	
}

