$('.share-btn').click(function(){
  $(this).addClass('clicked');
});

$('.close').click(function (e) {
  $('.clicked').removeClass('clicked')
  e.stopPropagation();
});

const audio = new Audio();
audio.src = "sounds/open.mp3";

const audio1 = new Audio();
audio1.src = "sounds/close.mp3";
