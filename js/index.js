$(document).ready(function(){

$('#middle').fadeIn(3000).delay(1600).fadeOut("slow");

// -------------------- SCROLLING BLUR --------------------

  $(function() {
     $(window).scroll(function () {
        if ($(this).scrollTop() < 500) {
          $('img,video').css('-webkit-filter','blur(40px)');
        }
        else if ($(this).scrollTop() < 1000) {
          $('img,video').css('-webkit-filter','blur(32px)');
        }
        else if ($(this).scrollTop() < 1500) {
          $('img,video').css('-webkit-filter','blur(24px)');
        }
        else if ($(this).scrollTop() < 2000) {
          $('img,video').css('-webkit-filter','blur(16px)');
        }
        else if ($(this).scrollTop() < 2500) {
          $('img,video').css('-webkit-filter','blur(8px)');
        }
        else if ($(this).scrollTop() < 3000) {
          $('img,video').css('-webkit-filter','blur(0px)');
        }
        else if ($(this).scrollTop() < 3500) {
          $('img,video').css('-webkit-filter','blur(8px)');
        }
        else if ($(this).scrollTop() < 4000) {
          $('img,video').css('-webkit-filter','blur(16px)');
        }
        else if ($(this).scrollTop() < 4500) {
          $('img,video').css('-webkit-filter','blur(24px)');
        }
        else if ($(this).scrollTop() < 5000) {
          $('img,video').css('-webkit-filter','blur(32px)');
          $('img,video').css('opacity','1');
          $('.title').css('opacity','0');
          $('#c1,#c2,#c3,#c4,#c5,#c6,#v1,#v2,#v3').css('opacity','0');
        }
        else if ($(this).scrollTop() > 5000){
          $('img,video').css('-webkit-filter','blur(40px)');
          $('img,video').css('opacity','0');
          $('.title').css('opacity','1');
          $('#c1,#c2,#c3,#c4,#c5,#c6,#v1,#v2,#v3').css('opacity','1');
          $('#c1,#c2,#c3,#c4,#c5,#c6,#v1,#v2,#v3').css('pointer-events','auto');
        }
        else {
          $('img,video').css('opacity','1');
        }
     });
  });


// MENU

var menuopen = true;
$('#m2,#m3,#m4,#m5,#m6').hide();

$('#plus').click(function(){
  menu();
});

function menu() {

  if (menuopen == true){
    $('#plus').html('-');
    $('#m2,#m3,#m4,#m5,#m6').show();
    menuopen = false;
  }

  else {
    $('#plus').html('+');
    $('#m2,#m3,#m4,#m5,#m6').hide();
    menuopen = true;
  }

};


$('#m6').click(function(){
  $('#projects,#chen,#menu,#plus').addClass('blur').delay(1000);
  $('#about-en,#about-ch,.about-buttons').css("display","block");
  $('#subscribe-container').css("display","none");
  $('#plus').html('+');
  $('#m2,#m3,#m4,#m5,#m6').hide();
  menuopen = true;
});

$('#close-blur').click(function(){
  $('#projects,#chen,#menu,#plus').removeClass('blur').delay(1000);
  $('#about-en,#about-ch,.about-buttons').css('display','none');
});


$('#m5').click(function(){
  $('#projects').addClass('blur').delay(1000);
  $('#blur-bg,#subscribe-container').css('display','block');
  $('#plus').html('+');
  $('#m2,#m3,#m4,#m5,#m6').hide();
  menuopen = true;
});

$('#blur-bg').click(function(){
  $('#projects').removeClass('blur').delay(1000);
  $('#blur-bg,#subscribe-container').css('display','none');
});




});
