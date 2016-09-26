window.onload = function(){
	setWindowScroll();
	
//	showPopDiv("请选择3个结果！")
//	nameListListener();
}

//设置窗口滑动
function setWindowScroll(){
	var hei = document.getElementById("cardTile").offsetHeight;
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
	
}


//我的投票按钮
function goResetElect(){
	window.location.href = "OwnerElection.html";
}
