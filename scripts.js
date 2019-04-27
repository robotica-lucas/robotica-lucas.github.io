window.onscroll = function() {funcProg()};

function funcProg() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	if(winScroll > 0) document.getElementsByTagName("header").item(0).classList.add('header2');
	else document.getElementsByTagName("header").item(0).classList.remove('header2');
}