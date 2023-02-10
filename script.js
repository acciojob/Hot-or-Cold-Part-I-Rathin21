//your code here

function GenerateRandom(){
	let x=Math.floor((Math.random()*20)+1);
	// document.getElementById("num").innerHTML=x;
	let guessedValue=document.getElementById("guess").value;
	if(Math.abs(x-guessedValue)<=5)
	{
		document.getElementById("num").innerHTML="Hot";
	}
	else{
		document.getElementById("num").innerHTML="Cold";
	}
}
