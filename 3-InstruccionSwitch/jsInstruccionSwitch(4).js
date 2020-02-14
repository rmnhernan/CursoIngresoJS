function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño) {
        case "Abril":
            alert("Tiene 30 dìas");
            break;
        case "Febrero":
            alert("Tiene 28 dìas");
            break;
        case "Junio":
            alert("Tiene 30 dìas");
            break;
        case "Agosto":
            alert("Tiene 30 dìas");
            break;
        case "Octubre":
            break;
        case "Diciembre":
            alert("Tiene 30 dìas");
            break;                
        default:
            alert("Tiene 31 dìas");
            break;
    }
	



}//FIN DE LA FUNCIÓN