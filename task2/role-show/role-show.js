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
    if(confirm("确认退出该局游戏并回到游戏首页吗？")===true){
        window.location.href="homepage.html";
    }
}
//返回上一页
function back() {
    if(confirm("确认返回上一页吗？")===true){
        window.history.go(-1);
    }
}
$(function () {
    for (var i=2;i<=player_order.length;i++){
        $("#role1").clone().attr("id","role"+ i).appendTo("div.main-center")
    }//克隆玩家
    for (var i=0;i<player_order.length;i++){
        var id="#role" + (i+1);
        $(id).find("p.number").text((i+1)+"号");//修改玩家序号
        $(id).find("p.status").text(player_order[i]);//修改玩家身份
    }//修改玩家信息
});
function start_game() {
    window.location.href="game-process.html";
}
