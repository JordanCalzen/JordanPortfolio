const minimizeBtn = document.querySelector(".minmizeBtn");
const heroLeft = document.querySelector(".hero-left");
const heroRight = document.querySelector(".hero-right");
const modeSwitch = document.querySelector(".modeSwitch");

// minimizeBtn.addEventListener("click", () => {
// 	heroLeft.classList.toggle("minimal");
// 	ReportBody.heroRight.style.paddingLeft = "5rem";
// });

// modeSwitch.addEventListener("click", () => {
// 	document.body.classList.toggle("dark-theme");
// });

// Check and apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
	document.body.classList.add("dark-theme");
	modeSwitch.innerHTML = `<i class='bx bx-moon bx-tada' ></i>`;
}

// Toggle theme and save preference
modeSwitch.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");

	// Save theme state
	if (document.body.classList.contains("dark-theme")) {
		localStorage.setItem("theme", "dark");
	} else {
		localStorage.setItem("theme", "light");
	}
});
