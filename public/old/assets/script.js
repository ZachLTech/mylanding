VanillaTilt.init(document.querySelectorAll(".social__links ul li"), {
	max: 10,
	speed: 800,
	glare: true,
	"max-glare": 1
});

function copyToClipboardDiscord() {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val("zachisnotmyname").select();
	document.execCommand("copy");
	$temp.remove();
		
	textSummary = document.getElementById("summary");
	textSummary.innerHTML = "Copied to Clipboard."

	setTimeout(function(){textSummary.innerHTML = ("I'm a freelance front-end web developer & software engineer")}, 1200);
}