function menuToggle() {
  document.getElementById("menu-toggle").classList.toggle("change");
  document.getElementById("nav-links").classList.toggle("hide");
  if (!isVisible(document.getElementById("nav-links"))) changeColors("white");
  else if (!isVisible(document.getElementById("home"))) changeColors("black");
}

function changeColors(color) {
  document.getElementById("logo-a").style.color = color;
  document.getElementById("bar1").style.background = color;
  document.getElementById("bar2").style.background = color;
}

function isVisible(element) {
  return element.getBoundingClientRect().bottom >= 50 &&
    element.getBoundingClientRect().right <= window.innerWidth;
}

window.onscroll = function() {
  if (!isVisible(document.getElementById("home")) && !isVisible(document.getElementById("nav-links"))) changeColors("black");
  else changeColors("white")
}

document.getElementById("logo-a").addEventListener("click", () => {
  if (isVisible(document.getElementById("nav-links"))) {
    document.getElementById("nav-links").classList.toggle("hide");
    document.getElementById("menu-toggle").classList.toggle("change");
  }
  if (!isVisible(document.getElementById("nav-links"))) changeColors("white");
  else if (!isVisible(document.getElementById("home"))) changeColors("black");
});
