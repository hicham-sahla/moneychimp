var buttonpet = document.querySelector("#rabo");
var buttonpet2 = document.querySelector("#ing");
var buttonpet3 = document.querySelector("#abn");
var buttonadidas = document.querySelector("#sns");
var buttonjordans = document.querySelector("#asn");
var buttonnike = document.querySelector("#triodos");

function changeButton(identifier) {
    if (identifier == "rabo") {
        removeButton()
        rabo.classList.add("btnChanged")
    } else if (identifier == "ing") {
        removeButton()
        ing.classList.add("btnChanged")
    } else if (identifier == "abn") {
        removeButton()
        abn.classList.add("btnChanged")
    } else if (identifier == "sns") {
        removeButton()
        sns.classList.add("btnChanged")
    } else if (identifier == "asn") {
        removeButton()
        asn.classList.add("btnChanged")
    } else if (identifier == "triodos") {
        removeButton()
        triodos.classList.add("btnChanged")
    }
}

function removeButton() {
    rabo.classList.remove("btnChanged")
    ing.classList.remove("btnChanged")
    abn.classList.remove("btnChanged")
    sns.classList.remove("btnChanged")
    asn.classList.remove("btnChanged")
    triodos.classList.remove("btnChanged")
}

buttonpet.addEventListener("click", function() {
    changeButton("rabo")
});
buttonpet2.addEventListener("click", function() {
    changeButton("ing")
});
buttonpet3.addEventListener("click", function() {
    changeButton("abn")
});
buttonadidas.addEventListener("click", function() {
    changeButton("sns")
});
buttonjordans.addEventListener("click", function() {
    changeButton("asn")
});
buttonnike.addEventListener("click", function() {
    changeButton("triodos")
});
