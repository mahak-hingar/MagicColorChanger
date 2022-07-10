const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const  orange= document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");
//console.log(window.getComputedStyle(red).backgroundColor);
const getBGColor = (selectedelement) => {
    return window.getComputedStyle(selectedelement).backgroundColor;
};
//var orangeElementColor=getBGColor(orange);
//orange.addEventListener('click',() =>{
//    center.style.background = orangeElementColor;
//})
//var cyanElementColor=getBGColor(cyan);
//cyan.addEventListener('mouseenter',() =>{
//    center.style.background = cyanElementColor;
//})
//var redElementColor=getBGColor(red);
//
//red.addEventListener('mouseenter',() =>{
//    center.style.background = redElementColor;
//})
//
//var violetElementColor=getBGColor(violet);
//violet.addEventListener('mouseenter',() =>{
//    center.style.background = violetElementColor;
//});
//
//var pinkElementColor=getBGColor(pink);
//orange.addEventListener('mouseenter',() =>{
//    center.style.background = pinkElementColor;
//});
const magicColorChanger = (element,color) => {
  return  element.addEventListener("mouseenter",() =>{
        center.style.background = color;
    });

};
magicColorChanger(red,getBGColor(red));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(pink,getBGColor(pink));