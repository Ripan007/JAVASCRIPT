let container = document.querySelector(".container");
let button = document.querySelector("button");

container.addEventListener("mouseenter", function () {
  button.style.background = "white";
  button.style.color = "orange";
  button.style.zIndex = 1;
});

container.addEventListener("mouseleave", function () {
  document.querySelector("body").style.background = "white";
  button.style.background = "orange";
  button.style.color = "white";
  button.style.zIndex = 1;
});

pt;
