
$(function(){
	setUserInfo();
})


//页面写入用户信息
function setUserInfo(){
	var str = location.search;
	if(str.length > 0){
		var arr = str.split("?")[1].split("&");
		var name = arr[0].split("=")[1];
		var phone = arr[1].split("=")[1];
		$("#userName").val(decodeURI(name));
		$("#userPhone").val(phone);
	}
}


//提交用户信息
function subResetUserInfo(){
	var userName = $("#userName").val();
	var userPhone = $("#userPhone").val();
	var userId = localStorage.localUserId;
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
	if(userName.length < 2){
		//显示提示框
		var showText = "请填写2个字以上姓名";
		showPopDiv(showText);
	}else if(!myreg.test(userPhone)){ 
	    var showText = "请输入正确的手机号";
		showPopDiv(showText);
	    return false; 
	}else{
		$.ajax({
			type:"post",
			url:serverUrl+"/MyInfo/updateMyInfo.action",
			data:{
				"name":userName,
				"telphone":userPhone,
				"ownerinfoid":localStorage.localUserId
			},
			success:function(m){
				var obj = JSON.parse(m);
				if(obj.success){
					if(obj.success == "success"){
						history.back();
					}
				}else{
					showPopDiv(obj.errmsg);
				}
			},
			error:function(e){
				subResetUserInfo();
			}
		});
	}
	
	
	history.back();
}
