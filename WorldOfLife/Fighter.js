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
var hp = getCookie("hp");
var op_hp = 10;
var keep = true;
var body = document.getElementById("body");
var names = ["Bugbear", "Duck", "Lemonade Stand Man", "-42", "Jick the KoL Creator", "Squirrel"];
var num = Math.round(Math.random() * 5); //for name
document.write("<center>You are fighting a " + names[num] + "</center>");
function attack() {
  var num2 = Math.round(Math.random() * 2) + 1;
  var win = false;
  var lose = true;//make false if win.
  if (keep) {
    op_hp -= num2;
    body.insertAdjacentHTML('beforeend', "You hit " + names[num] + " for " + num2 + " damage.<br>");
    
    if (!win) {
      num2 = Math.round(Math.random() * 2) + 1; //redo for op
      hp -= num2;
      body.insertAdjacentHTML('beforeend', names[num] + " hit you for " + num2 + " damage.<br>");
    }
    
    if (hp < 0) {hp = 0}
    if (op_hp < 0) {op_hp= 0;}
    
    body.insertAdjacentHTML('beforeend', names[num] + " has " + op_hp + ", and you have " + hp + " hp.<br><br>");
    
    if (op_hp = 0) {
      var newxp = getCookie("xp");
      newxp += Math.round((Math.random() * 10) + 5);
      body.insertAdjacentHTML('beforeend', "You won!<br>");
      body.insertAdjacentHTML('beforeend', "You gained " + newxp + " xp.");
      document.cookie="xp=" + newxp;
      body.insertAdjacentHTML('beforeend', '<input type="BUTTon" value="Fight Again!" onClick="location.reload();"><br>');
      body.insertAdjacentHTML('beforeend', '<a href="Forest.html"><input type="BUTTon" value="Back to the Forest!"></a><br>');
      
      lose = false;
      keep = false;
    }
    if (hp <= 0 && lose) {
      body.insertAdjacentHTML('beforeend', "You died!<br>");
      body.insertAdjacentHTML('beforeend', '<input type="BUTTon" value="Fight Again!" onClick="location.reload();"><br>');
      body.insertAdjacentHTML('beforeend', '<a href="Forest.html"><input type="BUTTon" value="Back to the Forest!"></a><br>');
      keep = false;
    }
  }
}

function runaway() {
  var num3 = Math.round(Math.random());
  if (num3) {
    body.insertAdjacentHTML('beforeend', "You ran away!<br>");
    body.insertAdjacentHTML('beforeend', '<input type="BUTTon" value="Fight Again!" onClick="location.reload();"><br>');
    body.insertAdjacentHTML('beforeend', '<a href="Forest.html"><input type="BUTTon" value="Back to the Forest!"></a><br>');
  } else {
    body.insertAdjacentHTML('beforeend', "You failed to run away. You lost 1 hp<br>");
    hp -= 1;
  }
  if (hp <= 0) {
      body.insertAdjacentHTML('beforeend', "You died!<br>");
      body.insertAdjacentHTML('beforeend', '<input type="BUTTon" value="Fight Again!" onClick="location.reload();"><br>');
      keep = false;
  }
}

function auto(num4) {
  for (var i = 0; i < num4; i++) {
    attack();
  }
}

function automatic() {
  auto(prompt("How many rounds do you auto-attack?"));
}
