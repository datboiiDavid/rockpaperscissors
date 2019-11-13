// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function() {
    $("#userChoice").text($("input").val());
    var choices = Math.random();

    if (choices > .9){
        $("#text").text("Rock");

    }

    if else (choices > .6){
        $("text").text("Paper");
    }
}
)
// DOCUMENT READY FUNCTION BELOW

