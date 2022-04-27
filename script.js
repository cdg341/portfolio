const about = document.querySelector("a");
const skills = document.querySelector("a:nth-child(2)");
const projects = document.querySelector("a:nth-child(3)");
/* const element = document.getElementById("skills");

function scrollToTop() {
  element.scrollIntoView({ behavior: "smooth" });
}

about.addEventListener("click", scrollToTop); */

about.addEventListener("click", () => {
  document.querySelector(".section-1").scrollIntoView({ behavior: "smooth", block: "end" });
});
skills.addEventListener("click", () => {
  document.querySelector(".skills").scrollIntoView({ behavior: "smooth" });
});
projects.addEventListener("click", () => {
  document.querySelector(".projects").scrollIntoView({ behavior: "smooth" });
});
