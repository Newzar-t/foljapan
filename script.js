import { animate, svg, stagger } from "animejs";

let logoSpan;

window.addEventListener("DOMContentLoaded", () => {
  homePage();

  animate(svg.createDrawable(".line"), {
    draw: ["0 0", "0 1", "1 1"],
    ease: "inOutQuad",
    duration: 2000,
    delay: stagger(100),
    loop: true,
  });
});

const homePage = () => {
  logoSpan = document.querySelector(".logo-container");

  logoSpan.style.animation = "fontchanging 1.2s ease-out";


};

class VideoContainer {
  constructor(link){
    link = this.link;
  }
}
