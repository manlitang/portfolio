// RESPONSIVE NAVIGATION
// Credits to Dev Ed: https://www.youtube.com/watch?v=gXkqy0b4M5g
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '' 
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});

		burger.classList.toggle('close');
	});
}

// FUNCTIONS FOR DESKTOP
if (window.innerWidth >= 992) {
	// COLLECTION OF FUNCTIONS WHEN SCROLLING HAPPENS
	window.onscroll = function () {
		highlightAboutMe()
		highlightMySkills()
		highlightProjects()
		highlightContact()
	
		aboutMeAnimate()
		skillsAnimate()
	}

	window.onload = function() {
		document.getElementById("fadein-landing").style.opacity = 1;
	}
}

// HIGHLIGHT IN MENU WHEN VIEWING CURRENT SECTION
let aboutMe = document.getElementById("section-aboutme");
let scrolledAboutMe = aboutMe.offsetTop * 0.5;

function highlightAboutMe() {
	if (window.pageYOffset >= scrolledAboutMe && window.pageYOffset < scrolledMySkills) {
		document.getElementById("aboutme").className = "current";
	} else {
		document.getElementById("aboutme").className = "";
	}
}

let mySkills = document.getElementById("section-skills");
let scrolledMySkills = mySkills.offsetTop * 0.8;

function highlightMySkills() {
	if (window.pageYOffset >= scrolledMySkills && window.pageYOffset < scrolledProjects) {
		document.getElementById("myskills").className = "current";
	} else {
		document.getElementById("myskills").className = "";
	}
}

let projects = document.getElementById("section-projects");
let scrolledProjects = projects.offsetTop * 0.95;

function highlightProjects() {
	if (window.pageYOffset >= scrolledProjects && window.pageYOffset < scrolledContactMe) {
		document.getElementById("projects").className = "current";
	} else {
		document.getElementById("projects").className = "";
	}
}

let contactMe = document.getElementById("section-contact");
let scrolledContactMe = contactMe.offsetTop * 0.95;

function highlightContact() {
	if (window.pageYOffset >= scrolledContactMe || (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
		document.getElementById("contact").className = "current";
		document.getElementById("path1").classList.add("path1-animate");
		document.getElementById("path2").classList.add("path2-animate");
		document.getElementById("path3").classList.add("path3-animate");
	} else {
		document.getElementById("contact").className = "";
		document.getElementById("path1").className = "";
		document.getElementById("path2").className = "";
		document.getElementById("path3").className = "";
	}
}

// ANIMATIONS FOR CONTENT

let aboutMeAnimateExecuted = true;

function aboutMeAnimate() {
	if (aboutMeAnimateExecuted) {
		if (window.pageYOffset >= scrolledAboutMe && window.pageYOffset < scrolledMySkills) {
			document.getElementById("aboutme-headline").className = "animate-fadein";
			document.getElementById("aboutme-description").className = "animate-fadein-delay1";
			aboutMeAnimateExecuted = false;
  		} else {
			document.getElementById("aboutme-headline").className = "";
			document.getElementById("aboutme-description").className = "";
		}
	}
}

let skillsAnimateExecuted = true;

function skillsAnimate(){
	if (skillsAnimateExecuted) {
  		if (window.pageYOffset >= scrolledMySkills && window.pageYOffset < scrolledProjects) {
			document.getElementById("skill1").className = "animate-fadein";
			document.getElementById("skill2").className = "animate-fadein-delay1";
			document.getElementById("skill3").className = "animate-fadein-delay2";
			skillsAnimateExecuted = false;
  		} else {
			document.getElementById("skill1").className = "";
			document.getElementById("skill2").className = "";
			document.getElementById("skill3").className = "";
		}
  	}
}

window.onload = function() {
	navSlide();
	document.getElementById("fadein-landing").style.opacity = 1;
}

