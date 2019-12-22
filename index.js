//Je valide le formulaire avec des évènements//
document.forms["inscription"].addEventListener("submit", function (e) {

    var bug;
    var inputs = this;

    var bD = inputs[name = "BirthDay"].value;

    var td = new Date();
    var year = bD.substr(0, 4);
    var month = bD.substr(5, 2) - 1;
    var day = bD.substr(8, 2) - 1;

    var age = td.getFullYear() - year;
    var ageMonth = td.getMonth() - month;
    var ageDay = td.getDay() - day;

    if ((ageMonth < 0) || ((ageMonth == 0) && (ageDay < 0))) {
        age--;
    }

    if (inputs[name = "email"].value == "root@paca.happy-dev.fr" || inputs[name = "email"].value == "admin@paca.happy-dev.fr" || inputs[name = "email"].value == "dieu@paca.happy-dev.fr") {
        bug = "This email is not available!";
    }

    if (inputs[name = "email2"].value == "root@paca.happy-dev.fr" || inputs[name = "email2"].value == "admin@paca.happy-dev.fr" || inputs[name = "email2"].value == "dieu@paca.happy-dev.fr") {
        bug = "This email is not available!";
    }

    if (inputs[name = "Login"].value == "root" || inputs[name = "Login"].value == "admin" || inputs[name = "Login"].value == "dieu") {
        bug = "This login is not available!";
    }

    if (inputs[name = "email"].value === inputs[name = "email2"].value) {
    }
    else{
        bug = "The 2 emails were different!";
    }

    if (inputs[name = "Pswd"].value === inputs[name = "Pswd2"].value) {
    }
    else {
        bug = "The 2 passwords were different!";
    }
    
    if (inputs[name = "Sex"].value == "") {
        bug = "Choose your gender!";
    }

    if (age < 18) {
        bug = "You need to be at least 18 years!";
    }


    // Traitement générique
    for (var i = 0; i < inputs.length; i++) {
        // console.log(inputs[i]);
        if (!inputs[i].value) {
            bug = "Some field are empty!";
            break;
        }
    }
    if (bug) {
        e.preventDefault();
        document.getElementById("bug").innerHTML = bug;
        return false;
    }
});