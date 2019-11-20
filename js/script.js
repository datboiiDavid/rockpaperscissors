// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function() {
    $("#userChoice").text($("input").val());
    var userChoice = $("input").val()
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
    if (userChoice === "Rock" &&
        computerChoice === "Rock"){
        message="tie";
    }       
    if (userChoice === "Paper" &&
        computerChoice === "Rock"){
        message= "userWinner";
    }
    if(choices === "Rock") {

    }
    // other combinations of choices

    // display the message
})
// DOCUMENT READY FUNCTION BELOW

