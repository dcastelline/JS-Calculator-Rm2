$(document).ready(function() {

    var numberButton = $(".number");

    numberButton.on("click", function(event){
        event.preventDefault();
        console.log(event);
    })

    var operatorButton = $(".operator");

    operatorButton.on("click", function(event){
        event.preventDefault();
        console.log(event);
    }
    )
});

