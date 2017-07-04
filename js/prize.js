$(function(){
  //屏幕背景图铺满
  $('.main2').height($(window).height());
  $(window).resize(function(){
    $('.main2').height($(window).height());
  });
  //弹出层
  $('.screen').height($(window).height());
  $(window).resize(function(){
    $('.screen').height($(window).height());
  });
  $('.close_main').css('marginTop',($(window).height()-$('.close_main').height())/2);
  $(window).resize(function(){
    $('.close_main').css('marginTop',($(window).height()-$('.close_main').height())/2)
  });
  $('.get_prize_main').css('marginTop',($(window).height()-$('.get_prize_main').height())/2);
  $(window).resize(function(){
    $('.get_prize_main').css('marginTop',($(window).height()-$('.get_prize_main').height())/2)
  });
  //倒计时
  var needDate = new Date(2017,06,29).getTime();//获取自定日期毫秒数
  var todayDate = new Date().getTime();//获取今日毫秒数
  var intDiff=parseInt(needDate-todayDate/1000);
  function timer(intDiff){
      window.setInterval(function(){
      var day=0,
          hour=0,
          minute=0,
          second=0,//时间默认值
          hour1=0,
          hour2=0,
          minute1=0,
          minute2=0,        
          second1=0,
          second2=0;
      if(intDiff > 0){
          day = Math.floor(intDiff / (60 * 60 * 24));
          hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
          minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
          second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
      }

      if(hour<=9){
        hour1=0;
        hour2=hour;
      }else{
        hour1=parseInt(hour/10);
        hour2=hour%10;
      }
      if(minute<=9){
        minute1=0;
        minute2=minute;
      }else{
        minute1=parseInt(minute/10);
        minute2=minute%10;
      }
      if(second<=9){
        second1=0;
        second2=second;
      }else{
        second1=parseInt(second/10);
        second2=second%10;
      }
      $('.count_down_main span').eq(0).html(hour1);
      $('.count_down_main span').eq(1).html(hour2);
      $('.count_down_main span').eq(2).html(minute1);
      $('.count_down_main span').eq(3).html(minute2);
      $('.count_down_main span').eq(4).html(second1);
      $('.count_down_main span').eq(5).html(second2);
      intDiff--;
      }, 1000);
    }
  timer(intDiff);
  //砸金蛋
  var num=3;
  $('.today_count span').html(num+'次');
  $('.break_egg li').click(function(){
    $('.break').hide();
    if(num>0){
      $(this).find('img').attr('src','images/egg_break.jpg');
      $('.others').css('-webkit-animation','mybreak 0.1s').show('100', function() {
        $('#get_prize_main').show();
      });;
    }else{
      $('#no_egg_main').show();
    } 
    if(num>0){
      num--;
    }
    $('.today_count span').html(num+'次');
  })
  //关闭弹窗
  $('.close_btn').click(function() {
    $('.screen').hide();
    $('.break_egg li img').attr('src','images/egg.jpg');
    $('.others').hide();
    $('.break').show();
  });
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
        //window.location.href="predict.html";
        break;
      case 2:
        //window.location.href="index.html";
        break;
      case 3:
        break;
      case 4:
        break;
      default:           
    }  
  }, false);
})