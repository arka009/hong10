
$(function(){
	
	setAddressStyle();
//	getMyHomeList()
})

//获取用户房产列表
function getMyHomeList(){
	$.ajax({
		type:"get",
		url:serverUrl+"/MyHouse/showList.action?ownerinfoid="+localStorage.localUserId,
		success:function(m){
			var obj = JSON.parse(m);
			var html = "";
			
			obj.forEach(function(e){
				if(e.isfull == "1"){
					if(e.housetype == "1"){
						html += '<div class="homeListDiv " homeState="'+e.authestatus+'"  homeId="'+e.houseid+'" onclick="goMyHomeInfo(this)">'
					}else if(e.housetype == "2"){
						html += '<div class="carListDiv" homeState="'+e.authestatus+'" homeId="'+e.houseid+'" onclick="goMyHomeInfo(this)>'
					}
					
					html += '<div class="listIcon">'
					html += 	e.mergername
					html += '</div>'
					html += '<div class="homeTypeBox">' 
					html += 	'<div class="listTitle">'
					html += 		e.communityname
					html += 	'</div>'
					html += 	'<div class="homeType">'
					if(e.identity == "1"){
						html += "业主"
					}else if(e.identity == "2"){
						html += "家属"
					}else if(e.identity == "3"){
						html += "租户"
					}
					html += 	'</div>'
					html += '</div>'
					
					
					html += '<div class="listDisc">'
					html += 	e.address
					html += '</div>'
					html += '<div class="listDisc disMarBt">'
					html += 	e.companyname
					html += '</div>'
					html += '<div class="dateDiv">'
					html += 	'<div class="starBox">'
					
					var pointNum = parseInt(Number(e.score));
					var i = 0;
					for(i = 0; i < pointNum;i++){
						html += 	'<div class="oneStar">'
						html += 		'<img src="../../img/MyHome/fullStar.png" class="imgClass"/>'
						html += 	'</div>'
					}	
					if(Number(e.score) > pointNum ){
							'<div class="oneStar">'
								'<img src="../../img/MyHome/halfStar.png" class="imgClassHalf"/>'
							'</div>'
					}
					html += 	'</div>'
						
					html += 	'<div class="listDate">'
					html += 		e.updatetime
					html += 	'</div>'
					html += '</div>'
					if(e.authestatus = "2"){
						html += '<div class="listState">'
						html += '认证'
						html += '</div>'
					}
					
					html += '</div>'
				}
			})
			
			$("#homeListBox").html(html);
			
		},
		error:function(e){
			getMyHomeList();
		}
	});
}
 
 
//住宅列表进详情
function goMyHomeInfo(obj){
	var homeState = obj.attr("homeState");
	var homeId = obj.attr("homeId");
	window.location.href = "ResetHome.html?state="+homeState+"&id="+homeId;
}

//添加住宅卡片
function addHome(){
	window.location.href = "addHome.html";
}


//卡片地区地址格式整理
function setAddressStyle(){
	var objs = $(".listIcon");
	objs.each(function(){
		var str = $(this).text();
		if(str.length > 20){
		    var newStr = str.split("").reverse().join("");
		    var newStr2= newStr.slice(0,18);
		    var newAdd = "..."+newStr2.split("").reverse().join("")
		    $(this).html(newAdd)
		}
	})
	setHomeAddStyle();
}


//住宅地区地址格式整理
function setHomeAddStyle(){
	var objs = $(".listDisc");
	objs.each(function(){
		var str = $(this).text();
		if(str.length > 25){
		    var newStr = str.split("").reverse().join("");
		    var newStr2= newStr.slice(0,25);
		    var newAdd = "..."+newStr2.split("").reverse().join("")
		    $(this).html(newAdd)
		}
	})
}