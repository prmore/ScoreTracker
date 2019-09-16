var player1 = document.querySelector("#btnPlayer1");
var player2 = document.querySelector("#btnPlayer2");
var reset = document.getElementById("reset")
var player1ScoreDisplay = document.getElementById("player1ScoreDisplay")
var player2ScoreDisplay = document.getElementById("player2ScoreDisplay");
var inputScore = document.getElementById("winningScore");
var winningScoreDisplay = document.querySelector("p span");
//var winningScore = document.getElementById("winningScoreDisplay")

var player1Score = 0;
var player2Score = 0;
var winningScore = 15;
var gameOver = false;

player1.addEventListener("click", function() {
	if (!gameOver) {
		player1Score++;
		player1ScoreDisplay.textContent = player1Score;
		
		if (player1Score === winningScore) {
			gameOver=true;
			player1ScoreDisplay.classList.add("winner");
		}
	}
});

player2.addEventListener("click", function(){
	if (!gameOver) {
		player2Score++;
		player2ScoreDisplay.textContent = player2Score;
		
		if (player2Score === winningScore) {
			gameOver=true;
			player2ScoreDisplay.classList.add("winner");
		}
	}
});

reset.addEventListener("click", function(){
	resetData();
});

function resetData(){
	player1Score = 0;
	player2Score = 0;
	gameOver = false;
	player1ScoreDisplay.textContent = player1Score;
	player2ScoreDisplay.textContent = player2Score;
	player1ScoreDisplay.classList.remove("winner");
	player2ScoreDisplay.classList.remove("winner");
}

inputScore.addEventListener("change", function(){
	resetData()
	winningScoreDisplay.textContent = inputScore.value;
	winningScore = Number(inputScore.value);
});