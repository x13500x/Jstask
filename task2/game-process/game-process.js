var killer=sessionStorage.getItem("killer");
var citizen=sessionStorage.getItem("citizen");
var player=sessionStorage.getItem("player");
//获取玩家人数
var player_order1=sessionStorage.getItem("player_order");//获取玩家序号数组，取出时是JSON字符串（string）类型
var player_order=JSON.parse(player_order1);//JSON字符串转换为数组对象

console.log(killer);
console.log(citizen);
console.log(player);
console.log(player_order1);//此时显示的是字符串
console.log(player_order);//数组

function cancel() {
    if(confirm("确认退出吗？")===true){
        window.location.href="homepage.html";
    }
}
//返回上一页
function back() {
    if(confirm("确认退出吗？")===true){
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
        window.location.href = "task2-1-5.html";
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
        if(confirm("玩家依次发言讨论")===true){
            $(this).css("background-color","green");
            $(this).children().css("border-right-color","green");
        }
    })
});