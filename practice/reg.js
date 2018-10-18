var reg1=/\d(\w)(\w)\d/;
var reg2=/\d(\w)(\w)\d/g;
var ts="$1az2by3cx4dq5";
var ret1 = ts.match(reg1);
var ret2 = ts.match(reg2);
console.log(ret1);
console.log(reg1.lastIndex+"\t"+ret1.index);
console.log(ret2);
console.log(reg2.lastIndex+"\t"+ret2.index);
