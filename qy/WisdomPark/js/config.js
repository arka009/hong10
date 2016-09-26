

window.appid = "wxcf63180a3352b169";	//公众号appid
window.secret = "d4624c36b6795d1d99dcf0547af5443d";	//公众号secret
window.serverUrl = "http://192.168.200.201:8081/cloudhouse";	//服务器url地址
window.subjectUrl = "http://file.eqingyu.com/yjy"
window.userId = "";			//localStorage.localUserId 本地存储userid


//显示提示框
function showPopDiv(text){
	document.getElementById("popMask").style.display = "block";
	document.getElementById("popText").innerHTML = text; 
	setTimeout('hidPopDiv()',1000);
	  
}
 function hidPopDiv(){
 $("#popMask").fadeOut(1000)
 }
