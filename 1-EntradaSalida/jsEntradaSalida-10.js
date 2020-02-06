/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var num1, total=0;
    num1 = parseFloat(document.getElementById("importe").value);
    document.getElementById("resultado").value=total=num1*0.75;
}
