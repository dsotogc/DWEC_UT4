let primeraForma = document.querySelector("p.destacado");
let i = 0
let segundaForma = document.getElementsByClassName("destacado")[i];
while (!segundaForma.matches("p.destacado"))
{
	i++;
	let segundaForma = document.getElementsByClassName("destacado")[i];
}