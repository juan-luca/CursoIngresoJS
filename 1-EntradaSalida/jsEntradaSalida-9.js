/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var num1, total=0;
num1 = parseFloat(document.getElementById("sueldo").value);
document.getElementById("resultado").value=total=num1*1.1;
}
