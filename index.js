document.querySelector("body").addEventListener("click", handleClick);
document.querySelector("body").addEventListener("dblclick", handleDblClick);

let counter = 0;



const violets = document.querySelectorAll(".violet");
const greys = document.querySelectorAll(".grey");
const yellows = document.querySelectorAll(".yellow");
const pinks = document.querySelectorAll(".pink");

const violet = document.querySelector(".violet");
const grey = document.querySelector(".grey");
const yellow = document.querySelector(".yellow");
const pink = document.querySelector(".pink");



const violetStyle = getComputedStyle(violet);
const violetBack = violetStyle.backgroundColor;

const greytStyle = getComputedStyle(grey);
const greyBack = greytStyle.backgroundColor;

const yellowtStyle = getComputedStyle(yellow);
const yellowBack = yellowtStyle.backgroundColor;

const pinktStyle = getComputedStyle(pink);
const pinkBack = pinktStyle.backgroundColor;




function handleClick(){
    counter++;

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor4 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    violets.forEach((e)=> e.style.setProperty("background-color", randomColor));
    greys.forEach((e)=> e.style.setProperty("background-color", randomColor2));
    yellows.forEach((e)=> e.style.setProperty("background-color", randomColor3));
    pinks.forEach((e)=> e.style.setProperty("background-color", randomColor4));

    if(counter%2===0){
    violets.forEach((e)=> e.style.setProperty("animation", "mymove 5s"));   
    greys.forEach((e)=> e.style.setProperty("animation", "mymove 5s"));
    yellows.forEach((e)=> e.style.setProperty("animation", "mymove 5s"));
    pinks.forEach((e)=> e.style.setProperty("animation", "mymove 5s"));
    }else{
      violets.forEach((e)=> e.style.setProperty("animation", "mymove2 5s"));   
      greys.forEach((e)=> e.style.setProperty("animation", "mymove2 5s"));
      yellows.forEach((e)=> e.style.setProperty("animation", "mymove2 5s"));
      pinks.forEach((e)=> e.style.setProperty("animation", "mymove2 5s"));
    }
         
}



function handleDblClick(){
  violets.forEach((e)=> e.style.setProperty("background-color", violetBack));
  

  greys.forEach((e)=> e.style.setProperty("background-color", greyBack));
  yellows.forEach((e)=> e.style.setProperty("background-color", yellowBack));
  pinks.forEach((e)=> e.style.setProperty("background-color", pinkBack));

  
}

