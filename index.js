// Fonction de désactivation de l'affichage des "tooltips"
function deactivateTooltips() {

    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;

    for (var i = 0; i < tooltipsLength; i++) {
        tooltips[i].style.display = 'none';
    }

}

// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input

function getTooltip(elements) {

    while (elements = elements.nextSibling) {
        if (elements.className === 'tooltip') {
            return elements;
        }
    }

    return false;

}
// Fonctions de vérification du formulaire, elles renvoient "true" si tout est ok

var check = {}; // On met toutes nos fonctions dans un objet littéral

check['sex'] = function() {

    var sex = document.getElementsByName('sex'),
        tooltipStyle = getTooltip(sex[1].parentNode).style;

    if (sex[0].checked || sex[1].checked) {
        tooltipStyle.display = 'none';
        return true;
    } else {
        tooltipStyle.display = 'inline-block';
        return false;
    }

};


check['lastName'] = function(id) {

    var name = document.getElementById(id),
        tooltipStyle = getTooltip(name).style;

    if (name.value.length >= 2) {
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['firstName'] = check['lastName']; // La fonction pour le prénom est la même que celle du nom

check['login'] = function() {

    var login = document.getElementById('login'),
        tooltipStyle = getTooltip(login).style;

    if (login.value.length >= 4) {
        login.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        login.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['pwd1'] = function() {

    var pwd1 = document.getElementById('pwd1'),
        tooltipStyle = getTooltip(pwd1).style;

    if (pwd1.value.length >= 6) {
        pwd1.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        pwd1.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['pwd2'] = function() {

    var pwd1 = document.getElementById('pwd1'),
        pwd2 = document.getElementById('pwd2'),
        tooltipStyle = getTooltip(pwd2).style;

    if (pwd1.value == pwd2.value && pwd2.value != '') {
        pwd2.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        pwd2.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['email'] = function () {

    var email = document.getElementById('email'),
        tooltipStyle = getTooltip(email).style;

    if (email.value === "root@paca.happy-dev.fr" || "admin@paca.happy-dev.fr" || "dieu@paca.happy-dev.fr") {
        email.className = 'incorrect';
        tooltipStyle.display = 'none';
        return false;
    } else {
        email.className = 'correct';
        tooltipStyle.display = 'inline-block';
        return true;
    }

};


console.log(check)

//Calculer l'âge et valider//
function calculerAge() {
    var td = new Date();
    // Lire la date de naissance//
    var dtn = document.getElementById('dateNaissance').value;
    // Lire l'année (les 4 premiers caractères de la chaïne à partir de 0)
    var an = dtn.substr(0, 4);
    //On séléctionne le mois de la date de naissance//
    var mois = dtn.substr(5, 2);
    //On sélectionne le jour de la date de naissance//
    var day = dtn.substr(8, 2);
    // l'âge//
    var age = td.getFullYear() - an;
    //On calcule le mois de la date -le mois de la date de naissance//
    var nbrJours = td.getDate() - day;
    //On calcule le mois de la date de naissance //
    var nbrMois = td.getMonth() + 1;

    if (nbrJours < 0) {
        //On enlève 1mois//
        nbrMois = nbrMois - 1;
        nbrJours = (td.getDate() + 30) - day;
    }
    //On calcule le mois de la date -le mois de la date de naissance//
    var lesMois = nbrMois - mois;
    // S'il est infèrieur ou égal à 0
    if (lesMois <= 0) {
        lesMois = (nbrMois + 12) - mois;
        //On enlève 1an à l'âge//
        age = age - 1;
    }
    // document.getElementById('ageAns').value = age;


    //function check() {
    // var nbr;
    // nbr = Number(document.getElementById("ageAns").value);

    if (age < 18) {
        alert("Vous n'êtes pas un adulte!");

    } else {
        //alert("Vous êtes un adulte");//
        alert("Mail envoyé!");

    }

    // Mise en place des événements

    (function() { // Utilisation d'une IIFE pour éviter les variables globales.

        var myForm = document.getElementById('formAge'),
            inputs = document.querySelectorAll('input[type=text], input[type=password]'),
            inputsLength = inputs.length;

        for (var i = 0; i < inputsLength; i++) {
            inputs[i].addEventListener('keyup', function(e) {
                check[e.target.name](e.target.name); // "e.target" représente l'input actuellement modifié
            });
        }

        myForm.addEventListener('submit', function(e) {

            console.log(check.email())

            var result = true;

            for (var i in check) {
                result = check[i](i) && result;
            }

            if (result) {
                alert('Le formulaire est bien rempli.');
            }

            e.preventDefault();

        });

        myForm.addEventListener('reset', function() {

            for (var i = 0; i < inputsLength; i++) {
                inputs[i].className = '';
            }

            deactivateTooltips();

        });

    })();
}

// Maintenant que tout est initialisé, on peut désactiver les "tooltips"

deactivateTooltips();