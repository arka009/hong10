'use strict';
$(function(){
	setAreaListCLick();
	//setTabClick();
});


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