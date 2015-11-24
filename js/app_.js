$(document).ready(function() {
	var userGuess = 0;
	var guessCount = 0;
	var secretNumber = 0;
	var finish = false;

	function secretNumGenerator() {
		secretNumber = Math.floor(Math.random()*100);
		return secretNumber;
	}

	secretNumGenerator();

//$("body").css("background", "green");
	function lessGuesses() {
		if (userGuess===secretNumber) {
			setFeedback("you win");
			$("body").css("background-image", "url('https://upload.wikimedia.org/wikipedia/commons/d/d7/Confetti_(5879576562).jpg')");
			finish = true;
		} else if ((secretNumber - userGuess) > 65) {
			setFeedback("I'm freeeezing!");
			$("body").css("background", "#191970");
		} else if ((secretNumber - userGuess) > 60) {
			setFeedback("I need a jacket");
			$("body").css("background", "#4169E1");
		} else if ((secretNumber - userGuess) > 55) {
			setFeedback("It's getting a little chilly");
			$("body").css("background", "#6495ED");
		} else if ((secretNumber - userGuess) > 50) {
			setFeedback("Do you feel a breeze?");
			$("body").css("background", "#B0C4DE");
		} else if ((secretNumber - userGuess) > 45) {
			setFeedback("It's kind of warm in here");
			$("body").css("background", "#FFA07A");
		} else if ((secretNumber - userGuess) > 40) {
			setFeedback("It's getting hot");
			$("body").css("background", "#FA8072");
		} else if ((secretNumber - userGuess) > 35) {
			setFeedback("I think I'm sweating");
			$("body").css("background", "#CD5C5C");
		} else if ((secretNumber - userGuess) > 30) {
			setFeedback("I'm am sweating!");
			$("body").css("background", "#DC143C");
		} else if ((secretNumber - userGuess) > 25) {
			setFeedback("It's HOT!");
			$("body").css("background", "#B22222");
		} else if ((secretNumber - userGuess) > 20) {
			setFeedback("OUCH! It's super HOT!");
			$("body").css("background", "#8B0000");
		} else if ((secretNumber - userGuess) > 15) {
			setFeedback("FIRE! FIRE! FIRE!");
			$("body").css("background", "#660000");
		} else if ((secretNumber - userGuess) > 10) {
			setFeedback("HOT FIRE!!! HOT FIRE!!!"); 
			$("body").css("background", "#660000");
		} else if ((secretNumber - userGuess) > 5) {
			setFeedback("We're on the SUN!");
			$("body").css("background", "#330000");
		} else if ((secretNumber - userGuess) > 0.5) {
			setFeedback("We're inside the SUN!");
			$("body").css("background", "#1a0000");
		} else {
		}
	}



	function moreGuesses() {
		if (userGuess===secretNumber) {
			setFeedback("you win");
			finish = true;
		} else if ((userGuess - secretNumber) > 65) {
			setFeedback("I'm freeeezing!");
			$("body").css("background", "#191970");
		} else if ((userGuess - secretNumber) > 60) {
			setFeedback("I need a jacket");
			$("body").css("background", "#4169E1");
		} else if ((userGuess - secretNumber) > 55) {
			setFeedback("It's getting a little chilly");
			$("body").css("background", "#6495ED");
		} else if ((userGuess - secretNumber) > 50) {
			setFeedback("Do you feel a breeze?");
			$("body").css("background", "#B0C4DE");
		} else if ((userGuess - secretNumber) > 45) {
			setFeedback("It's kind of warm in here");
			$("body").css("background", "#FFA07A");
		} else if ((userGuess - secretNumber) > 40) {
			setFeedback("It's getting hot");
			$("body").css("background", "#FA8072");
			} else if ((userGuess - secretNumber) > 35) {
			setFeedback("I think I'm sweating");
			$("body").css("background", "#CD5C5C");
			} else if ((userGuess - secretNumber) > 30) {
			setFeedback("I'm am sweating!");
			$("body").css("background", "#DC143C");
		} else if ((userGuess - secretNumber) > 25) {
			setFeedback("It's HOT!");
			$("body").css("background", "#B22222");
		} else if ((userGuess - secretNumber) > 20) {
			setFeedback("OUCH! It's super HOT!");
			$("body").css("background", "#8B0000");
		} else if ((userGuess - secretNumber) > 15) {
			setFeedback("FIRE! FIRE! FIRE!");
			$("body").css("background", "#660000");
		} else if ((userGuess - secretNumber) > 10) {
			setFeedback("HOT FIRE!!! HOT FIRE!!!"); 
			$("body").css("background", "#4d0000");
		} else if ((userGuess - secretNumber) > 5) {
			setFeedback("We're on the SUN!");
			$("body").css("background", "#330000");
		} else if ((userGuess - secretNumber) > 0.5) {
			setFeedback("We're inside the SUN!");
			$("body").css("background", "#1a0000");
		} else {

		}
	}

	function compareAmount() {
	if (userGuess > secretNumber) {
		moreGuesses();
	} else {
		lessGuesses();
		}
	}	
	

	function setFeedback(feedback) {
		$("#feedback").text(feedback);
	}
	


	function setCount(guessCount) {
		$("#count").text(guessCount);
	}


	function checkInput() {
		if (isNaN(userGuess)) {
		setFeedback("Please input a number");
		} else if (userGuess === " ") {
			setFeedback("Please input a number");
		} else if (userGuess < 0 || userGuess > 100) {
			setFeedback("Input a number between 0 and 100");
		} else {
			compareAmount();
			guessCount++;
			setCount(guessCount);
        $("#guessList").append("<li>" + userGuess + "</li>");
		}
	}


	$("form").submit(function(event) {
		event.preventDefault();
		if (finish) {
			setFeedback("You already won! Start new game.");
		} else {
		userGuess = parseInt($("#userGuess").val());
		
		checkInput();
		}
	});

});

	
