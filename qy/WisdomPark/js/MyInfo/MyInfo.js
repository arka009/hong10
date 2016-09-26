
var getName = "";	//姓名
var getPhone = "";	//手机号

$(function(){
	getUserInfo();
})





//查询用户个人信息
function getUserInfo(){
	$.ajax({
		type:"get",
		url:serverUrl+"/MyInfo/showDetail.action?ownerinfoid="+localStorage.localUserId,
		success:function(m){
			var obj = JSON.parse(m);
			
			if(obj.errcode){
				
			}else{
				if(obj.flag == "1"){
				
					$("#userName").html(obj.name);
					$("#userPhone").html(obj.telphone); 
					getName = obj.name;
					getPhone = obj.telphone;
					
				}else{
					window.location.href = "ResetMyInfo.html";
				}
			}
		},
		error:function(e){
			getUserInfo();
		}
	});
}



//设置用户信息
function setUserInfo(){
	window.location.href = "ResetMyInfo.html?name="+getName+"&phone="+getPhone;
}




