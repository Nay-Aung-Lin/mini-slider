'use strict';

const images = Array.from(document.querySelectorAll(".img-container img"));
const preBtn = document.querySelector('.pre');
const nextBtn = document.querySelector('.next');
let index = 0;
preBtn.addEventListener("click",preImg);
nextBtn.addEventListener("click",nextImg);

function preImg(){
    images[index].classList.remove('active');

        if(index === 0){
            index = images.length -1;
            images[index].classList.add('active');
        }else{
            index--;
            images[index].classList.add('active');

        }
}

function nextImg(){
    images[index].classList.remove('active');
    if(index === images.length-1){
        index = 0;
        images[index].classList.add('active');

    }else{
         index++;
         images[index].classList.add('active');
    }
}