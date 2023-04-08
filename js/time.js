var timerArr = []; //定时器
var currentDate = '';
var time = 0;
// 浏览器页面显示时初始化倒计时
document.addEventListener("visibilitychange", function() {
   if(!document.hidden){
      initNumber();
   }
});
$(function(){
      // 初始化倒计时
      initNumber();
    }
)
function initNumber(){
    var num = $('.number-content').find('.num');
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    //获取当前系统时间
    currentDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    var curtime = new Date(currentDate).getTime();
    num.each(function() {
          var _this = $(this);
          var dataTime = $(this).attr('data-time');
          var endTime = new Date(dataTime).getTime();
          time = (endTime - curtime) / 1000;
          setTimer(_this,time)
    });
}
function setTimer(_this,time){
  var timer = $(_this).attr('id');
  clearTimeout(timerArr[timer]);
  if(time > 0){
        timerArr[timer] = setTimeout(function() {
          setTimer(_this,time - 1);
        }, 1000)

        // 获取天、时、分、秒
        let day = parseInt(time / (60 * 60 * 24));
        let hour = parseInt(time % (60 * 60 * 24) / 3600);
        let minute = parseInt(time % (60 * 60 * 24) % 3600 / 60);
        let second = parseInt(time % (60 * 60 * 24) % 3600 % 60);
        if($(_this).find('.day').html() != day){
            $(_this).find('.day').html(day);
        }
        if($(_this).find('.hour').html() != hour){
            $(_this).find('.hour').html(hour);
        }
        if($(_this).find('.minute').html() != minute){
            $(_this).find('.minute').html(minute);
        }
        $(_this).find('.second').html(second);
  } else {
        $(_this).find('.day').html('0');
        $(_this).find('.hour').html('0');
        $(_this).find('.minute').html('0');
        $(_this).find('.second').html('0');
        clearTimeout(timerArr[timer]);
    }
}