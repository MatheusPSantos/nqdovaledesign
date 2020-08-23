const x = document.querySelector("#close");
const menu = document.querySelector("#toogle");
const nav = document.querySelector(".navbar-items");

nav.classList.add("hidden");
x.classList.add("hidden");

menu.addEventListener("click", () => {
  nav.classList.remove("hidden");
  menu.classList.add("hidden");
  x.classList.remove("hidden");
});

x.addEventListener("click", () => {
  nav.classList.add("hidden");
  x.classList.add("hidden");
  menu.classList.remove("hidden");
});

const sourceImages = [
  {
    src: "/assets/img/lannawalcacer-story.png",
    legend: "story",
  },
];
