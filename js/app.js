'user strict'
var profileApp = angular.module("profileApp",['ngAnimate']);
profileApp.run(function($animate){
  flash_animate = function(obj, times,delay){
    $(obj).delay(delay);
    for(var i = 0; i < times;i++)
      $(obj).animate({opacity:0},100).animate({opacity:1},100);
  }
  flash_animate("#head-nav button:contains(About)",3,0);
  flash_animate("#head-nav button:contains(Projects)",1,800);
  flash_animate("#head-nav button:contains(Contact)",2,350);
  function loop(){
    flash_animate("#about h1",2,6000);
    flash_animate("#projects h1",2,6000);
    flash_animate("#contact h1",2,6000);
    $(".content svg").animate({bottom: "1px"},500).animate({bottom: "10px"},500,function(){
      loop();
    });
  }
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
  loop();
});
