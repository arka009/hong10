'use strict';
			initSwiper();
			function myFunction() {
		        var list = document.getElementById("myList");
		        var newItem = document.createElement("div");
		        	newItem.setAttribute("class", "swiper-slide");
		        var str='<div class="infomodal">'+
									'<h2>江水赋</h2>'+
									'<div class="infodetail">'+
										'<p>所属街道：<span>北京市房山区良乡街道</span></p>'+
										'<p>所属居委会：<span>多宝居委会</span></p>'+
										'<p>建造时间：<span>2016年5月</span></p>'+
										'<p>总户数：<span>352户</span></p>'+
										'<p>职位：<span>维修主管</span></p>'+
									'</div>'+
								'</div>';
							
		        newItem.innerHTML=str;
		        list.insertBefore(newItem, list.childNodes[0]);
		        initSwiper();
		        $(list).find(".swiper-slide").bind("touchend", function(){
		        	location.href = 'chosecommunity.html';
		        })
		    }

		    function initSwiper(){
		    	var list = document.getElementById("myList");
				var swiper = new Swiper('.swiper-container', {
			        pagination: list.getElementsByClassName("swiper-slide").length==1 ?'':'.swiper-pagination' ,
			        effect: 'coverflow',
			        grabCursor: true,
			        centeredSlides: true,
			        slidesPerView: 'auto',
			         observer: true,
			         observeParents: true,
			        coverflow: {
			            rotate: 50,
			            stretch: 0,
			            depth: 100,
			            modifier: 1,
			            slideShadows : true
			        },
			        onSlideChangeEnd: function(swiper){  
			            swiper.startAutoplay();      
			         }  
			    });
			   
			}