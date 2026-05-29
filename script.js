import { animate, svg, stagger, splitText, split, createTimeline } from "animejs";

let logoSpan;
let videoHome;
let textintro;

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

  logoSpan = document.querySelector("#logo");
  videoHome = document.querySelector("#videoHome");
  textintro = document.querySelector("#textIntro");

  logoSpan.style.animation = "fontchanging 1.2s linear infinite";

  const { words} = splitText('#textIntro', {
    words : {wrap : 'clip'
    },
  })
  
  textintro.style.opacity = 0;

  setTimeout(()=> {
    textintro.style.opacity = 1;
    createTimeline({defaults : { ease: 'inOut(3)' , duration : 600}})
  .add(words, 
    {
  y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
}, stagger(130))
.init()
  }, 700)
  
};



