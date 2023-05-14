const closeBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
// queryselector all fot  iterate  all of them

const showModal = document.querySelectorAll(".child");
const overlay = document.querySelector(".overlay");
// to access all the  showModal we have  to  iterate  over them

// creation of  a seperate  code for repeated code
const hide = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const show = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", hide);
}

closeBtn.addEventListener("click", show);

overlay.addEventListener("click", show);

document.addEventListener("keydown", function (e) {
  //   if (e.key === "Escape") {
  //     if (!modal.classList.contains("hidden")) {
  //       show();
  //     }
  //   }

  //   better  way  to  write code
  // ? try  to achieve more  by writing less line   of code
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    show();
  }
});
// refactoring , restructing of code
// function expressions
// naming expressions is  important to improve redibility
// when any code repeated than than  create a function  of the code  and use  it
