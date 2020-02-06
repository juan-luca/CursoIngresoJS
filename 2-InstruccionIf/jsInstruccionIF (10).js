function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numrandom=Math.floor(Math.random() * (10 - 0)) + 0;
	if(numrandom==9 && numrandom==10)
	{
		alert("EXCELENTE, su nota es "+numrandom);
	}
	else
	{
		
		if(numrandom>=4 && numrandom<9)
	{
		alert("APROBADO, su nota es "+numrandom);
	}
	else
{	

		alert("Vamos, la proxima se puede, su nota es "+numrandom);
	
}



}

}//FIN DE LA FUNCIÓN