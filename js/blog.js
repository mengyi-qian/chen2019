$(document).ready(function(){


// QUESTION

$('#list').css('pointer-events','none');

$('#enter-blur').click(function(){
  $('#list,.top').css('-webkit-filter','blur(0px)');
  $('#list,.top').css('pointer-events','auto');
  $('#question-container').css('display','none');
});

$('#clear-blur').click(function(){
  $('hr').css('display','none');
  $('#media-1,#media-2,#media-3,#media-4,#text-1,#text-2,#text-3').css('display','none');
});



$('li a').hover(function(){
  $(this).find('.hover').css('display','block');
  }, function(){
  $(this).find('.hover').css('display','none')
});




$('li a').click(function(){
  $(this).find('.click').css('display','block');
   // $(this).siblings('.blog-container').css('display','block');
});

$('#a01,#b01,#c01,#d01,#e01,#f01,#g01,#h01').click(function(){
  $('#media-1,#media-2,#media-3,#media-4,#text-1,#text-2,#text-3').css('display','none');
  $('#media-1').css('display','block');
});

$('#a02,#b02,#c02,#d02,#e02,#f02,#g02,#h02').click(function(){
  $('#media-1,#media-2,#media-3,#media-4,#text-1,#text-2,#text-3').css('display','none');
  $('#text-1').css('display','block');
});

$('#a03,#b03,#c03,#d03,#e03,#f03,#g03,#h03').click(function(){
  $('#media-1,#media-2,#media-3,#media-4,#text-1,#text-2,#text-3').css('display','none');
  $('#media-4').css('display','block');
});

$('#a04,#b04,#c04,#d04,#e04,#f04,#g04').click(function(){
  $('#media-1,#media-2,#media-3,#media-4,#text-1,#text-2,#text-3').css('display','none');
  $('#text-2').css('display','block');
});

$('#a05,#b05,#c05,#d05,#e05,#f05,#g05').click(function(){
  $('#media-1,#media-2,#media-3,#media-4,#text-1,#text-2,#text-3').css('display','none');
  $('#media-2').css('display','block');
});

$('#a06,#b06,#c06,#d06,#e06,#f06,#g06').click(function(){
  $('#media-1,#media-2,#media-3,#media-4,#text-1,#text-2,#text-3').css('display','none');
  $('#text-3').css('display','block');
});

$('#a07,#b07,#c07,#d07,#e07,#f07,#g07').click(function(){
  $('#media-1,#media-2,#media-3,#media-4,#text-1,#text-2,#text-3').css('display','none');
  $('#media-3').css('display','block');
});





});
