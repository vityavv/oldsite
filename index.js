$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ["home", "blog", "about", "projects", "schoolsites"],
		menu: "#menu",
		sectionsColor: ["#1c1c1c", "#1c1c1c", "#1c1c1c", "#1c1c1c", "#1c1c1c"],
		scrollOverflow: true,
		//verticalCentered: false
	});
	let isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/); //from fullpage.js, if my pr never gets through (it probably won't)
	if (isTouchDevice) {
		document.querySelectorAll(".fp-controlArrow").forEach(element => {element.style.display = "none"});
		document.getElementById("vvv").display = "none";
	}
});
