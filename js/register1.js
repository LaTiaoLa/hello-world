
function validate(){
            if(document.getElementById("name").value===""){
                document.getElementById("p1").innerHTML="用户名不能为空";
                return false;
            }
            if(document.getElementById("pwd").value===""){
                document.getElementById("p2").innerHTML="密码不能为空";
                return false;
            }
            if(document.getElementById("pwd1").value===""){
                document.getElementById("p3").innerHTML="密码不能为空";
                return false;
            }
            if(document.getElementById("pwd").value!==document.getElementById("pwd1").value){
                document.getElementById("p3").innerHTML="两次确认密码不同";
                return false;
            }
            if(localStorage.getItem(document.getElementById("name").value)!==null){
                document.getElementById("p1").innerHTML="用户名已存在";
                return false
            }
            if(document.getElementById("agree").checked){
                localStorage.setItem(document.getElementById("name").value,document.getElementById("pwd").value);
                document.getElementById("p6").innerHTML="注册成功!";
                return true;
            }
            else{
                document.getElementById("p6").innerHTML="必须选中同意本网站的所有协议，然后才可以提交表单数据";
                return false;
            }
        }
        function check(){
            document.getElementById("p1").innerHTML="";
            if(document.getElementById("name").value==="")
            {
                document.getElementById("p1").innerHTML="用户名不能为空";
            }
        }
        function check1(){
            document.getElementById("p2").innerHTML="";
            if(document.getElementById("pwd").value==="")
            {
                document.getElementById("p2").innerHTML="密码不能为空";
            }
        }function check2(){
            document.getElementById("p3").innerHTML="";
            if(document.getElementById("pwd1").value==="")
            {
                document.getElementById("p3").innerHTML="确认密码不能为空";
            }
            
        }
        function telCheck(){
            document.getElementById("p5").innerHTML="";
                if(!(/1[3458][0-9]{9}/).test(document.getElementById("tele").value)){ 
                    document.getElementById("p5").innerHTML="电话号码格式不符";
                }
            }