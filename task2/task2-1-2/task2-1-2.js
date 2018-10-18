
var killer=sessionStorage.getItem("killer");
var citizen=sessionStorage.getItem("citizen");
var player=sessionStorage.getItem("player");
//获取人数
console.log(killer);
console.log(citizen);
console.log(player);
//退回主页
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
//创建杀手与平民的数组
var sum=[];
for(var u=0;u<killer;u++){
    sum.push("杀手")
}
for(var j=0;j<citizen;j++){
    sum.push("平民");
}
console.log(sum);
//玩家乱序
var neworder=[];
function disorder() {
    for( var k=0;k<player;k++){
        var  x= Math.floor(Math.random() *(sum.length));
        neworder.push(sum[x]);
        sum.splice(x, 1);
    }//每执行一次把抽取的新数据添加到新数组，并从原数组中删除，避免抽取到重复数据
    console.log(neworder);
    console.log(sum);
    return neworder;
}
disorder();//执行乱序，形成乱序数组
console.log(neworder);
//轮流翻看身份
var view=document.getElementsByClassName("check-order")[0];//下方按钮
var order=document.getElementsByClassName("order")[0];//上方玩家序号
var opentop=document.getElementsByClassName("open-top")[0];//玩家身份图片
var identify=document.getElementsByClassName("identify")[0];//玩家身份展示
var openbottom=document.getElementsByClassName("open-bottom")[0];//隐藏身份图片
var i=0;
function check() {
    console.log(player);//玩家数量
    console.log(neworder.length);//玩家数量
    if(openbottom.style.display==="none"){//翻开身份后
        if(i===neworder.length){//所有身份查看后，法官进入法官页面
            window.location.href="task13-2.html";
        }
        else{
            openbottom.style.display="block";//变成待翻开身份状态
            opentop.style.display="none";//身份隐藏
            var num1=i + 1;//num1是局部变量
            order.innerHTML=num1;
            console.log(i);
            console.log("查看"+num1+"号身份");
            view.innerHTML="查看"+num1+"号身份";
        }
    }
    else {//翻开身份前
        openbottom.style.display="none";
        opentop.style.display="block";
        identify.innerHTML=neworder[i];
        i++;
        order.innerHTML=i;
        console.log(i+"号身份");
        if(i===neworder.length){//翻开最后一个玩家身份后，给法官
            view.innerHTML="递给法官查看";
        }
        else{
            var num=i + 1;//num是局部变量
            console.log("隐藏并传递给"+num+"号");
            view.innerHTML="隐藏并传递给"+num+"号";
        }
    }
}