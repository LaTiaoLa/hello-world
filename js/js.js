function getCurDate()
{
var d = new Date();
var week;
switch (d.getDay()){
case 1: week="星期一"; break;
case 2: week="星期二"; break;
case 3: week="星期三"; break;
case 4: week="星期四"; break;
case 5: week="星期五"; break;
case 6: week="星期六"; break;
default: week="星期天";
}
var years = d.getFullYear();
var month = add_zero(d.getMonth()+1);
var days = add_zero(d.getDate());
var hours = add_zero(d.getHours());
var minutes = add_zero(d.getMinutes());
var seconds=add_zero(d.getSeconds());
var ndate = years+"年"+month+"月"+days+"日 "+hours+":"+minutes+":"+seconds+" "+week;
var divT=document.getElementById("logInfo");
divT.innerHTML= ndate;
}
function add_zero(temp)
{
if(temp<10) return "0"+temp;
else return temp;
}
setInterval("getCurDate()",100);

function result(){
  var i=parseInt(document.getElementById("in1").value);
  var j=parseInt(document.getElementById("in2").value);
  var speak=document.getElementById("result");
  var standard=(j-100)*0.9;
  var female_standard=(j-100)*0.9-2.5;
  if(document.getElementById("male").checked){
  if(standard*0.9<=i&&i<=standard*1.1){
    speak.innerHTML="你的身材很标准！";
    return true;
  }
  if(i<standard*0.9){
    speak.innerHTML="你的身材偏瘦！";
    return true;
  }
  if(standard*1.1<i&&i<=standard*1.2){
    speak.innerHTML="你有点超重了！"
    return true;
  }
  if(standard*1.2<i&&i<=standard*1.3){
    speak.innerHTML="轻度肥胖！"
    return true;
  }
  if(standard*1.3<i&&i<=standard*1.5){
    speak.innerHTML="中度肥胖！"
    return true;
  }
  if(standard*1.5<i){
    speak.innerHTML="重度肥胖！"
    return true;
  }
  }
  else{
  if(female_standard*0.9<=i&&i<=female_standard*1.1){
    speak.innerHTML="你的身材很标准！";
    return true;
  }
  if(i<female_standard*0.9){
    speak.innerHTML="你的身材偏瘦！";
    return true;
  }
  if(female_standard*1.1<i&&i<=female_standard*1.2){
    speak.innerHTML="你有点超重了！"
    return true;
  }
  if(female_standard*1.2<i&&i<=female_standard*1.3){
    speak.innerHTML="轻度肥胖！"
    return true;
  }
  if(female_standard*1.3<i&&i<=female_standard*1.5){
    speak.innerHTML="中度肥胖！"
    return true;
  }
  if(female_standard*1.5<i){
    speak.innerHTML="重度肥胖！"
    return true;
  }

  }
} function denglu(){
    if(document.getElementById("textfield").value===""){
      document.getElementById("re_hint").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;用户名不能为空!";
      return false;
    }
    if(document.getElementById("textfield2").value===""){
      document.getElementById("re_hint").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;密码不能为空！";
      return false;
    }
    if(document.getElementById("textfield2").value!==localStorage.getItem(document.getElementById("textfield").value)){
      document.getElementById("re_hint").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;密码或用户名错误!";
      return false;
    }
    else{
      document.getElementById("re_hint").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;登录成功!";
      
    }

  }