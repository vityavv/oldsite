function createCookie(cname2, value) {
  document.cookie=cname2 + "=" + value;
}
//from w3schools
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) != -1) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("hp");
  if (user = "") {
    createCookie("hp", "10");
    createCookie("xp", "0");
  }
}
createCookie("hp", "10");//to heal immedietly jic u no?
document.write("You have " + getCookie("hp") + " hp, " + getCookie("xp") + " xp.");