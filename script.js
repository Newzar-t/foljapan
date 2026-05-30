import { animate, svg, stagger, splitText, split, createTimeline } from "animejs";

let logoSpan;
let sectionHome;
let videoHome;
let textintro;
let loadPage;

window.addEventListener("DOMContentLoaded", () => {
 homePage()
});

const homePage = () => {
  loadPage = document.querySelector(".load-page");
  loadPage.style.display = "none";
  logoSpan = document.querySelector("#logo");
  videoHome = document.querySelector("#videoHome");
  sectionHome = document.querySelector(".home")
  textintro = document.querySelector("#textIntro");
   
  
  
  logoSpan.style.animation = "fontchanging 1.2s linear infinite";

  videoHome.style.animation = "fading 1s ease-in-out"

  const { words} = splitText('#textIntro', {
    words : {wrap : 'clip'
    },
  })
  
  textintro.style.opacity = 0;

  setTimeout(()=> {
    textintro.style.opacity = 1;
    createTimeline({defaults : { ease: 'inOut(3)' , duration : 1000}})
  .add(words, 
    {
  y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
}, stagger(130))
.init()
  }, 700)
  
};

const animeBackground = () => {

  let bg = document.querySelector(".line");

  bg.style.display = "flex";

  animate(svg.createDrawable(".line"), {
    draw: ["0 0", "0 1", "1 1"],
    ease: "inOutQuad",
    duration: 2000,
    delay: stagger(100),
    loop: true,
  });
}



