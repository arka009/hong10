'use strict';
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
					//$(this).parent().parent(".imgBtnBox").parent().append(str) 	
				}
				this.n++;
			});
				}
				
			
			window.itemApp = loadImage;
			var loadImg = new itemApp();
				loadImg.removeImage();
				loadImg.doSomething();

			})(jQuery);