/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1, num2, total=0;
num1 = parseInt(document.getElementById("numeroUno").value);
num2 = parseInt(document.getElementById("numeroDos").value);
alert(total=num1+num2);
}

function restar()
{
	var num1, num2, total=0;
num1 = parseInt(document.getElementById("numeroUno").value);
num2 = parseInt(document.getElementById("numeroDos").value);
alert(total=num1-num2);
}

function multiplicar()
{ 
	var num1, num2, total=0;
num1 = parseInt(document.getElementById("numeroUno").value);
num2 = parseInt(document.getElementById("numeroDos").value);
alert(total=num1*num2);
}

function dividir()
{
	var num1, num2, total=0;
num1 = parseInt(document.getElementById("numeroUno").value);
num2 = parseInt(document.getElementById("numeroDos").value);
alert(total=num1/num2);
}

