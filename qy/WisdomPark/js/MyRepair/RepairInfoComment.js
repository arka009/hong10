$(function(){
	setStarListen()
})
//给评价星星添加监听
function setStarListen(){
	var stars = document.getElementsByClassName("star_1");
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
			
			
		}) 
	}
	
}

//提交维修评价
function subRepairCommnt(){
	document.getElementById("subCommentBox").style.display = 'none';
	document.getElementById("showCommentBox").style.display = 'block';
	document.getElementById("backBtn").style.display = "block";
}
