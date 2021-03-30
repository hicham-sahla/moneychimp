console.log("Welkom bij de shop");

// Vars voor keuzes selecteren eerste stap
var alleKeuzes = document.querySelector(".img-clmns");
var keuzeButtonEl = document.querySelector("#keuze-kleur");
var keuzeMenu = document.querySelector(".menu-kleur");

// Knoppen kleur
var knopBruin = document.querySelector(".knop-bruin");
var knopRoze = document.querySelector(".knop-roze");
var knopGroen = document.querySelector(".knop-groen");

// Afbeelding die veranderd
var imgUser = document.querySelector("#user-aap");

var gereedEl = document.querySelector(".gereed-btn");

// Function voor sluiten pop up
function keuzenSluitenKleur() {
    if (keuzeMenu.style.display === "block") {
        keuzeMenu.style.display = "none";
        alleKeuzes.style.display = "block";
    } else {
        keuzeMenu.style.display = "block";
        
    }
}

gereedEl.addEventListener("click", keuzenSluitenKleur);

// Function voor pop up
function keuzenKleur() {
    if (keuzeMenu.style.display === "none") {
        keuzeMenu.style.display = "block";
        alleKeuzes.style.display = "none"
    } else {
        keuzeMenu.style.display = "none";
        
    }
}

keuzeButtonEl.addEventListener("click", keuzenKleur);
keuzeMenu.style.display = "none";

// Functies van de knoppen kleur
function gekozenBruin(){
    imgUser.src = "img/mijn-aap-happy.gif";
}

knopBruin.addEventListener("click", gekozenBruin);

function gekozenRoze(){
    imgUser.src = "img/Shop-kleur-roze.gif";
}

knopRoze.addEventListener("click", gekozenRoze);

function gekozenGroen(){
    imgUser.src = "img/Shop-kleur-groen.gif";
}

knopGroen.addEventListener("click", gekozenGroen);