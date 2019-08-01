(function(){

    var login = prompt("Enter login", );

    if (login == "Admin") {

        var password = prompt("Enter password")
        if (password == "Black Lord") {
            alert("You are welcome!")
        } else if (password == null) {
            alert("Entrance is cancelled")
        } else {
            alert("The password is wrong")
        };

    } else if (login == null) {
        alert("Entrance is cancelled")
    } else {
        alert("I don't know you")
    };

}());