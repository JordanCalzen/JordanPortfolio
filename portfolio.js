const minimizeBtn = document.querySelector(".minmizeBtn");
const heroLeft = document.querySelector(".hero-left");
const heroRight = document.querySelector(".hero-right");
const modeSwitch = document.querySelector(".modeSwitch");
console.log(modeSwitch);

minimizeBtn.addEventListener("click", () => {
	heroLeft.classList.toggle("minimal");
	ReportBody.heroRight.style.paddingLeft = "5rem";
});
