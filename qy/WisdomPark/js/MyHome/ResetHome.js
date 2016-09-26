
var homeState="";	//房产认证状态 1：未认证  2：已认证
var homeId = "";	//房产id
var listenFlag = 0;	//地区点击事件添加 0：未添加  1：已添加
$(function(){
	getUrlVal();
})

//获取url传参
function getUrlVal(){
//	var str = location.search;
//	var valStr = str.split("?")[1];
//	var arr = valStr.split("&");
//	homeState = arr[0].split("=")[1];
//	homeId = arr[1].split("=")[1];
	
	if(homeState == "2"){
		$("#userName").attr("readonly","readonly");
		$("#userPhone").attr("readonly","readonly");
		$("#addressInp").attr("readonly","readonly");
		
	}else{
		$("#homeBtn").click(function(){		//住宅类型选择监听
			selectType(1); 
		});
		$("#carBtn").click(function(){
			selectType(2);
		});
		$("#selectAreaBtn").click(function(){
			showAreaBox();
			if(listenFlag == 0){
				
				setAreaListCLick();
				listenFlag = 1;
			}
		});
		
		
	}
	
	getHomeInfo();
}

//根据房产id获取房产信息
function getHomeInfo(){
	
	
	
}



//解除房产绑定
function outBandHome(){
	history.back();
}


//住宅/车位类型选择
function selectType(a){
	if(a == 1){
		typeFlag = 0;
		document.getElementById("homeBtn").setAttribute("class","selectBtn btnChecked");
		document.getElementById("carBtn").setAttribute("class","selectBtn");
		
		$("#addressLabelName").html("住宅");
		$("#addressInp").attr("placeholder","*单元*楼*室");
	}else{
		typeFlag = 1;
		document.getElementById("homeBtn").setAttribute("class","selectBtn");
		document.getElementById("carBtn").setAttribute("class","selectBtn btnChecked");
		$("#addressLabelName").html("车位");
		$("#addressInp").attr("placeholder","***车位");
	}
}

//住宅/车位类型选择
function selectType(a){
	if(a == 1){
		typeFlag = 0;
		document.getElementById("homeBtn").setAttribute("class","selectBtn btnChecked");
		document.getElementById("carBtn").setAttribute("class","selectBtn");
		
		$("#addressLabelName").html("住宅");
		$("#addressInp").attr("placeholder","请输入住宅地址");
	}else{
		typeFlag = 1;
		document.getElementById("homeBtn").setAttribute("class","selectBtn");
		document.getElementById("carBtn").setAttribute("class","selectBtn btnChecked");
		$("#addressLabelName").html("车位");
		$("#addressInp").attr("placeholder","请输入车位地址");
	}
}


//地区列表点击事件添加
function setAreaListCLick(){
	
	var typeNum = 1;
	$(".areaBodyOne").each(function(){
		
		var obj = $(this).children().children();
		obj.each(function(){
			
			
			$(this).click(function(){
				console.log(typeNum)
				
				var areaStr = $(this).attr("areaCode");
				var areaType = areaStr.split("_")[0];
				var areaCode = areaStr.split("_")[1];
				var i = 1;
				
				$("#areaBox_"+areaType).html($(this).html())	//点击列表写入选项卡文字
				for(i = 1 ; i < Number(areaType)+1 ; i++){
					if(areaType < 5){
						$("#areaBox_"+i).attr('class','areaUlShow');
					}
				}
				$("#areaBox_"+(Number(areaType)+1)).attr('class','selectLi areaUlShow');
				$(".areaBodyOne").each(function(){
					if(areaType < 5){
						$(this).attr("class",'areaBodyOne');
					}
				})
				
				$("#areaBody_"+(Number(areaType)+1)).attr("class",'areaBodyOne areaBodyShow');
				if(areaType == 5){
					hidAreaBox(0);
				}			
			})
		})
		
		
	})
	
	
	$(".peopleLi").click(function(){
		hidPeopleBox($(this).html())
	})
	
}



//项目选项卡点击事件
function setTabClick(){
	var obj = $(".areaUl").children();
	obj.each(function(){
		$(this).click(function(){
			var tabType = $(this).attr("typeCode");
			
			$(".areaUlShow").each(function(){
				$(this).attr("class","areaUlShow");
			})
			$("#areaBox_"+tabType).attr("class","selectLi areaUlShow");
			$(".areaBodyOne").attr('class',"areaBodyOne");
			$("#areaBody_"+tabType).attr('class',"areaBodyOne areaBodyShow");
		})
	})
}

//显示选择地区框
function showAreaBox(){
	
	$("#areaBoxMask").fadeIn(300);
	$("#areaBox").slideToggle(300);
}

//隐藏选择地区框 
function hidAreaBox(a){
	$("#areaBoxMask").fadeOut(300);
	$("#areaBox").slideToggle(300);
	if(a == 0){
		var i = 1;
		var str = "";
		for(i = 1; i < 6; i++){
			str += $("#areaBox_"+i).html();
		}
		var reStr = str.split("").reverse().join("");
		var sliStr = reStr.slice(0,11);
		var finStr = "..."+sliStr.split("").reverse().join("");
		$("#areaText").html(finStr);
	}
}



//显示身份地区框
function showPeopleBox(){
	
	$("#peopleBoxMask").fadeIn(300);
	$("#peopleBox").slideToggle(300);
}

//隐藏选择身份框 
function hidPeopleBox(text){
	$("#peopleBoxMask").fadeOut(300);
	$("#peopleBox").slideToggle(300);
	if(text){
		$("#peopleType").html(text);
	}
}
