function secureSite(passwd) {
var entered = prompt("You need a secret password to use this site. Please enter the password:");
if (!(entered == passwd)) {
var body = document.getElementsByTagName("body")[0];
body.innerHTML = "<h1>Wrong Password</h1>";
}
}
