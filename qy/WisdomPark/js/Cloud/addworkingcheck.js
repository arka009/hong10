'use strict';
var uploadSuccessFlag = false;
(function($){

			var loadImage = function(){
				this.n = 0;
			}
				loadImage.prototype.removeImage = function(){
					var close = $(".close");
						close.bind("click", function(){
							if( $(this).parent(".imgBtnBox").length>0 ){
								$(this).parent(".imgBtnBox").remove();	
							}
							
						});
				}
				
				loadImage.prototype.doSomething = function(){
					var upload = $("#upload");
					var path,clip = $("#img"+this.n),FileReader = window.FileReader;
					upload.change(function() {
				
				
				if (FileReader) {
					var reader = new FileReader(),
						file = this.files[0];
					reader.onload = function(e) {
						var str = '<div class="imgBtnBox">'+
						'<span class="close"></span>'+
						'<div class="imgBtn">'+
							'<img id="img'+ this.n +'" src="'+e.target.result+'" class="imgClass"/>'+
						'</div>'+
					  '</div>';
				
						$(".box").append(str)
						clip.attr("src", e.target.result);
						clip.attr("id", "img"+this.n);
						loadImage.prototype.removeImage.apply();
							
					};
					reader.readAsDataURL(file);
					
					
				}
				else {
					path = $(this).val();
					if (/"\w\W"/.test(path)) {
						path = path.slice(1,-1);
					}
					clip.attr("src",path);
					alert(1)
					//$(this).parent().parent(".imgBtnBox").parent().append(str) 	
				}
				this.n++;
				uploadSuccessFlag = true;
			});
				}
				
			
			window.itemApp = loadImage;
			var loadImg = new itemApp();
				loadImg.removeImage();
				loadImg.doSomething();

})(jQuery);



$(function(){
	setAreaListCLick();
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
	