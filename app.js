
const porfolioImg = document.querySelector('.img-main img');
count = 0;

var i = 0;
var path = new Array;

path[0] = "./project1.png"
path[1] = "./snappysoap.png"
path[2] = "./sunnyside.png"
console.log(path.length);
function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1) {
       i++;
    } else { i = 0;}

   setTimeout("swapImage()", 5000);
}

window.onload=swapImage;