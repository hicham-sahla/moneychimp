console.log("Mijn aap pagina");

// Knoppen tamagotchi
var knopHand = document.querySelector(".knop-hand");
var knopMuziek = document.querySelector(".knop-muziek");
var knopBanaan = document.querySelector(".knop-banaan");

// Afbeelding die veranderd
var imgUser = document.querySelector("#user-aap");

// Functies van de knoppen
function gekozenHand(){
    imgUser.src = "../../assets/img/mijn-aap-hand.gif";
}

knopHand.addEventListener("click", gekozenHand);

function gekozenDansen(){
    imgUser.src = "../../assets/img/mijn-aap-dansen.gif";
}

knopMuziek.addEventListener("click", gekozenDansen);

function gekozenBanaan(){
    imgUser.src = "../../assets/img/mijn-aap-eten.gif";
}

knopBanaan.addEventListener("click", gekozenBanaan);

var progressBar = document.querySelector("#file");

if (progressBar <= 50) {
    imgUser.src = "../../assets/img/mijn-aap-sad.gif";
} else {
    imgUser.src = "../../assets/img/mijn-aap-happy.gif";
}