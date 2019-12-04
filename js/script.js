// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function() {
    $("#userChoice").text($("input").val());
    var choices = $("input").val()
    var computerChoice;

    var choices = Math.random();
    if (choices > .9){
        $("#text").text("Rock");
        computerChoice = "Rock";
    } else if(choices > .6){
        $("text").text("Paper");
        computerChoice = "Paper"
    } else {
        $("text").text("Scissors");
        computerChoice = "Scissors"
    }

    var message;
    if (choices === "Rock" &&
        computerChoice === "Rock"){
        message="tie";
    }       
    if (choices === "Paper" &&
        computerChoice === "Rock"){
        message= "userWinner";
    }
    if(choices === "Scissors" &&
        computerChoice === "Rock"){
        message="computerWinner";
    } 
    if(choices === "Paper" &&
        computerChoice === "Paper"){
        message="tie";
    }

    
    // other combinations of choices

    // display the message
})
// DOCUMENT READY FUNCTION BELOW

