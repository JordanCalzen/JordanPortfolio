const minimizeBtn = document.querySelector(".minmizeBtn");
console.log(minimizeBtn);
const heroLeft = document.querySelector(".hero-left");
const heroRight = document.querySelector(".hero-right");

minimizeBtn.addEventListener("click", () => {
	heroLeft.classList.toggle("minimal");
	ReportBody.heroRight.style.paddingLeft = "5rem";
});
