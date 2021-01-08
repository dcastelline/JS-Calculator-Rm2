$(document).ready(function() {

<<<<<<< HEAD
    // Your code here...
    // Setting button click
    var numberButton = $(".number");

    numberButton.on("click", function(event){
        event.preventDefault;
        console.log(event);
    })
    var operatorButton = $(".operator");

    operatorButton.on("click", function(event){
        event.preventDefault;
        console.log(event);
    })
});
=======
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

>>>>>>> main
