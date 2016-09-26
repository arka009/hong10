'use strict';

function initSwiper(){
	var swiper = new Swiper('.swiper-container', {
			        pagination: '.swiper-pagination',
			        slidesPerView: 4,
			        paginationClickable: true,
			        spaceBetween: 10,
			        freeMode: true
			    });
	
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




function popText(s){
				var flag = false;
				var div = $('<div class="popMask" id="popMask" >');
				var str = '<div class="popDiv">'+
							'</div>'+
							'<div class="textClear" id="popText">'+s+''+
							'</div>';
					if( !flag ){
						$(div).html(str);
						$("body").append(div);
						$(div).fadeIn(300);
						flag = true;	
					}
					setTimeout(function(){
						$(div).fadeOut(300);
						flag = false;
						$(div).remove();
					},1500)
			}
			    

