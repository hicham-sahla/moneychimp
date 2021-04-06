function showMessage() {
  	document.getElementById("div2").style.visibility = "visible";
  	document.getElementById("div1").style.visibility = "hidden";
}
setTimeout("showMessage()", 1500);
