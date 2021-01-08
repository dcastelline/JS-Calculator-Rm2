$(document).ready(function () {

    var numberButton = $(".number");
    var operatorButton = $(".operator");
    var resultDisplay = $("#result");
    var clear = $(".clear");
    var equal = $(".equal");

    var firstNum = "";
    // var operator;
    var secondNum = "";
    var result;

    numberButton.on("click", function (event) {
        event.preventDefault();
        firstNum += this.value;
        resultDisplay.text(firstNum);
    })

    operatorButton.on("click", function (event) {
        event.preventDefault();
        var operator = this.value;

    })

    clear.on("click", function (event) {
        event.preventDefault();
        resultDisplay.empty();
        firstNum = "";
    })

    function add(firstNum, secondNum) {
        return firstNum + secondNum;
    }

});

