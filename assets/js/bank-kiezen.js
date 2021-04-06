var rabobank = document.querySelector("#rabo");
var ingbank = document.querySelector("#ing");
var abnamro = document.querySelector("#abn");
var snsbank = document.querySelector("#sns");
var asnbank = document.querySelector("#asn");
var triodosbank = document.querySelector("#triodos");

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

rabobank.addEventListener("click", function() {
    changeButton("rabo")
});
ingbank.addEventListener("click", function() {
    changeButton("ing")
});
abnamro.addEventListener("click", function() {
    changeButton("abn")
});
snsbank.addEventListener("click", function() {
    changeButton("sns")
});
asnbank.addEventListener("click", function() {
    changeButton("asn")
});
triodosbank.addEventListener("click", function() {
    changeButton("triodos")
});
