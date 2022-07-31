var hamburger = document.getElementsByClassName("menu");
var menu = undefined;
var isCollapse = true;



function onClickHamburger(){

  hamburger[0].classList.toggle("cross");
  document.getElementsByTagName("nav")[0].classList.toggle("cross");

  // console.log("Hello world");
  // menu = document.querySelector('.horizontal-list');
  // // console.log(menu);
  // if(isCollapse == true){
  //   menu.style.display = "flex";
  //   menu.style.flexDirection="column";
  //   isCollapse=false;
  // }else{
  //   menu.style.display="none";
  //   // menu.style.flexDirection="row";
  //   isCollapse=true;
  // }
}

function handleResize()
{
  if(window.innerWidth <= 768)
  {
    document.getElementsByTagName("nav")[0].classList.remove("cross");
  }
}

hamburger[0].addEventListener('click',onClickHamburger);
window.addEventListener('resize',handleResize);