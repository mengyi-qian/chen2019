$(document).ready(function(){


// -------------------- MENU --------------------

// var menuopen = true;
// $('#m2').hide();
// $('#m3').hide();
// $('#m4').hide();
// $('#m5').hide();
//
// $('#plus').click(function(){
//   menu();
// });
//
// function menu() {
//
//   if (menuopen == true){
//     $('#plus').html('-');
//     $('#m2').show();
//     $('#m3').show();
//     $('#m4').show();
//     $('#m5').show();
//     menuopen = false;
//   }
//
//   else {
//     $('#plus').html('+');
//     $('#m2').hide();
//     $('#m3').hide();
//     $('#m4').hide();
//     $('#m5').hide();
//     menuopen = true;
//   }
//
// };


// -------------------- CONTAINER --------------------


$('#buy-book,#buy-book-blur').click(function(){
  $('#buy-book-blur').css("-webkit-filter","blur(40px)");
  $('#project-info-blur').css("-webkit-filter","blur(0px)");
  $('#book-container').css("display","block");
  $('#info-container').css("display","none");
  $('#gallery').css('-webkit-filter','blur(40px)').delay(1000);
  $('#blur-bg').css("display","block");
});

$('#project-info,#project-info-blur').click(function(){
  $('#project-info-blur').css("-webkit-filter","blur(40px)");
  $('#buy-book-blur').css("-webkit-filter","blur(0px)");
  $('#info-container').css("display","block");
  $('#book-container').css("display","none");
  $('#gallery,#video-frame').css('-webkit-filter','blur(40px)').delay(1000);
  $('#blur-bg').css("display","block");
});

$('#blur-bg').click(function(){
  $('#blur-bg').css("display","none");
  $('#buy-book-blur,#project-info-blur').css("-webkit-filter","blur(0px)");
  $('#book-container,#info-container').css("display","none");
  $('#gallery,#video-frame').css('-webkit-filter','blur(0px)').delay(1000);
});


// -------------------- TITLE --------------------



  $(".bottom").hover(function(){
     $("#en").css("display","none");
     $("#ch").css("display","block")
     }, function(){
     $("#en").css("display","block");
     $("#ch").css("display","none")
   });





// -------------------- SLIDE --------------------

var slideIndex = 1;
showSlides(slideIndex);

$('#left').click(function(){
  plusSlides(-1);
});

$('#right').click(function(){
  plusSlides(1);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("SlideImg");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}






});
