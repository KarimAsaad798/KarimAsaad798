var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
function Gradient (){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")"; }

    color1.addEventListener("input", Gradient);
    color2.addEventListener("input", Gradient);
    



