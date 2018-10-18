function change() {
    var num4=document.getElementById("num4").value;
    if (num4>=4 && num4<=18){
        people();
    }
    else {
        alert("请输入正确的人数");
        }
console.log(num4)
}
function people() {
    var num4=document.getElementById("num4").value;
    var num1=document.getElementById("num1");
    var num2=document.getElementById("num2");
    num1.value=Math.floor(num4/ 3);
    num2.value=Math.ceil(num4 *2 /3);
}
function next() {
    var killer=document.getElementById("num1").value;
    var citizen=document.getElementById("num2").value;
    var players=document.getElementById("num4").value;


    console.log(killer);
    console.log(citizen);
    console.log(players);
}
