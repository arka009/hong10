'use strict';
var Rating= {
			setStarListen: function(index){
				var stars = document.getElementsByClassName("star_"+index);
				var i = 0;
				for(;i < stars.length;i++){
					 stars[i].index=i;
					 stars[i].addEventListener('click',function(){
//						alert(this.index)
						var starIndex = this.getAttribute("starIndex");
						var starNum = this.getAttribute("starNum");
						var si = 0,
							sj = 0;
						for(; sj < stars.length; sj++){
							stars[sj].lastChild.setAttribute("src","../../img/Cloud/blackStar.png");
						}
						for(; si < starNum; si++){
							stars[si].lastChild.setAttribute("src","../../img/Cloud/yellowStar.png");
						}
						if( this.index == 0 ){
							$(".evallutext").text("一般");
						}else if( this.index == 1 ){
							$(".evallutext").text("满意");
						}else if( this.index == 2 ){
							$(".evallutext").text("非常满意");
						}else if( this.index == 3 ){
							$(".evallutext").text("特别满意");
						}else if( this.index == 4 ){
							$(".evallutext").text("相当相当满意");
						}
					}); 
				}
				
			}
		}
$(function(){
	initSwiper();
	Rating.setStarListen(1);
	Rating.setStarListen(2);
	Rating.setStarListen(3);
	Rating.setStarListen(4);
	Rating.setStarListen(5);
});	

