'use strict';

$(function(){
	getLiContent()
});

function getLiContent(){
	var li = $("#areaBody_1 li");
		$(li).bind("click", function(){
			$("#areaText").html( $(this).text() )
			hidAreaBox()
		});
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
	
}
