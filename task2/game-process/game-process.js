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
//返回首页
function cancel() {
    if(confirm("确认退出该局游戏并回到游戏首页吗？")===true){
        sessionStorage.clear();
        window.location.href="homepage.html";
    }
}
//结束本轮游戏
$(".game_over_bt").click(function () {
    if(confirm("确认结束本轮游戏吗？")===true){
        sessionStorage.clear();
        window.location.href="homepage.html";
    }
})
//法官日志
$(".diary_bt").click(function () {
    window.location.href="judge-dairy.html";
})
//返回上一页
function back() {
    if(confirm("确认返回上一页吗？")===true){
        window.history.go(-1);
    }
}
//返回主页
//点击隐藏该天内容
$(function(){
    $(".day").click(function()
    {
        $(this).next().toggle();
    });
});

var day = ~~sessionStorage.getItem("day");//获取天数（取反位运算符，~~null=0）
if (day === 0){
    day = 1;
}//如果之前没有天数，则定为第一天
sessionStorage.setItem("day",day);//储存第一天天数
console.log("第" + day + "天");
var dayArray=["一","二","三","四","五","六","七","八","九","十"];
for(var i = 1;i<day;i++){
    var id = "#day" + (i+1);
    $("#day1").clone().attr("id","day" + (i+1)).appendTo("div.main-center");//克隆第2天及以后的流程
    $(id).find("span.day_num").text(dayArray[i]);//更改相应的天数
}//首天不执行，day=2时开始执行

//定义状态机状态;
var stateMachine;

var state = ["kill", "deadSpeak", "playerSpeak", "vote"];//状态数组
//创建执行顺序状态机
var fsm = new StateMachine({//创建一个状态机实例，
    init: "kill", //初始值为A
    transitions: [{//描述状态变化规则的数组，{}中的每一项是一个对象，是一个规则描述
            name: "killing",//当前行为的名字，状态机是通过这个name来进行转换的
            from: "kill",//当前行为是从哪个状态来的
            to: "deadSpeak" //当前行为执行完以后会过渡到哪个状态
        }, {
            name: "deadSpeaking",
            from: "deadSpeak",
            to: "playerSpeak"
        }, {
            name: "playerSpeaking",
            from: "playerSpeak",
            to: "vote"
        },{
            name: "voting",
            from: "vote",
            to: "kill"
    }
    ],
    methods: {
        /* 如果没有下面的报错处理机制，当不按转换顺序，状态机会报错并停止运行程序； */
        onInvalidTransition: function (transition, from, to) {
            console.log(from);
            switch (from) {
                case "kill":
                    alert("请点击杀手杀人");
                    break;
                /* 如果首先是调用step()的话，到这里的状态已经从A转换为B了，但是如果直接调用的是reset()方法，当前状态还是A，因为没有进行状态的转换，状态机会抛出错误：
                            transition = "reset", from = "A", to = undefined；
                            但是添加了错误处理机制以后，捕捉到错误后状态机会根据机制中的处理程序来执行，这里我给添加的处理行为为弹窗提示；
                            这种错误预先处理机制是值得在编程中学习的；
                            */
                case "deadSpeak":
                    alert("请点击亡灵发表遗言");
                    break;
                case "playerSpeak":
                    alert("请点击玩家依次发言");
                    break;
                case "vote":
                    alert("请点击全民投票");
                    break;
                default:
                    alert("操作错误");
                    break;
            }
        }
    }
});
//获取状态机状态
//并更改样式
$(function () {
    if (sessionStorage.getItem("stateMachine")) {
        stateMachine = +sessionStorage.getItem("stateMachine");
        console.log("状态序列：" + stateMachine);
        //更改前几天的样式
        if (day > 1){
            var lastDay = day - 1;
            for (var i = 1;i<=lastDay;i++) {
                $("#day"+i).find("div.step0").css("background-color","green");
                $("#day"+i).find("div.tri").css("border-right-color","green");
                $("#day"+i).find("div.game_log").hide();
                $("#day"+i).find(".step").click(function () {
                    alert("请执行下一项！")
                })
            }
        }
        //更改当天的样式
        if (stateMachine!=0){
            for (var i =0 ;i<stateMachine;i++) {
                var daytemp = "#day" + day;
                $(daytemp).find("div.step0").eq(i).css("background-color","green");
                $(daytemp).find("div.tri").eq(i).css("border-right-color","green");
            }
        }
        //页面判断切换状态机
        switch (stateMachine) {
            case 1:
                fsm.killing();
                break;
            case 2:
                fsm.killing();
                fsm.deadSpeaking();
                break;
            case 3:
                fsm.killing();
                fsm.deadSpeaking();
                fsm.playerSpeaking();
                break;
        }
    }
    //添加被杀死玩家信息
    if (sessionStorage.getItem("killDead")){
        for (var i = 0;i<killDead.length;i++) {
            var killTemp="#day" + (i+1) + " .dead";
            $(killTemp).text(killDead[i]);
        }
    }
    //添加被投死玩家信息
    if (sessionStorage.getItem("voteDead")){
        for (var i = 0;i<voteDead.length;i++) {
            var voteTemp="#day" + (i+1) + " .vote";
            $(voteTemp).text(voteDead[i]);
        }
    }
})
//绑定事件
var eventsTemp = "#day" + day +" .step0";
//绑定杀人事件
$(eventsTemp).eq(0).on("click",function () {
    if (fsm.can("killing")) {
        stateMachine = 1;
        sessionStorage.setItem("stateMachine",stateMachine);
        window.location.href = "kill.html";
    }
    fsm.killing();
});
//绑定发表遗言事件
$(eventsTemp).eq(1).on("click",function () {
    if (fsm.can("deadSpeaking")) {
        stateMachine = 2;
        sessionStorage.setItem("stateMachine",stateMachine);
        alert("请死者亮明身份并发言")
        $(this).css("background-color","green");
        $(this).children().css("border-right-color","green");
    }
    fsm.deadSpeaking();
});
//绑定玩家发言事件
$(eventsTemp).eq(2).on("click",function () {
    if (fsm.can("playerSpeaking")) {
        stateMachine = 3;
        sessionStorage.setItem("stateMachine",stateMachine);
        alert("玩家依次发言");
        $(this).css("background-color","green");
        $(this).children().css("border-right-color","green");
    }
    fsm.playerSpeaking();
});
//绑定投票事件
$(eventsTemp).eq(3).on("click",function () {
    if (fsm.can("voting")) {
        stateMachine = 0;
        sessionStorage.setItem("stateMachine",stateMachine);
        window.location.href = "vote.html";
    }
    fsm.voting();
});