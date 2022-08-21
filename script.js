var hamburger = document.getElementsByClassName("menu");
var menu = undefined;
var isCollapse = true;
var education = document.getElementById("experience-link");
var horizontalList = document.querySelectorAll(".horizontal-list li");
const sectionY ={
  "about-link":'about',
  "skills-link":'skills-section',
  "experience-link":"experience",
  "education-link":"education",
  "portfolio-link":"portfolio",
  "contact-link":"contact"
}

function onClickHamburger(){

  hamburger[0].classList.toggle("cross");
  document.getElementsByTagName("nav")[0].classList.toggle("cross");
}

function handleResize()
{
  if(window.innerWidth <= 768)  // To manage the hamburger appropriate behavior when the screen resolution changes.
  {
    document.getElementsByTagName("nav")[0].classList.remove("cross");
    hamburger[0].classList.remove("cross");
  }
}

function goToTarget(event)
{
  let targetId = sectionY[event.currentTarget.id];
  let start = window.scrollY;
  let target = document.getElementById(targetId).getBoundingClientRect().top - 100 ;
  console.log(targetId,start,target);
  // console.log(e.currentTarget.id,target,start);
  let targetTemporary = target;
  if(targetTemporary >=0)
  {
    let scrollInterval = setInterval(()=>{
      // console.log(start,target);
      if(targetTemporary<=0)
      {
        clearInterval(scrollInterval);
      }
      start+=10;
      targetTemporary-=10;
      window.scrollBy(0,10);
    },0.1)
  }
  else
  {
    let currentYIndex = 0;
    let scrollInterval = setInterval(()=>{
      // console.log(start,target);
      if(currentYIndex<=targetTemporary)
      {
        clearInterval(scrollInterval);
      }
      currentYIndex-=10;
      window.scrollBy(0,-10);
    },0.1)
  }
}

hamburger[0].addEventListener('click',onClickHamburger);
window.addEventListener('resize',handleResize);
// education.addEventListener('click',goToTarget);
horizontalList.forEach((list) => {
  list.addEventListener('click',goToTarget);
}) 

//  Skill Bar Animation
var skillBars = document.querySelectorAll(".skill-percentage");
var skillContainer = document.querySelector(".all-skills");
//console.log(skillContainer);
var animationDone = false;

function initialSkillWidth(){
  for(let i=0;i<skillBars.length;i++){
    skillBars[i].style.width = 0 + "%";
  }
}

function fillSkillWidth(){
  for(let i=0;i<skillBars.length;i++){
    //console.log(i);
    let widthCountBuffer=0;
    let interval = setInterval(function(){
      if(widthCountBuffer >= skillBars[i].getAttribute("data-bar-width")){
        clearInterval(interval);
      }
      skillBars[i].style.width=widthCountBuffer+"%";
      widthCountBuffer+=1;
    },10)
  }
}


function setAnimation(){
  if(skillContainer.getBoundingClientRect().top > window.innerHeight) //to do the animation again if scroll goes at top and comes to skill section
  {
    animationDone=false;
  }
  if(skillContainer.getBoundingClientRect().top < window.innerHeight && animationDone == false){  //if skill is visible then only do the animation
      //console.log(true);
      initialSkillWidth();
      fillSkillWidth();
      animationDone=true;
  }
}


window.addEventListener("scroll",setAnimation);