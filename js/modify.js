function ala(){
window.location.href="index.html";
}
function alter(){
    if(localStorage.getItem(document.getElementById("name").value)===document.getElementById("pwd").value){
        
    if((/[0-9a-zA-Z]{6}/).test(document.getElementById("pwd1").value)){
        localStorage.setItem(document.getElementById("name").value,document.getElementById("pwd1").value);
        document.getElementById("p6").innerHTML="更改成功！";
        setTimeout("ala()",2000);
    }else{
        document.getElementById("p6").innerHTML="密码至少6位";

    }
    }
    else{
        document.getElementById("p6").innerHTML="更改失败！";
    }
}
function check(){
        document.getElementById("p1").innerHTML="";
    if(document.getElementById("name").value===""){
        document.getElementById("p1").innerHTML="用户名不能为空！";
    }
}
function check1(){
        document.getElementById("p2").innerHTML="";
    if(document.getElementById("pwd").value===""){
        document.getElementById("p2").innerHTML="不能为空！";
    }
}
function check2(){
        document.getElementById("p3").innerHTML="";
    if(document.getElementById("pwd1").value===""){
        document.getElementById("p3").innerHTML="不能为空！";
    }
    if(!(/[0-9a-zA-Z]{6}/).test(document.getElementById("pwd1").value)){
        document.getElementById("p3").innerHTML="密码至少6位";
    }
}