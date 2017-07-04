$(function(){
  //屏幕背景图铺满
  bg_repeat($('.main'));
  bg_repeat($('.main3'));
  bg_repeat($('.main2'));
  bg_repeat($('.screen'));

  //屏幕背景图铺满
  function bg_repeat(obj){
      obj.height($(window).height());
    $(window).resize(function(){
      obj.height($(window).height());
    });
  }

  //首页计数器
  for(var i=0;i<$('.count span').length;i++){
    $('.count span').eq(i).css({
      '-webkit-animation-delay':i*0.1+'s',
      'animation-delay':i*0.1+'s',
      '-moz-animation-delay':i*0.1+'s',
      '-o-animation-delay':i*0.1+'s'
    });
  }
  
  //预测点击
  $('.datelist ul li button').click(function(){
    $('.datelist ul li button').removeClass('active');
    $(this).addClass('active'); 
    $('.datelist ul li').removeClass('li_active');
    $(this).parent().addClass('li_active'); 
  })

  center_bg($('.close_main'));
  center_bg($('.get_prize_main'));
  //居中
  function center_bg(obj){
    obj.css('marginTop',($(window).height()-obj.height())/2);
    $(window).resize(function(){
      obj.css('marginTop',($(window).height()-obj.height())/2)
    });
  }

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
   var pageIndex = 1,
  pageTotal = $('.page').length,
  towards = { up:1, right:2, down:3, left:4},
  isAnimating = false;

//禁用手机默认的触屏滚动行为
document.addEventListener('touchmove',function(event){
  event.preventDefault(); },false);

$(document).swipeUp(function(){
  if (isAnimating) return;
  if (pageIndex < pageTotal) { 
    pageIndex+=1; 
  }else{
    pageIndex=1;
  };
  pageMove(towards.up);
})

$(document).swipeDown(function(){
  if (isAnimating) return;
  if (pageIndex > 1) { 
    pageIndex-=1; 
  }else{
    pageIndex=pageTotal;
  };
  pageMove(towards.down); 
})

function pageMove(tw){
  var lastPage;
  if(tw=='1'){
    if(pageIndex==1){
      lastPage = ".page-"+pageTotal;
    }else{
      lastPage = ".page-"+(pageIndex-1);
    }
    
  }else if(tw=='3'){
    if(pageIndex==pageTotal){
      lastPage = ".page-1";
    }else{
      lastPage = ".page-"+(pageIndex+1);
    }
    
  }

  var nowPage = ".page-"+pageIndex;
  
  switch(tw) {
    case towards.up:
      outClass = 'pt-page-moveToTop';
      inClass = 'pt-page-moveFromBottom';
      break;
    case towards.down:
      outClass = 'pt-page-moveToBottom';
      inClass = 'pt-page-moveFromTop';
      break;
  }
  isAnimating = true;
  $(nowPage).removeClass("hide");
  
  $(lastPage).addClass(outClass);
  $(nowPage).addClass(inClass);
  
  setTimeout(function(){
    $(lastPage).removeClass('page-current');
    $(lastPage).removeClass(outClass);
    $(lastPage).addClass("hide");
    $(lastPage).find("img").addClass("hide");
    
    $(nowPage).addClass('page-current');
    $(nowPage).removeClass(inClass);
    $(nowPage).find("img").removeClass("hide");
    
    isAnimating = false;
  },600);
}
})