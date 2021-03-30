console.log("Welkom bij de shop");

// Vars voor keuzes selecteren eerste stap
var alleKeuzesKleur = document.querySelector(".clmns-kleur");
var alleKeuzesMinecraft = document.querySelector(".clmns-kleur");
var keuzeButtonKleur = document.querySelector("#keuze-kleur");
var keuzeButtonMinecraft = document.querySelector("#keuze-minecraft");
var keuzeMenu = document.querySelector(".menu-kleur");
var keuzeMenuMinecraft = document.querySelector(".menu-minecraft");

// Knoppen kleur
var knopBruin = document.querySelector(".knop-bruin");
var knopRoze = document.querySelector(".knop-roze");
var knopGroen = document.querySelector(".knop-groen");

// Knoppen minecraft
var knopBril1 = document.querySelector(".knop-bril-1");
var knopBril2 = document.querySelector(".knop-bril-2");
var knopBril3 = document.querySelector(".knop-bril-3");

// Afbeelding die veranderd
var imgUser = document.querySelector(".veranderde-kleur");
var UserBril = document.querySelector(".veranderde-bril");

var gereedElKleur = document.querySelector(".gereed-btn-kleur");
var gereedElMinecraft = document.querySelector(".gereed-btn-minecraft");

            // Kleur

// Function voor sluiten pop up
function keuzenSluitenKleur() {
    if (keuzeMenu.style.display === "block") {
        keuzeMenu.style.display = "none";
        alleKeuzesKleur.style.display = "block";
    } else {
        keuzeMenu.style.display = "block";
    }
}

gereedElKleur.addEventListener("click", keuzenSluitenKleur);

// Function voor pop up kleur
function keuzenKleur() {
    if (keuzeMenu.style.display === "none") {
        keuzeMenu.style.display = "block";
        alleKeuzesKleur.style.display = "none"
    } else {
        keuzeMenu.style.display = "none";
        
    }
}

keuzeButtonKleur.addEventListener("click", keuzenKleur);
keuzeMenu.style.display = "none";

// Functies van de knoppen kleur
function gekozenBruin(){
    imgUser.src = "../../assets/img/mijn-aap-happy.gif";
}

knopBruin.addEventListener("click", gekozenBruin);

function gekozenRoze(){
    imgUser.src = "../../assets/img/Shop-kleur-roze.gif";
}

knopRoze.addEventListener("click", gekozenRoze);

function gekozenGroen(){
    imgUser.src = "../../assets/img/Shop-kleur-groen.gif";
}

knopGroen.addEventListener("click", gekozenGroen);

            // Minecraft

// Function voor pop up minecraft
function keuzenMinecraft() {
    if (keuzeMenuMinecraft.style.display === "none") {
        keuzeMenuMinecraft.style.display = "block";
        alleKeuzesMinecraft.style.display = "none"
        UserBril.style.display = "block";
    } else {
        keuzeMenuMinecraft.style.display = "none";
        
    }
}

keuzeButtonMinecraft.addEventListener("click", keuzenMinecraft);
keuzeMenuMinecraft.style.display = "none";

// Function voor sluiten pop up
function keuzenSluitenMinecraft() {
    if (keuzeMenuMinecraft.style.display === "block") {
        keuzeMenuMinecraft.style.display = "none";
        alleKeuzesMinecraft.style.display = "block";
    } else {
        keuzeMenuMinecraft.style.display = "block";
    }
}

gereedElMinecraft.addEventListener("click", keuzenSluitenMinecraft);

// Functies van de knoppen minecraft bril
function gekozenBril1(){
    UserBril.src = "../../assets/img/Shop-bril-1.gif";
}

knopBril1.addEventListener("click", gekozenBril1);

function gekozenBril2(){
    UserBril.src = "../../assets/img/Shop-bril-2.gif";
}

knopBril2.addEventListener("click", gekozenBril2);

function gekozenBril3(){
    UserBril.src = "../../assets/img/Shop-bril-3.gif";
}

knopBril3.addEventListener("click", gekozenBril3);


UserBril.style.display = "none";