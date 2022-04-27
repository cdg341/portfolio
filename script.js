const about = document.querySelector("a");
const skills = document.querySelector("a:nth-child(2)");
const projects = document.querySelector("a:nth-child(3)");
const contact = document.querySelector("a:nth-child(4)");

//Functions to scroll when clicking on menu link
about.addEventListener("click", () => {
  document.querySelector(".section-1").scrollIntoView({ behavior: "smooth", block: "end" });
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
