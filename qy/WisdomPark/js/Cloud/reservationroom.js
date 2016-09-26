//'use strict';
    function nameListListener(e){
    	 this.flag = true;
    		$(".homeListDiv").bind("click", function(){
	    			if(  this.flag ){
					 	$(this).removeClass("active");
					 	
					 	 this.flag = false;
					 }else{
					 	$(this).addClass("active");
					 	 this.flag = true;
					 }
    		})

	}
    $(function() {
    	
    	
  	nameListListener(this)
    	
    	
    	
        $("#tab p a").click(function() {
            $(this).parent().siblings().find("a").removeClass("active");
            $(this).addClass("active");
            var _this = $(this).parent().eq($(this).index()).index();

            if (_this == '0') {
                for (var i = 0; i < 2; i++) {
                    var divson = '<div class="homeListDiv " type="1">' +
                        '<div class="listIcon"><span class="mui-icon mui-icon-home"></span><span class="Address">江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋</span></div>' +
                        '<div class="listTitle setAskTitleStyle" >2016第三季度社区点评度社区点评度社区点评度社区点评123123'+
						'</div>'+
                        '<div class="listDisc">时间2016-07-28 10:00-12:00'+
                    	'</div>'+
                        '<div class="listDate">2016.07.28-2016.08.15' +
                        '</div>' +

                        '</div>';

                    $(".conbox").find(".homeListDiv").remove();
                    $(".conbox").append(divson)

                }
            } else if (_this == '1') {
                var divson = '<div class="homeListDiv " type="1">' +
                   '<div class="listIcon"><span class="mui-icon mui-icon-home"></span><span class="Address">江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋</span></div>' +
                        '<div class="listTitle setAskTitleStyle" >2016第三季度社区点评度社区点评度社区点评度社区点评123123'+
						'</div>'+
                        '<div class="listDisc">时间2016-07-28 10:00-12:00'+
                    	'</div>'+
                        '<div class="listDate">2016.07.28-2016.08.15' +
                        '</div>' +

                    '</div>';

                $(".conbox").find(".homeListDiv").remove();
                $(".conbox").append(divson)
            } else {
                var divson = '<div class="homeListDiv " type="1">' +
                   '<div class="listIcon"><span class="mui-icon mui-icon-home"></span><span class="Address">江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋江水赋</span></div>' +
                        '<div class="listTitle setAskTitleStyle" >2016第三季度社区点评度社区点评度社区点评度社区点评123123'+
						'</div>'+
                        '<div class="listDisc">时间2016-07-28 10:00-12:00'+
                    	'</div>'+
                        '<div class="listDate">2016.07.28-2016.08.15' +
                        '</div>' +

                    '</div>';

                $(".conbox").find(".homeListDiv").remove();
                $(".conbox").append(divson);
            }

nameListListener(this)

        });
    })