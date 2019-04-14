var score,roundScore,activePlayer,dice,playingGame;
playingGame=true;
init();


document.querySelector(".rolling").addEventListener('click',function()
{

if(playingGame)
{
//display dice
document.querySelector('.dice').style.display="block";

// 1.Random Number
dice=Math.floor(Math.random()*6)+1;

// 2.Display the Result
var diceDOM=document.getElementById('dic1');
diceDOM.style.display="block";
diceDOM.src="./images/"+dice+".jpg";


//3.Update the roundScore if the rolled no is not 1
	if(dice!=1)
	{
		// add  the score
		roundScore+=dice;
		document.querySelector("#current_score"+activePlayer).textContent=roundScore;
	}
	else
	{
		// next player
		nextPlayer();

		// instead of toggle we can use add to add class and remove to remove the class
	}

}
});


// creating functionality for hold

document.querySelector('.btn-hold').addEventListener('click',function()
{

	if(playingGame)
	{
	// Add Current score to global Score
	var i=activePlayer-1;
	scores[i]+=roundScore;
	

	
	//Update The UI
	document.querySelector(".player"+activePlayer+"_score").textContent=scores[i];
	
	//Check if player Won The Game
	if(scores[i]>=20)
	{
		document.querySelector(".player"+activePlayer+"_name").innerHTML="<h1>Winner</h1>";
		document.querySelector(".player"+activePlayer).classList.add('winner');
		playingGame=false;

	}
		

	else
	{
		nextPlayer();
	}

}

});


function nextPlayer()
{
	// next player
		activePlayer===1?activePlayer=2:activePlayer=1;
		roundScore=0;
		document.querySelector("#current_score1").textContent="0";
		document.querySelector("#current_score2").textContent="0";


		document.querySelector('.player1').classList.toggle('active');
		document.querySelector('.player2').classList.toggle('active');

		document.querySelector("#dic1").style.display="none";
}


document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
scores=[0,0];
roundScore=0;
activePlayer=1;
playingGame=true;
document.querySelector("#dic1").style.display="none";

document.querySelector(".player1_score").innerHTML="0";
document.querySelector(".player2_score").innerHTML="0";
document.querySelector("#current_score1").innerHTML="0";
document.querySelector("#current_score2").innerHTML="0";
document.querySelector(".player1_name").innerHTML="<h1>Player1</h1>";
document.querySelector(".player2_name").innerHTML="<h1>Player2</h1>";
document.querySelector(".player1").classList.remove('winner');
document.querySelector(".player2").classList.remove('winner');
document.querySelector(".player1").classList.remove('active');
document.querySelector(".player2").classList.remove('active');
document.querySelector(".player1").classList.add('active');

}