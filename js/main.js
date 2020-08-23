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

const socialmedia = document.querySelector("#social-media").firstElementChild;
const listworks = document.getElementById("social-media-works");
socialmedia.addEventListener("click", () => {
  if (listworks.style.display === "none") {
    listworks.style.display = "block";
  } else {
    listworks.style.display = "none";
  }
});

const branding = document.querySelector("#branding");
const brandlist = document.getElementById("branding-works");
branding.addEventListener("click", () => {
  if (brandlist.style.display == "none") {
    brandlist.style.display = "block";
  } else {
    brandlist.style.display = "none";
  }
});
