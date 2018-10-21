function cancel() {
    if(confirm("确认退出吗？")===true){
        window.location.href="task13-1.html";
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