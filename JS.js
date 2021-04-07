function Cong(){
let ip1=+document.getElementById("ip1").value;
let ip2=+document.getElementById("ip2").value;
S = ip1+ip2;
document.getElementById('result').innerHTML=('Result Addition: '+S)
}
function Tru(){
    let ip1=+document.getElementById("ip1").value;
    let ip2=+document.getElementById("ip2").value;
    T=ip1-ip2
    document.getElementById("result").innerHTML=("Result Subtraction =" +T)
}
function Nhan(){
    let ip1=+document.getElementById("ip1").value;
    let ip2=+document.getElementById("ip2").value;
    U=ip1*ip2;
    document.getElementById("result").innerHTML=("Result Multiplication ="+U)
}
function Chia(){
    let ip1=document.getElementById("ip1").value;
    let ip2=document.getElementById("ip2").value;
    Y= ip1/ip2
    document.getElementById("result").innerHTML=("Result Division=" +Y)
}