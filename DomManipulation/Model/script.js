const moonPath =
  "M38 125C37.3272 197.622 89.7382 273 155 273C70.7802 272.22 0.313797 205.622 0.986629 133C1.65946 60.3777 45.7802 0.219719 130 1C130 7 38.6728 52.3777 38 125Z";

const sunPath =
  "M250 118C250 183.17 194.036 236 125 236C55.9644 236 0 183.17 0 118C0 52.8304 55.9644 0 125 0C194.036 0 250 52.8304 250 118Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

// we need to click on  the  sun

darkMode.addEventListener("click", () => {
  // we  need to use anime.js
  //  here we set up the timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  // add diffrenent animation to the timeline
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add({ targets: "#darkMode", rotate: 320 }, "-=320")
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgba(22,22,22)" : rgb(255, 255, 255),
      },
      "-=700"
    );

  // every time i click on the sun , i want the toggle  to switch
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
