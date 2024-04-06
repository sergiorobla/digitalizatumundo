const barsMenuButton = document.querySelector(".bars_menu");
const line1Bars = document.querySelector(".line1_bars-menu");
const line2Bars = document.querySelector(".line2_bars-menu");
const line3Bars = document.querySelector(".line3_bars-menu");
const containerMenu = document.querySelector(".menu-resp");

barsMenuButton.addEventListener("click", animateBars);

window.addEventListener("resize", function () {
  const mobileWidthLimit = 625;

  if (
    window.innerWidth > mobileWidthLimit &&
    containerMenu.classList.contains("activemenu")
  ) {
    animateBars();
  }
});

function animateBars() {
  line1Bars.classList.toggle("activeline1_bars-menu");
  line2Bars.classList.toggle("activeline2_bars-menu");
  line3Bars.classList.toggle("activeline3_bars-menu");
  containerMenu.classList.toggle("activemenu");
}
