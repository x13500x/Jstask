var obox=document.getElementsByClassName("box");
var blocks=[];
var newblock=[];
var runNum=3;
function addnum() {
    blocks=[];//清空数组（如不清除，后面重复执行会一直添加数据）
    for (var i=0;i<obox.length;i++){
        blocks.push(i)
    }
    console.log(blocks);
    return blocks;
}//添加数组数据0-8
function numrandom(){
    addnum();//执行数组数据
    newblock=[];//清空随机数组数据（如不清除，后面重复执行会一直添加数据）
    for(var k=0;k<runNum;k++){
        var  ran= Math.floor(Math.random() *(blocks.length));
        newblock.push(blocks[ran]);
        blocks.splice(ran, 1);
    }//每执行一次把抽取的新数据添加到新数组，并从原数组中删除，避免抽取到重复数据
    console.log(newblock);
    console.log(blocks);
    return newblock;
}//抽取随机三个数据形成数组
function defaultcolor() {
    for (var i=0;i<obox.length;i++){
        obox[i].style.backgroundColor="orange";
    }
}//重置默认颜色
function changecolor() {
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";
}//生产随机颜色
changecolor(changecolor());//每执行一次，重新洗牌
function change() {
    numrandom();//执行生成数组三个随机数
    defaultcolor();//重置颜色
    obox[newblock[0]].style.backgroundColor=changecolor();
    obox[newblock[1]].style.backgroundColor=changecolor();
    obox[newblock[2]].style.backgroundColor=changecolor();
    //随机三个框配置随机颜色
}
var star;
function stopstar() {
    window.clearInterval(star);//停止变色
    defaultcolor();//恢复默认颜色
}
function startstar() {
    stopstar();//每次点击前情况之前的计时器，否则会一直叠加计时器
    star=window.setInterval(change,1000);//设置延时时间，自动重复变色
}





