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

//
	function lessGuesses() {
		if (userGuess===secretNumber) {
			setFeedback("you win");
			finish = true;
		} else if ((secretNumber - userGuess) > 65) {
			setFeedback("I'm freeeezing!");
		} else if ((secretNumber - userGuess) > 60) {
			setFeedback("I need a jacket");
		} else if ((secretNumber - userGuess) > 55) {
			setFeedback("It's getting a little chilly");
		} else if ((secretNumber - userGuess) > 50) {
			setFeedback("Do you feel a breeze?");
		} else if ((secretNumber - userGuess) > 45) {
			setFeedback("It's kind of warm in here")
		} else if ((secretNumber - userGuess) > 40) {
			setFeedback("It's getting hot");
		} else if ((secretNumber - userGuess) > 35) {
			setFeedback("I think I'm sweating");
		} else if ((secretNumber - userGuess) > 30) {
			setFeedback("I'm am sweating!");
		} else if ((secretNumber - userGuess) > 25) {
			setFeedback("It's HOT!");
		} else if ((secretNumber - userGuess) > 20) {
			setFeedback("OUCH! It's super HOT!");
		} else if ((secretNumber - userGuess) > 15) {
			setFeedback("FIRE! FIRE! FIRE!");
		} else if ((secretNumber - userGuess) > 10) {
			setFeedback("HOT FIRE!!! HOT FIRE!!!"); 
		} else if ((secretNumber - userGuess) > 5) {
			setFeedback("We're on the SUN!");
		} else if ((secretNumber - userGuess) > 0.5) {
			setFeedback("We're inside the SUN!");
		} else {
		}
	}



	function moreGuesses() {
		if (userGuess===secretNumber) {
			setFeedback("you win");
			finish = true;
		} else if ((userGuess - secretNumber) > 65) {
			setFeedback("I'm freeeezing!");
		} else if ((userGuess - secretNumber) > 60) {
			setFeedback("I need a jacket");
		} else if ((userGuess - secretNumber) > 55) {
			setFeedback("It's getting a little chilly");
		} else if ((userGuess - secretNumber) > 50) {
			setFeedback("Do you feel a breeze?");
		} else if ((userGuess - secretNumber) > 45) {
			setFeedback("It's kind of warm in here")
		} else if ((userGuess - secretNumber) > 40) {
			setFeedback("It's getting hot");
		} else if ((userGuess - secretNumber) > 35) {
			setFeedback("I think I'm sweating");
		} else if ((userGuess - secretNumber) > 30) {
			setFeedback("I'm am sweating!");
		} else if ((userGuess - secretNumber) > 25) {
			setFeedback("It's HOT!");
		} else if ((userGuess - secretNumber) > 20) {
			setFeedback("OUCH! It's super HOT!");
		} else if ((userGuess - secretNumber) > 15) {
			setFeedback("FIRE! FIRE! FIRE!");
		} else if ((userGuess - secretNumber) > 10) {
			setFeedback("HOT FIRE!!! HOT FIRE!!!"); 
		} else if ((userGuess - secretNumber) > 5) {
			setFeedback("We're on the SUN!");
		} else if ((userGuess - secretNumber) > 0.5) {
			setFeedback("We're inside the SUN!");
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

	