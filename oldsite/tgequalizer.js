var c1 = document.getElementById("c1").offsetHeight;
var c2 = document.getElementById("c2").offsetHeight;
if (c1 > c2) {
document.getElementById("c2").style.height = c1 + "px";
} else {
document.getElementById("c1").style.height = c2 + "px";
}
