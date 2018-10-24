var killer=Number(sessionStorage.getItem("killer"));
var citizen=Number(sessionStorage.getItem("citizen"));
var player=Number(sessionStorage.getItem("player"));
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
        sessionStorage.clear();
        window.location.href="homepage.html";
    }
}

var choosePlayer;//选择的玩家
var playerLife;//定义所有玩家状态
if (sessionStorage.getItem("playerLife") != null) {
    playerLife = JSON.parse(sessionStorage.getItem("playerLife"));
} else {
    playerLife = player_order;
}//
console.log(playerLife);

var killDead;
if (sessionStorage.getItem("killDead")){
    killDead = JSON.parse(sessionStorage.getItem("killDead"));
} else {
    killDead = [];
}
var voteDead;
if (sessionStorage.getItem("voteDead")){
    voteDead = JSON.parse(sessionStorage.getItem("voteDead"))
} else {
    voteDead = [];
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
    for (var i=0;i<playerLife.length;i++){
        if(playerLife[i]==="死亡"){
            var id = "#role" + (i+1);
            $(id).find("p.status").css("backgroundColor","#5fc0cd");
        }
    }//修改死亡玩家背景
    $(".gamer").click(function () {
        $(".select").css("visibility","hidden");//初始化小图标
        choosePlayer = $(this).index();//获取点击玩家的索引值
        console.log(choosePlayer);
        $(".select").eq(choosePlayer).css("visibility","visible");
    });
    $(".ok").click(function () {
        if (choosePlayer===undefined){
            alert("必须投死一个玩家");
        }
        else if(playerLife[choosePlayer]==="死亡"){
            alert("该玩家已死亡，请选择其他玩家");
        }
        else{
            playerLife[choosePlayer]="死亡";
            var temp = (choosePlayer + 1) + "号玩家被投死，其真实身份是" + player_order[choosePlayer];
            voteDead.push(temp);
            sessionStorage.setItem("killDead",JSON.stringify(voteDead));
            console.log(voteDead);
            if (player_order[choosePlayer]==="杀手"){
                killer = killer - 1;
                sessionStorage.setItem("killer",killer);
                console.log(killer);
            }
            else {
                citizen = citizen - 1;
                sessionStorage.setItem("citizen",citizen);
                console.log(citizen);
            }
            sessionStorage.setItem("playerLife",JSON.stringify(playerLife));
            console.log(playerLife);
            sessionStorage.setItem("choose",choosePlayer);
            if (citizen === killer||killer===0){
                window.location.href="task13-3.html";
            }
            else {
                window.location.href="game-process.html";
            }
        }
    })
})