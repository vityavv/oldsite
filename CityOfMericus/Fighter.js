var hp = 30, op_hp, keep, body = document.getElementById("fighter"), names = ["a Bugbear", "a Duck", "a Lemonade Stand Man", "-42", "Jick the KoL Creator", "a Squirrel"], num, gold = 0; //for name

function newpage(page) {
	document.getElementById("Fighter").style.display = "none";
	document.getElementById("Home").style.display = "none";
	document.getElementById("Healing").style.display = "none";
	document.getElementById("intro").style.display = "none"; //no more intro for experienced peeps
	document.getElementById("normal").style.display = "block";
	document.getElementById(page).style.display = "block";
	var displays = document.getElementsByClassName("display");
	for (var i = 0; i < displays.length; i++) {
		displays[i].innerHTML = "You have " + hp + " hp and " + gold + " gold.";
	}
	if (page == "Fighter") {
		fight();
	}
}

function heal() {
	amnt = parseInt(prompt("You come up to the salesman. He inspects you, and says that you have " + hp + " hp. Then he tells you \"The more you get, the more you will be healed. 2 hp cost 1 gold. How much you wanna buy?\""));
	console.log(hp + amnt);
	if (hp + amnt <= 30) {
		if (amnt/2 <= gold) {//responses
			alert('The salesman goes under the tabe for a couple of seconds and you hear the clang of a couple bottles. "Here," he says, giving you the bottle. "This will heal you up to a full ' + (hp + amnt) + ' hp." You drink the potion, and feel a lot better, as you see your wounds clear up.');
			gold -= (amnt/2);
			hp += amnt;
			var displays = document.getElementsByClassName("display");
			for (var i = 0; i < displays.length; i++) {
				displays[i].innerHTML = "You have " + hp + " hp and " + gold + " gold.";
			}
		} else {
			alert('"Hey! You don\'t have enough gold!" says the salesman');
		}
	} else {
		alert('"That much of a dose could kill you. Maybe something lower?"');
	}
}

function fight() {
	num = Math.round(Math.random() * names.length) - 1;
	body.innerHTML = "You are fighting " + names[num] + "<br><br>";
	op_hp = 33;
	keep = true;
}
function attack() {
  var num2 = Math.round(Math.random() * 3) + 1;
  var win = false;
  var lose = true;//make false if win.
  if (keep) {
    op_hp -= num2;
    body.insertAdjacentHTML('beforeend', "You hit " + names[num] + " for " + num2 + " damage.<br>");
    
    if (op_hp <= 0) {win = true;}
    
    if (!win) {
      num2 = Math.round(Math.random() * 2) + 1; //redo for op
      hp -= num2;
      body.insertAdjacentHTML('beforeend', names[num] + " hit you for " + num2 + " damage.<br>");
    }
    
    if (hp < 0) {hp = 0}
    if (op_hp < 0) {op_hp= 0;}
    
    body.insertAdjacentHTML('beforeend', names[num] + " has " + op_hp + ", and you have " + hp + " hp.<br><br>");
    
    if (win) {
      body.insertAdjacentHTML('beforeend', "You won!<br>");
			var goldwon = Math.round(Math.random() * 5) + 10;
			gold += goldwon;
			body.insertAdjacentHTML('beforeend', 'After selling your furs to the king, you got ' + goldwon + ' gold, giving you ' + gold + ' gold in all<br>');
      body.insertAdjacentHTML('beforeend', '<input type="BUTTon" value="Fight Again!" onClick="fight();"><br>');
    	body.insertAdjacentHTML('beforeend', '<input type="BUTTon" value="Back to your home." onClick="newpage(\'Home\');"><br>');
      
      lose = false;
      keep = false;
    }
    if (hp <= 0 && lose) {
      body.insertAdjacentHTML('beforeend', "You died!<br>");
      body.insertAdjacentHTML('beforeend', '<input type="BUTTon" value="Back to your home." onClick="newpage(\'Home\');"><br>');
      keep = false;
    }
  }
}

function runaway() {
	if (keep) {
	  var num3 = Math.round(Math.random());
  	if (num3) {
	    body.insertAdjacentHTML('beforeend', "You ran away!<br>");
	    body.insertAdjacentHTML('beforeend', '<input type="BUTTon" value="Fight Again!" onClick="fight();"><br>');
	    body.insertAdjacentHTML('beforeend', '<input type="BUTTon" value="Back to your home." onClick="newpage(\'Home\');"><br>');
		  keep = false;
	  } else {
	    body.insertAdjacentHTML('beforeend', "You failed to run away. You lost 1 hp<br>");
	    hp -= 1;
	  }
	  if (hp <= 0) {
	      body.insertAdjacentHTML('beforeend', "You died!<br>");
	      body.insertAdjacentHTML('beforeend', '<input type="BUTTon" value="Back your home." onClick="newpage(\'Home\');"><br>');
	      keep = false;
	  }
	}
}
function auto() {
	var j = parseInt(prompt("How many rounds do you auto-attack?"));
	for (var i = 0; i < j; i++) {
		attack();
	}
}