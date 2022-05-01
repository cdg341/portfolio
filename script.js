const about = document.querySelector("a");
const skills = document.querySelector("a:nth-child(2)");
const projects = document.querySelector("a:nth-child(3)");
const contact = document.querySelector("a:nth-child(4)");
const toggle = document.querySelector("a:nth-child(5)");

//Functions to scroll when clicking on menu link
about.addEventListener("click", () => {
  document.querySelector("#about-section").scrollIntoView({ behavior: "smooth", block: "end" });
});
skills.addEventListener("click", () => {
  document.querySelector(".skills").scrollIntoView({ behavior: "smooth", block: "end" });
});
projects.addEventListener("click", () => {
  document.querySelector(".projects").scrollIntoView({ behavior: "smooth", block: "start" });
});
contact.addEventListener("click", () => {
  document.querySelector(".contact").scrollIntoView({ behavior: "smooth", block: "start" });
});
toggle.addEventListener("click", () => {
  document.querySelector(".menu").scrollIntoView({ behavior: "smooth" });
});

// ScrollFade
let fadeElements = document.getElementsByClassName("scrollFade");

function scrollFade() {
  let viewportBottom = window.scrollY + window.innerHeight;

  for (let index = 0; index < fadeElements.length; index++) {
    let element = fadeElements[index];
    let rect = element.getBoundingClientRect();

    let elementFourth = rect.height / 4;
    let fadeInPoint = window.innerHeight - elementFourth;
    let fadeOutPoint = -(rect.height / 2);

    if (rect.top <= fadeInPoint) {
      element.classList.add("scrollFade--visible");
      element.classList.add("scrollFade--animate");
      element.classList.remove("scrollFade--hidden");
    } else {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 375) {
    document.addEventListener("scroll", scrollFade);
    window.addEventListener("resize", scrollFade);
    document.addEventListener("DOMContentLoaded", function () {
      scrollFade();
    });
  }
});

//Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.querySelector(".menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
