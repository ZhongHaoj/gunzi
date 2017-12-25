/**
 * Created by asus on 2017/8/9.
 */
$(function(){
     $(".gameDialog").hide();//隐藏游戏说明
     $(".close").click(function(){//点击事件隐藏
          $(".gameDialog").hide();//隐藏游戏说明
     });
     $("#game-info").click(function(){//点击事件
          $(".gameDialog").show();//显示游戏说明
     });
});//加载函数的结束符