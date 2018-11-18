var playerLife = JSON.parse(sessionStorage.getItem("playerLife"));
console.log("玩家状态：" + playerLife);//数组
var player_order1=sessionStorage.getItem("player_order");//获取玩家序号数组，取出时是JSON字符串（string）类型
var player_order=JSON.parse(player_order1);//JSON字符串转换为数组对象
console.log("玩家身份：" + player_order);//数组
$(function () {
    for (var i=2;i<=player_order.length;i++){
        $("#role1").clone().attr("id","role"+ i).appendTo("div.main-center")
    }//克隆玩家
    for (var i=0;i<player_order.length;i++){
        var id="#role" + (i+1);
        $(id).find("p.number").text((i+1)+"号");//修改玩家序号
        $(id).find("p.status").text(player_order[i]);//修改玩家身份
    }//修改玩家信息
    for (var i=0;i<playerLife.length;i++){
        if(playerLife[i]==="死亡"){
            var id = "#role" + (i+1);
            $(id).find("p.status").css("backgroundColor","#5fc0cd");
        }
    }
})

$(".back").click(function () {
    window.history.go(-1);
})