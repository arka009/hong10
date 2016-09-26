

var point_1 = 0;//评价1
var point_2 = 0;//评价2
var point_3 = 0;//评价3
var point_4 = 0;//评价4
var point_5 = 0;//评价5

window.onload = function(){
	
	
	 
	
	setStarListen(1);
	setStarListen(2);
	setStarListen(3);
	setStarListen(4);
	setStarListen(5);
}

function selectStar(index){
	
}


//给评价星星添加监听
function setStarListen(index){
	var stars = document.getElementsByClassName("star_"+index);
	var i = 0;
	for(i = 0;i < stars.length;i++){
		stars[i].addEventListener('click',function(){
			var starIndex = this.getAttribute("starIndex");
			var starNum = this.getAttribute("starNum");
			var si = 0;
			var sj = 0;
			for(sj = 0; sj < stars.length; sj++){
				stars[sj].lastChild.setAttribute("src","../../img/HomeCom/blackStar.png")
			}
			for(si = 0; si < starNum; si++){
				stars[si].lastChild.setAttribute("src","../../img/HomeCom/yellowStar.png")
			}
			
			if(starIndex == 1){
				point_1 = starNum
			}else if(starIndex == 2){
				point_2 = starNum
			}else if(starIndex == 3){
				point_3 = starNum
			}else if(starIndex == 4){
				point_4 = starNum
			}else if(starIndex == 5){
				point_5 = starNum
			}
			
			console.log("评分一："+point_1+"；--评分二： "+point_2+"；--评分三： "+point_3+"；--评分四： "+point_4+"；--评分五： "+point_5)
		}) 
	}
	
}


//显示提示框
function showPopDiv(text){
	document.getElementById("popMask").style.display = "block";
	document.getElementById("popText").innerHTML = text; 
	setTimeout('hidPopDiv()',1000);
	  
}
 function hidPopDiv(){
 $("#popMask").fadeOut(1000)
 }



var point_1 = 0;//评价1
var point_2 = 0;//评价2
var point_3 = 0;//评价3
var point_4 = 0;//评价4
var point_5 = 0;//评价5

//评价页跳评价完成页
function goComFinish(){
	var commentContent = document.getElementById("comContent").value;
	if(point_1 == 0 || point_2 == 0 || point_3 == 0 || point_4 == 0 || point_5 == 0 || commentContent.length == 0){
		showPopDiv("请完成所有评价内容！");
	}else if(commentContent.length < 10){
		showPopDiv("您写的点评至少需要10个字！");
	}else{
		window.location.href = "CommentFinish.html";
	}
	
}

