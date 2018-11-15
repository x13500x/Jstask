var killer=Number(sessionStorage.getItem("killer"));
var citizen=Number(sessionStorage.getItem("citizen"));
var player=Number(sessionStorage.getItem("player"));
//获取玩家人数
var player_order1=sessionStorage.getItem("player_order");//获取玩家序号数组，取出时是JSON字符串（string）类型
var player_order=JSON.parse(player_order1);//JSON字符串转换为数组对象
var playerLife = JSON.parse(sessionStorage.getItem("playerLife"));
var playerLeft = killer + citizen;
var killDead = JSON.parse(sessionStorage.getItem("killDead"));
console.log(killDead);
var voteDead = JSON.parse(sessionStorage.getItem("voteDead"));
console.log(voteDead);
console.log("剩余杀手：" + killer);
console.log("剩余平民：" + citizen);
console.log("剩余玩家：" + playerLeft);
console.log("总玩家数：" + player);
console.log("玩家身份：" + player_order);//数组
console.log("玩家状态：" + playerLife);//数组

$(".killer-left").text(killer);
$(".citizen-left").text(citizen);

var day = ~~sessionStorage.getItem("day");//获取天数（取反位运算符，~~null=0）
if (day === 0){
    day = 1;
}//如果之前没有天数，则定为第一天
sessionStorage.setItem("day",day);//储存第一天天数
console.log("第" + day + "天");
for(var i = 1;i<day;i++){
    var id = "#day" + (i+1);
    $("#day1").clone().attr("id","day" + (i+1)).appendTo("div.main-p3");//克隆第2天及以后的流程
    $(id).find("span.day-number").text("第"+(i+1)+"天");//更改相应的天数
}//首天不执行，day=2时开始执行

for (i=0;i<day;i++){
    var u = i+1;
    var daynightTemp = "#day" + u +" .night-infor";
    var daysunTemp = "#day" + u +" .day-infor";
    $(daynightTemp).text(killDead[i]);
    $(daysunTemp).text(voteDead[i]);
}

