var array = [];
var body = document.body, tbl = document.createElement("table");
tbl.style.border = "1px solid black";
tbl.style.borderCollapse = "collapse";
tbl.setAttribute("border", "1px");
tbl.style.margin = "0px";
tbl.setAttribute("onClick", "color(event)");
var id = 1;
for (var j = 0; j < 17; j++) {
	var row = tbl.insertRow();
	row.setAttribute("id", id.toString());
	id++;
	for (var ij = 0; ij < 106; ij++) {
		var cell = row.insertCell();
		cell.style.width = "12px";
		cell.style.height = "12px";
	}
}
body.appendChild(tbl);


function color(event) {
	if (event.target.style.background == "black") {
			event.target.style.background = "white"
	} else {
		event.target.style.background = "black";
	}
}

function calculate() {
	for (var w = 0; w < 106; w++) {
		for (var q = 17; q > 0; q--) {
			if (document.getElementById(q.toString()).childNodes[w].style.background == "black") {
				array.push("1");
			} else {
				array.push("0");
			}
		}
	}
	var string;
	for (var e = 0; e < array.length; e++) {
		string += array[e];
	}
	alert(string);
	console.log(string);
	document.body.innerHTML += "<br><br>" + string;
}
