var b=Math.ceil(Math.random()*100);
var count=0;
guess=()=>
{
    var a=parseInt(document.getElementById("num").value);
    if(b<a)
    {
        document.getElementById("m").textContent=("try it again with smaller number");
        count++;
    }
    else if(b>a)
    {
        document.getElementById("m").textContent=("try it again with greater number");
        count++;
    }
    else
    {
        document.getElementById("m").textContent=("Congratulations you have completed in" +" "+count+" "+"tries");
    }
}