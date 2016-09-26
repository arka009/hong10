var typeFlag = 0;//房产类型选择  0：住宅  1：车位


$(function(){
	setAreaListCLick();
	//setTabClick();
});

//住宅/车位类型选择
//function selectType(a){
//	if(a == 1){
//		typeFlag = 0;
//		document.getElementById("homeBtn").setAttribute("class","selectBtn btnChecked");
//		document.getElementById("carBtn").setAttribute("class","selectBtn");
//	}else{
//		typeFlag = 1;
//		document.getElementById("homeBtn").setAttribute("class","selectBtn");
//		document.getElementById("carBtn").setAttribute("class","selectBtn btnChecked");
//	}
//}

//设置卡片高度
function setCardHeight(){
	
	var hei = document.getElementById("cardOne").offsetHeight;
//	var bhei = document.getElementById("eleSubBtn").offsetHeight;
	
	var vminSum = 0; 
	if(window.innerWidth > window.innerHeight ){
		vminSum = window.innerHeight;
	}else{
		vminSum = window.innerWidth;			
	}
	
	var titHeiVh = hei/window.innerHeight*100;	//头高度vmin
//	var btnHeiVh = bhei/window.innerHeight*100;	//按钮高度vmin
	var bodyHeiVh = 98-titHeiVh;
	
	document.getElementById("eleBodyBox").style.height = bodyHeiVh + "vh";
	document.getElementById("eleBodyBox").style.marginTop = titHeiVh + "vh";
	document.getElementById("eleText").style.paddingBottom = btnHeiVh+ "vh";

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
//function setTabClick(){
//	var obj = $(".areaUl").children();
//	obj.each(function(){
//		$(this).click(function(){
//			var tabType = $(this).attr("typeCode");
//			
//			$(".areaUlShow").each(function(){
//				$(this).attr("class","areaUlShow");
//			})
//			$("#areaBox_"+tabType).attr("class","selectLi areaUlShow");
//			$(".areaBodyOne").attr('class',"areaBodyOne");
//			$("#areaBody_"+tabType).attr('class',"areaBodyOne areaBodyShow");
//		})
//	})
//}

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
		
		$("#areaText").html(str);
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