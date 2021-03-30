console.log("Mijn aap pagina");

// Knoppen tamagotchi
var knopHand = document.querySelector(".knop-hand");
var knopMuziek = document.querySelector(".knop-muziek");
var knopBanaan = document.querySelector(".knop-banaan");

// Afbeelding die veranderd
var imgUser = document.querySelector("#user-aap");

// Code van: https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing1
function terugAap() {
    imgUser.src = "../../assets/img/mijn-aap-happy.gif";
}

// Functies van de knoppen
function gekozenHand(){
    imgUser.src = "../../assets/img/mijn-aap-hand.gif";

    // Code van: https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing1
    setTimeout(terugAap, 4120);
}

knopHand.addEventListener("click", gekozenHand);

function gekozenDansen(){
    imgUser.src = "../../assets/img/mijn-aap-dansen.gif";

    // Code van: https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing1
    setTimeout(terugAap, 4120);
}

knopMuziek.addEventListener("click", gekozenDansen);

function gekozenBanaan(){
    imgUser.src = "../../assets/img/mijn-aap-eten.gif";

    // Code van: https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing1
    setTimeout(terugAap, 4120);
}

knopBanaan.addEventListener("click", gekozenBanaan);

var progressBar = document.querySelector("#file");

// Set the value of progress element
progressBar.setAttribute("value", "50");
  
// Set the maximum value of progress element
progressBar.setAttribute("max", "100");

if (progressBar.value <= 50) {
    imgUser.src = "../../assets/img/mijn-aap-sad.gif";
} else {
    imgUser.src = "../../assets/img/mijn-aap-happy.gif";
}