window.onload = function() {
    highlight();
}
// 鼠标移动改变背景,可以通过给每行绑定鼠标移上事件和鼠标移除事件来改变所在行背景色。
function highlight() {
    var row=document.getElementsByTagName("tr");
    for (var i=0;i<row.length;i++) {
        row[i].onmouseover=function () {
            this.style.backgroundColor="#f2f2f2";
        }
        row[i].onmouseout=function () {
            this.style.backgroundColor="#fff";
        }
    }

}
// 创建删除函数
function del(x){
    var root=x.parentNode.parentNode.parentNode;
    var line=x.parentNode.parentNode;
    root.removeChild(line);
}
// 编写一个函数，供添加按钮调用，动态在表格的最后一行添加子节点；
function add() {
    var tbody=document.getElementById("table").lastChild;
    var tr=document.createElement("tr");
    var td0=document.createElement("td");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    td0.innerHTML="";
    td1.innerHTML="";
    td2.innerHTML="<a href=\"javascript:;\" onclick=\"del(this)\">删除</a>";
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
    highlight();
}