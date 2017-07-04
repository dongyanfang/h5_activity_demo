$(function(){
	$(".main").height($(window).height());
	$(window).resize(function(){
		$(".main").height($(window).height());
	})
	$('.datelist ul li button').click(function(){
		$('.datelist ul li button').removeClass('active');
		$(this).addClass('active');	
		$('.datelist ul li').removeClass('li_active');
		$(this).parent().addClass('li_active');	
	})
 //滑动处理
    var startX, startY;
    document.addEventListener('touchstart', function (ev){
      startX = ev.touches[0].pageX;
      startY = ev.touches[0].pageY;  
    }, false);

    document.addEventListener('touchmove', function (ev){
      var endX, endY;
      endX = ev.changedTouches[0].pageX;
      endY = ev.changedTouches[0].pageY;

    var direction = GetSlideDirection(startX, startY, endX, endY);
    switch (direction){
      case 0:
        break;
      case 1: 
        break;
      case 2:
        window.location.href="prize.html";
        break;
      case 3:
        break;
      case 4:
        break;
      default:           
    }  
  }, false);
});