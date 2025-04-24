const nav = document.querySelector(".nav");
const current = document.querySelector(".current");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
    current.style.color = "rgb(255, 109, 5)";
  } else {
    nav.classList.remove("active");
  }
}
