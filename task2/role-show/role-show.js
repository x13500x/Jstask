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

function plaer_box() {
    var main_center=document.getElementsByClassName("main-center")[0];
    for (var i=0;i<player_order.length;i++){
        var gamer=document.createElement("div");
        gamer.className="gamer";
        var status=document.createElement("div");
        status.className="status";
        var status_text=document.createTextNode(player_order[i]);
        var number=document.createElement("div");
        number.className="number";
        var num=i+1;
        var number_text=document.createTextNode(num+"号");
        number.appendChild(number_text);
        status.appendChild(status_text);
        gamer.appendChild(status);
        gamer.appendChild(number);
        main_center.appendChild(gamer);
        var gamer_box=document.getElementsByClassName("gamer")[i];
        gamer_box.style.height=gamer_box.offsetWidth+"px";
    }
}
plaer_box();
function start_game() {
    window.location.href="game-process.html";
}
