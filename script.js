function validateForm() {
    var accomodation = document.getElementsByName("accomodation");
    var satisfaction = document.getElementById("satisfaction").value
    var goingBack = document.getElementsByName("goingBack");
    var formValid = true;
    
    if (satisfaction == "satisfactionDefault") {
        formValid = false;
    }

    if (accomodation[0].checked == false && accomodation[1].checked == false && accomodation[2].checked == false && accomodation[3].checked == false) {
        formValid = false;
    }

    if(goingBack[0].checked == false && goingBack[1].checked == false) {
        formValid = false;    
    }

    if (formValid == false) {
        alert("Nem töltött ki minden kötelező részt!");
        return false;
    }
    if (formValid == true) {
        alert ("Köszönjük a kitöltést!");
    }
}