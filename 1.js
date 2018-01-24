$(function(f){
  var element = f('#header-block1');
  f(window).scroll(function(){
      element['fade'+ (f(this).scrollTop() < 400 ? 'In': 'Out')](100);
  });
});

function windowSize(){
  if ($(window).width() >= '1008'){
    $('#eye').show(10);
    $('#abstract').show(10);
  } else {
    $('#eye').hide(10);
    $('#abstract').hide(10);
  }
}
$(window).on('load resize',windowSize);
