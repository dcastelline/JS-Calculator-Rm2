$(document).ready(function() {

    var numberButton = $(".number");
    var operatorButton = $(".operator");
    var firstNum = $("#first-number");
    // var operator = $("#operator");
    var secondNum = $("second-number");
    var resultDisplay = $("#result");
    var clear = $(".clear");
    var equal = $(".equal");


    numberButton.on("click", function(event){
        event.preventDefault();
        var num = this.value
        console.log(this.value);
        console.log(event);
    })

    operatorButton.on("click", function(event){
        event.preventDefault();
        var sign = this.value;
        console.log(this.value);
        console.log(event);
        
    })
    
    function displayNum() {
        resultDisplay.text(numberButton.value);
    }
    clear.on("click", function(event){
        event.preventDefault();
        resultDisplay.empty();
        firstNum = "";
    });


});
