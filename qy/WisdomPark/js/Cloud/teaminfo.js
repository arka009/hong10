'use strict';
(function($, undefined){
			

			
			$("#infolist li span").on("touchend", function(){
				var flag = 0;
				var _this =$(this);
					if( $(this).text() == "帮他认证" ){
						
						showPeopleBox();
						flag = 0;
					}
					if( $(this).text() == "解除认证" ){
						
						showPeopleBox();
						
						flag =1;
					}
					
					$(".confirm a").on("touchend", function(){
					
						if( $(this).text() == "确定" ){
							$(_this).removeAttr("class").text("解除认证");
							hidPeopleBox();
						}else{
							hidPeopleBox();
						}
						if( $(this).text() == "确定" && flag == 1 ){
							$(_this).parent().parent().parent().remove();
						}else{
							hidPeopleBox();
						}

						
					});
					 
			})

				
				
			
		
		})(Zepto);
		

function showPeopleBox(){
	
	$("#peopleBoxMask").fadeIn(300);
	$("#peopleBox").fadeIn(300);
}
function hidPeopleBox(){
	$("#peopleBoxMask").fadeOut(300);
	$("#peopleBox").fadeOut(300);
	
}