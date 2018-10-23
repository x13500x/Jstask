//分配玩家
function people() {
    var num1=document.getElementById("num1");
    var num2=document.getElementById("num2");
    var num3=document.getElementById("num3").value;
    num1.value=Math.floor(num3 / 3);
    num2.value=Math.ceil(num3 *2 /3);
    console.log(num3);

}
function change() {
    var num3=document.getElementById("num3").value;
    if(num3<4||num3>18||num3===undefined){
        alert("请输入正确的人数");
    }
    else {
        people();
    }
}
function num() {
    var killer=document.getElementById("num1").value;
    var citizen=document.getElementById("num2").value;
    var player=document.getElementById("num3").value;
    console.log(killer);
    console.log(citizen);
    console.log(player);
    if (player>=4&&player<=18){
        window.location.href="role-confirm.html";
        sessionStorage.setItem("killer",killer);//存储杀手数量
        sessionStorage.setItem("citizen",citizen);//存储平民数量
        sessionStorage.setItem("player",player);//存储玩家数量
    }
    else {
        alert("请输入正确的人数");
    }
}

