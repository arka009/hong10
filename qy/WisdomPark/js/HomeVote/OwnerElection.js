
var personSelNum = 0;	//被选中人数

$(function(){
	setWindowScroll();
	
//	showPopDiv("请选择3个结果！")

	$(".nameLi").click(function(e){
		
		nameListListener(this);
	})
})

//设置窗口滑动
function setWindowScroll(){
	var hei = document.getElementById("cardTile").offsetHeight;
	var bhei = document.getElementById("eleSubBtn").offsetHeight;
	
	var vminSum = 0; 
	if(window.innerWidth > window.innerHeight ){
		vminSum = window.innerHeight;
	}else{
		vminSum = window.innerWidth;			
	}
	
	var titHeiVh = hei/window.innerHeight*100;	//头高度vmin
	var btnHeiVh = bhei/window.innerHeight*100;	//按钮高度vmin
	var bodyHeiVh = 98-titHeiVh-btnHeiVh;
	document.getElementById("eleBodyBox").style.height = bodyHeiVh+2 + "vh";
	document.getElementById("eleBodyBox").style.marginTop = titHeiVh + "vh";
	document.getElementById("eleText").style.paddingBottom = btnHeiVh+ "vh";
}

//名字添加点击监听
function nameListListener(e){
	personSelNum = 1;
	var nameLis = document.getElementsByClassName("nameLi");
	var nameliSelects = document.getElementsByClassName("nameliSelect");
	if(nameliSelects.length > personSelNum-1){
		var ci = 0;
		for(ci = 0; ci < nameLis.length; ci++){
			nameLis[ci].setAttribute("class","nameLi");
			$(e).attr('class',"nameLi nameliSelect");
		}
	}else{
		$(e).attr('class',"nameLi nameliSelect");
	}
}




//显示提示框
function showPopDiv(text){
	document.getElementById("popMask").style.display = "block";
	document.getElementById("popText").innerHTML = text; 
	setTimeout('hidPopDiv()',1000);
	  
}
//隐藏提示框
 function hidPopDiv(){
 $("#popMask").fadeOut(1000)
 }


//提交选举
function subElect(){
	window.location.href = "ElectionFinish.html";
}

//重置选举
function resetElect(){
	window.location.href = "ElectionFinish.html";
}
