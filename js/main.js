
var modal = document.getElementById("myModal");
var overlay = document.getElementById("myOverlay");
var popup = document.getElementById("popup");
var btn = document.getElementById("call_btn");
var popup_close = document.getElementById("popup_close");
var popup_send = document.getElementById("popup_send");
var menu = document.getElementById("burger");
var navigation = document.getElementById("navigation");
var menu_close = document.getElementById("navigation-close");
var fixed_menu = document.getElementById("fixed_menu");
var fixed_menu_call = document.getElementById("fixed_menu_call");
var prev = document.getElementById('btn-prev');
var next = document.getElementById('btn-next');
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.page');
var prev_mobile = document.getElementById('case_left');
var next_mobile = document.getElementById('case_right');
var slides_mobile = document.querySelectorAll('.mobile_slide');
var page0 = document.getElementById('page0');
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page = "0/0";
var phone_call = document.getElementById('phone_call');

btn.onclick = function () {
	overlay.style.display = "block";
	modal.style.display = "block";
	popup.style.display = "block";
}
phone_call.onclick = function () {
	overlay.style.display = "block";
	modal.style.display = "block";
	popup.style.display = "block";
}
popup_close.onclick = function () {
	popup.style.display = "none";
	modal.style.display = "none";
	overlay.style.display = "none";
}
popup_send.onclick = function () {
	popup.style.display = "none";
	modal.style.display = "none";
	overlay.style.display = "none";
}
menu.onclick = function () {
	overlay.style.display = "block";
	modal.style.display = "block";
	navigation.style.display = "block";
}
menu_close.onclick = function () {
	navigation.style.display = "none";
	modal.style.display = "none";
	overlay.style.display = "none";
}
fixed_menu.onclick = function () {
	overlay.style.display = "block";
	modal.style.display = "block";
	navigation.style.display = "block";
}
fixed_menu_call.onclick = function () {
	overlay.style.display = "block";
	modal.style.display = "block";
	popup.style.display = "block";
}
window.onclick = function (event) {
	if (event.target == modal) {
		overlay.style.display = "none";
		modal.style.display = "none";
		popup.style.display = "none";
		navigation.style.display = "none";
	}
}

let index = 0;
const activeSlide = n => {
	for (slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
	console.log(slides[n].dataset.type);
	document.getElementById("currentPage").innerHTML = slides[n].dataset.type;
}
const activeDot = n => {
	for (dot of dots) {
		dot.classList.remove('actived');
	}
	dots[n].classList.add('actived');
}
const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
}
const nextSlide = () => {
	if (index == slides.length - 1) {
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}
const prevSlide = () => {
	if (index == 0) {
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}

let index_mobile = 0;
const activeSlide_mobile = n => {
	for (slide_mobile of slides_mobile) {
		slide_mobile.classList.remove('select');
	}
	slides_mobile[n].classList.add('select');
	document.getElementById("currentPage_mobile").innerHTML = slides_mobile[n].dataset.type;
}
const prepareCurrentSlide_mobile = ind_mobile => {
	activeSlide_mobile(ind_mobile);
}
const nextSlide_mobile = () => {
	if (index_mobile == slides_mobile.length - 1) {
		index_mobile = 0;
		prepareCurrentSlide_mobile(index_mobile);
	} else {
		index_mobile++;
		prepareCurrentSlide_mobile(index_mobile);
	}
}
const prevSlide_mobile = () => {
	if (index_mobile == 0) {
		index_mobile = slides_mobile.length - 1;
		prepareCurrentSlide_mobile(index_mobile);
	} else {
		index_mobile--;
		prepareCurrentSlide_mobile(index_mobile);
	}
}
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
next_mobile.addEventListener('click', nextSlide_mobile);
prev_mobile.addEventListener('click', prevSlide_mobile);

page0.onclick = function () {
	prepareCurrentSlide(0);
}
page1.onclick = function () {
	prepareCurrentSlide(1);
}
page2.onclick = function () {
	prepareCurrentSlide(2);
}

$(function () {
	$("a.link_item, a.menu_item").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 1000);
		$('#navigation')
			.css('display', 'none')
		$('#myModal')
			.css('display', 'none')
		$('#myOverlay').fadeOut(1);
		return false;
	});
})





