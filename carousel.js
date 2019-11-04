// JavaScript for a Carousel Div for the KHS Band Page

const carousel = document.getElementById("carousel")

/* // Moving ads stuff
const img1 = document.getElementById('ad1-image');
const img2 = document.getElementById('ad2-image');
const img3 = document.getElementById('ad3-image');
var images = [img1, img2, img3];
var position = ["-45%", "35%", "100%"];
var current = 1;

function changeSlide() {
    if (current > 2) {
        current = 0;
    }
    
    let temp = current;
    for (let i = 0; i < 3; i++) {
        if (current > 2) {
            current = 0;
        }
        
        if (i == 0) {
            images[current].style.visibility='hidden';
        }
        else if (i == 1) {
            images[current].style.visibility='visible';
        }
        
        images[current].style.top = position[i];
        
        current++;
    }
    current = temp;
    
    current++;
}

setInterval(changeSlide, 7500); */