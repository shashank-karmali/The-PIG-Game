 /*
 1. two players
 2. in each turn , a player rolls a dice as many times he wihses , each result got
 to added ti his ROUND score
 3. but id olayer rolls a 1, all his round score is lost . after that its nect players's turn
 4.the player can choose to "hold" which means that his ORUND score gets added to his
 score. after that nect player turn
 5. the first player to reach 100 ponits on GLOBAL score wins the game.

 */
var scores, roundScore, activePlayer, gamePlaying, compare;
newGame();

//-------------ROLL DICE BUTTON-------------------------------------------------------------------------------
document.querySelector('.btn--roll').addEventListener('click'/*typeOfEvent*/,function()/*AnonymousFucntion*/{

if(gamePlaying){
	//1. radnom number
	var dice1Num = Math.floor(Math.random() * 6) +1;
	var dice2Num = Math.floor(Math.random() * 6) +1;
	
	//2.display the result
	//var diceDOM = document.querySelector('.dice');
	//diceDOM.style.display = 'block';
	//diceDOM.src = 'dice-' + dice + '.png';
	var dice1 = document.getElementById('dice-1');
	var dice2 = document.getElementById('dice-2');
	dice1.style.display = 'block';
	dice2.style.display = 'block';
	dice1.src = 'dice-' + dice1Num + '.png';
	dice2.src = 'dice-' + dice2Num + '.png';
	
	// double 6 end the game
	/*if(compare === 6 && dice === 6){
		scores[activePlayer] = 0;
		document.querySelector('#score--' + activePlayer).textContent = '0';
		nextPlayer();
	}*/
	//3.uoadte the round score only if the rolled number is not 1
	if(dice1Num !== 1 && dice2Num !==1){
		// add value
		roundScore = dice1Num + dice2Num;
		document.getElementById('current--' + activePlayer).textContent = roundScore;
	}else{
		//NEXT PLAYER TURN
		nextPlayer();
	}
	//compare = dice;
}
});
//--------------------------------------------------------------------------------------------------------------

//-------------HOLD BUTTON--------------------------------------------------------------------------------------
document.querySelector('.btn--hold').addEventListener('click',function(){

if(gamePlaying){
		//ADD CURRENT SCORE TO GLOBAL SCORE
	scores[activePlayer] += roundScore;

	//UPADTE THE UI
	document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
	
	var winningscore = 50;
	
	//CHECK IF THE PLAYER WON THE GAME
	if (scores[activePlayer] >= winningscore){
		document.getElementById('name--' + activePlayer).textContent = 'WINNER!!!!!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player--' + activePlayer).classList.toggle('player--active');
		document.querySelector('.player--' + activePlayer).classList.add('player--winner');
		document.querySelector('.player--' + activePlayer).classList.remove('active');
		gamePlaying = false;

	}else{
		//NEXT PLAYER
		nextPlayer();
	}
}
});
//------------------------------------------------------------------------------------------------

//next player------------------------------------------------------------------------------------
function nextPlayer(){ // DRY principle
	//next player turn
		//document.querySelector('.player--' + activePlayer).classList.remove('player--active');
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;// ternary operator
		roundScore = 0;
		document.getElementById('current--0').textContent = '0';
		document.getElementById('current--1').textContent = '0';

		document.querySelector('.player--0').classList.toggle('player--active');
		document.querySelector('.player--1').classList.toggle('player--active');
		//document.querySelector('.player--' + activePlayer).classList.add('player--active');
		//document.querySelector('.dice').style.display = 'none';
		
		//document.getElementById('dice-1').style.display = 'none';
		//document.getElementById('dice-2').style.display = 'none';
		dicehide();
}
//-------------------------------------------------------------------------------------------------

//--------------------NEW GAME BUTTON---------------------------------------------------------------
document.querySelector('.btn--new').addEventListener('click', newGame);

function newGame(){
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	document.getElementById('score--0').textContent = '0';
	document.getElementById('score--1').textContent = '0';
	document.getElementById('current--0').textContent = '0';
	document.getElementById('current--1').textContent = '0';
	//document.getElementById('dice-1').style.display = 'none';
	//document.getElementById('dice-2').style.display = 'none';
	dicehide();
	document.getElementById('name--0').textContent = 'Player 1';
	document.getElementById('name--1').textContent = 'Player 2';
	document.querySelector('.player--0').classList.remove('player--winner');
	document.querySelector('.player--1').classList.remove('player--winner');
	document.querySelector('.player--0').classList.remove('active');
	document.querySelector('.player--1').classList.remove('player--active');
	document.querySelector('.player--0').classList.add('player--active');
//--------------------------------------------------------------------------------------------------
}

//--------------------------hide dice function-----------------------------------------------------
function dicehide(){
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}
//-----------------------------------------------------------------------------------------------































































