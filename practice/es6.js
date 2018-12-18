{
    var para = [1,2,3];
    var othor = [4,5,...para];
    console.log(othor);
}
{
    function f(...a) {
        var sum = 0;
        a.forEach(item=>{
            sum+=item*1;
        });
        return sum;
    }
}