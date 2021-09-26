const welcome = document.querySelector('#welcome');

window.onload = () => {
	welcome.classList.add('active');
}

function closeWelcome(){
	welcome.classList.remove('active');
}

setTimeout('closeWelcome()',5000);

const nextBtn = document.querySelector('.next-btn');
		const prevBtn = document.querySelector('.prev-btn');
		const slides   = document.querySelectorAll('.slide');
		const slideIcons = document.querySelectorAll('.slide-icon');
		const numberOfSlides = slides.length;
		var slideNumber = 0;

		//image slider nextBtn
		nextBtn.addEventListener("click", function(){

			slides.forEach((slide) => {
				slide.classList.remove("active");
			});

			slideIcons.forEach((slideIcon) => {
				slideIcon.classList.remove("active");
			});

			slideNumber++;

			if (slideNumber > (numberOfSlides - 1)) {
             	slideNumber = 0;
			}

			slides[slideNumber].classList.add("active");
			slideIcons[slideNumber].classList.add("active");
		}); 

		//image slider prevBtn
		prevBtn.addEventListener("click", function(){
			slides.forEach((slide) => {
				slide.classList.remove("active");
			});

			slideIcons.forEach((slideIcon) => {
				slideIcon.classList.remove("active");
			});

			slideNumber--;

			if (slideNumber < 0) {
             	slideNumber = numberOfSlides - 1;
			}

			slides[slideNumber].classList.add("active");
			slideIcons[slideNumber].classList.add("active");
		});

		// image slider autoplay
		var playSlider;

		var repeater = () => {
			playSlider = setInterval(function(){
				slides.forEach((slide) => {
					slide.classList.remove("active");
				});

				slideIcons.forEach((slideIcon) => {
					slideIcon.classList.remove("active");
				});

				slideNumber++;

				if (slideNumber > (numberOfSlides - 1)) {
					slideNumber = 0;
				}

				slides[slideNumber].classList.add("active");
				slideIcons[slideNumber].classList.add("active");
			},6000);
		}

		repeater();

let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
	list[i].onclick = () => {
		let j = 0;
		while(j < list.length){
			list[j++].className = 'list';
		}
		list[i].className = 'list active';
	}
}

const shareBtn = document.querySelector('.share');
const socialMedia = document.querySelector('.social-media');

shareBtn.onclick = () => {
	socialMedia.classList.toggle('active');
}

const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menuBar = document.querySelector('.menu-bar');
const nav = document.querySelector('nav');
const titles = document.querySelectorAll('.list .title');

openMenu.onclick = () => {
	nav.classList.toggle('active');
	openMenu.classList.toggle('active');
	closeMenu.classList.toggle('active');
	titles.classList.toggle('active');
	menuBar.classList.toggle('active');
}

closeMenu.onclick = () => {
	nav.classList.toggle('active');
	closeMenu.classList.toggle('active');
	openMenu.classList.toggle('active');
	titles.classList.toggle('active');
	menuBar.classList.toggle('active');
}

