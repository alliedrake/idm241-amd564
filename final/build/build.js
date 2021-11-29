let openFlag = false;

$('.sharebtn').click(function(){
  $(this).addClass('clicked');

  if (openFlag == false) {
    audio1.play();
    openFlag = true;
  }
  closeFlag = false;
  
});


let closeFlag = false;

$('.close').click(function (e) {
  $('.clicked').removeClass('clicked')
  e.stopPropagation();

  if(closeFlag == false) {
    audio2.play();
    closeFlag = true;
  }

  openFlag = false;
});


const audio1 = new Audio();
audio1.src = "sounds/open.mp3";

const audio2 = new Audio();
audio2.src = "sounds/close.mp3";




