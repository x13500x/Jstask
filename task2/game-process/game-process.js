var killer=Number(sessionStorage.getItem("killer"));
var citizen=Number(sessionStorage.getItem("citizen"));
var player=Number(sessionStorage.getItem("player"));
//获取玩家人数
var player_order1=sessionStorage.getItem("player_order");//获取玩家序号数组，取出时是JSON字符串（string）类型
var player_order=JSON.parse(player_order1);//JSON字符串转换为数组对象
var playerLife = JSON.parse(sessionStorage.getItem("playerLife"));
var playerLeft = killer + citizen;
console.log(killer);
console.log(citizen);
console.log(playerLeft);
console.log(player);
console.log(player_order1);//此时显示的是字符串
console.log(player_order);//数组
console.log(playerLife);
function cancel() {
    if(confirm("确认退出该局游戏并回到游戏首页吗？")===true){
        sessionStorage.clear();
        window.location.href="homepage.html";
    }
}
//返回上一页
function back() {
    if(confirm("确认返回上一页吗？")===true){
        window.history.go(-1);
    }
}
//返回主页

$(function(){
    $(".day").click(function()
    {
        $(this).next().toggle();
    });
});

$(function () {
    $(".step1").click(function () {
        $(this).css("background-color","green");
        $(this).children().css("border-right-color","green");
        window.location.href = "kill.html";
    })
});

$(function() {
    $(".step2").click(function () {
        if(confirm("请死者亮明身份并且发表遗言")===true){
            $(this).css("background-color","green");
            $(this).children().css("border-right-color","green");
        }
    })
});
$(function () {
    $(".step3").click(function () {
        if(confirm("玩家依次发言讨论")===true){
            $(this).css("background-color","green");
            $(this).children().css("border-right-color","green");
        }
    })
});

$(function () {
    $(".step4").click(function () {
        $(this).css("background-color","green");
        $(this).children().css("border-right-color","green");
        window.location.href = "vote.html";
    })
});