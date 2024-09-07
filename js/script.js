var hamburger = document.getElementsByClassName("menu");
var menu = undefined;
var isCollapse = true;
var horizontalList = document.querySelectorAll(".horizontal-list li");
const sectionY = {
  "about-link": "about",
  "skills-link": "skills-section",
  "experience-link": "experience",
  "education-link": "education",
  "portfolio-link": "portfolio",
  "contact-link": "contact",
};

const projects = [
  {
    name: "Portfolio",
    link: "https://singhaditya3116.github.io/portfolio/",
    img: "./img/portfolio.png",
  },
  {
    name: "Buyspace",
    link: "http://bidspace.atwebpages.com/index.php",
    img: "./img/buyspace.png",
  },
  {
    name: "Restaurant",
    link: "https://singhaditya3116.github.io/Restaurant/",
    img: "./img/restaurant.png",
  },
  {
    name: "Xyst",
    link: "https://singhaditya3116.github.io/xyst/",
    img: "./img/xyst.png",
  },
  {
    name: "Todo List",
    link: "https://singhaditya3116.github.io/Todo-List/",
    img: "./img/todolist.png",
  },
  {
    name: "Tic Tac Toe",
    link: "https://singhaditya3116.github.io/Tic-Tac-Toe/",
    img: "./img/tictactoe.png",
  },
  {
    name: "Calculator",
    link: "https://singhaditya3116.github.io/Calculator/",
    img: "./img/calculator.png",
  },
  {
    name: "Infinite Scroll",
    link: "https://singhaditya3116.github.io/Infinite-Scroll/",
    img: "./img/infinite-scroll.png",
  },
  {
    name: "Music Player",
    link: "https://singhaditya3116.github.io/Music-Player",
    img: "./img/music-player.png",
  },
  {
    name: "NASA App",
    link: "https://singhaditya3116.github.io/Nasa-App/",
    img: "./img/nasa-app.png",
  },
  {
    name: "Paint Clone",
    link: "https://singhaditya3116.github.io/Paint-Clone/",
    img: "./img/paint-clone.png",
  },
  {
    name: "Quote Generator",
    link: "https://singhaditya3116.github.io/Quote-Generator/",
    img: "./img/quote-generator.png",
  },
  {
    name: "Splash Page",
    link: "https://singhaditya3116.github.io/Splash-Page/",
    img: "./img/splash-page.png",
  },
  {
    name: "Video Player",
    link: "https://singhaditya3116.github.io/Video-Player/",
    img: "./img/video-player.png",
  },
  {
    name: "Sign to Speech Converter",
    link: "./img/sign-to-speech.jpg",
    img: "./img/sign-to-speech.jpg",
  },
];

const allWorksSection = document.querySelector(".all-works");

function onClickHamburger() {
  hamburger[0].classList.toggle("cross");
  document.getElementsByTagName("nav")[0].classList.toggle("cross");
}

function handleResize() {
  if (window.innerWidth <= 768) {
    // To manage the hamburger appropriate behavior when the screen resolution changes.
    document.getElementsByTagName("nav")[0].classList.remove("cross");
    hamburger[0].classList.remove("cross");
  }
}

function goToTarget(event) {
  if (window.innerWidth < 768) {
    //clicking on menu item should do the changes and disappear
    onClickHamburger();
  }
  let targetId = sectionY[event.currentTarget.id];
  let start = window.scrollY;
  let target =
    document.getElementById(targetId).getBoundingClientRect().top - 100;
  console.log(targetId, start, target);
  // console.log(e.currentTarget.id,target,start);
  let targetTemporary = target;
  if (targetTemporary >= 0) {
    let scrollInterval = setInterval(() => {
      // console.log(start,target);
      if (targetTemporary <= 0) {
        clearInterval(scrollInterval);
      }
      start += 10;
      targetTemporary -= 10;
      window.scrollBy(0, 10);
    }, 0.1);
  } else {
    let currentYIndex = 0;
    let scrollInterval = setInterval(() => {
      // console.log(start,target);
      if (currentYIndex <= targetTemporary) {
        clearInterval(scrollInterval);
      }
      currentYIndex -= 10;
      window.scrollBy(0, -10);
    }, 0.1);
  }
}

hamburger[0].addEventListener("click", onClickHamburger);
window.addEventListener("resize", handleResize);
horizontalList.forEach((list) => {
  list.addEventListener("click", goToTarget);
});

//  Skill Bar Animation
var skillBars = document.querySelectorAll(".skill-percentage");
var skillContainer = document.querySelector(".all-skills");
//console.log(skillContainer);
var animationDone = false;

function initialSkillWidth() {
  for (let i = 0; i < skillBars.length; i++) {
    skillBars[i].style.width = 0 + "%";
  }
}

function fillSkillWidth() {
  for (let i = 0; i < skillBars.length; i++) {
    //console.log(i);
    let widthCountBuffer = 0;
    let interval = setInterval(function () {
      if (widthCountBuffer >= skillBars[i].getAttribute("data-bar-width")) {
        clearInterval(interval);
      }
      skillBars[i].style.width = widthCountBuffer + "%";
      widthCountBuffer += 1;
    }, 10);
  }
}

function setAnimation() {
  if (skillContainer.getBoundingClientRect().top > window.innerHeight) {
    //to do the animation again if scroll goes at top and comes to skill section
    animationDone = false;
  }
  if (
    skillContainer.getBoundingClientRect().top < window.innerHeight &&
    animationDone == false
  ) {
    //if skill is visible then only do the animation
    //console.log(true);
    initialSkillWidth();
    fillSkillWidth();
    animationDone = true;
  }
}

function createProjects() {
  projects.map((project) => {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("work");
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("work-view");

    const linkTag = document.createElement("a");
    linkTag.setAttribute("href", project.link);
    linkTag.setAttribute("target", "_blank");

    const imageTag = document.createElement("img");
    imageTag.setAttribute("src", project.img);
    linkTag.appendChild(imageTag);

    const headerName = document.createElement("h5");
    headerName.innerText = project.name;
    //console.log(innerDiv, linkTag);
    innerDiv.appendChild(linkTag);
    outerDiv.append(innerDiv, headerName);
    allWorksSection.appendChild(outerDiv);
  });
}
createProjects();

window.addEventListener("scroll", setAnimation);
