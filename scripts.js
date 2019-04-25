window.onscroll = function() {funcProg()};

function funcProg() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	if(winScroll > 0) document.getElementsByTagName("header").item(0).classList.add('header2');
	else document.getElementsByTagName("header").item(0).classList.remove('header2');

	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	var barra = document.getElementById("progbar");
	if(barra)barra.style.width = scrolled + "%";
}