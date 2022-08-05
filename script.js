var hamburger = document.getElementsByClassName("menu");
var menu = undefined;
var isCollapse = true;
var education = document.getElementById("experience-link");
const sectionY ={
  "about-link":400,
  "skills-link":950,
  "experience-link":1300,
  "education-link":1700,
  "portfolio-link":2500,
  "contact-link":2550
}

var horizontalList = document.querySelectorAll(".horizontal-list li");

function onClickHamburger(){

  hamburger[0].classList.toggle("cross");
  document.getElementsByTagName("nav")[0].classList.toggle("cross");
}

function handleResize()
{
  if(window.innerWidth <= 768)
  {
    document.getElementsByTagName("nav")[0].classList.remove("cross");
  }
}

function goToTarget(e)
{
  let temp = e.currentTarget.id;
  let target = sectionY[temp];
  let start = window.scrollY;

  // console.log(e.currentTarget.id,target,start);
  if(target-start >=0 )
  {
    let scrollInterval = setInterval(()=>{
      // console.log(start,target);
      if(start >= target)
      {
        clearInterval(scrollInterval);
      }
      start+=50;
      window.scrollBy(0,50);
    },30)
  }
  else
  {
    let scrollInterval = setInterval(()=>{
      // console.log(start,target);
      if(start <= target)
      {
        clearInterval(scrollInterval);
      }
      start-=50;
      window.scrollBy(0,-50);
    },30)
  }
}

hamburger[0].addEventListener('click',onClickHamburger);
window.addEventListener('resize',handleResize);
// education.addEventListener('click',goToTarget);
horizontalList.forEach((list) => {
  list.addEventListener('click',goToTarget);
}) 
