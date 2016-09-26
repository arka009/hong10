window.onload = function() {
	setCommentListOver();

	goMyComment();

	setCommentList();

	//	$("#wrapper").dotdotdot({
	//      // configuration goes here
	//  });
	//	alert($("#mycontent").html().width())
}

//设置评论列表内容超出两行省略显示
function setCommentList() {
	var vminSum = 0;
	if(window.innerWidth > window.innerHeight) {
		vminSum = window.innerHeight;
	} else {
		vminSum = window.innerWidth;
	}
	
	
	var html = "";
	var i = 0;
	for(i = 0; i < 5 ;i++){
		html += 			'<div class="comLi">'
		html += 				'<div class="contBox">'
							
						
		html += 					'<div class="myCont2" >'
		html += 						'张**：哈哈哈哈哈哈啦啦啦啦乐乐乐哈哈哈哈哈哈啦啦啦啦乐乐乐哈哈哈哈哈哈啦啦啦啦乐乐乐哈哈哈哈哈哈啦啦啦啦乐乐乐'
															
								
		html += 					'</div>'
		html += 					'<div class="textBtn">'
		html += 						'<img src="../../img/HomeCom/openText.png" class="imgClass"/>'
		html += 					'</div> '
		html += 					'<div class="" style="clear: both;"></div>	'
		html += 				'</div>'
		html += 				'<div class="comDate">'
		html += 					'2016.07.06 16:51:13'
		html += 				'</div>'
		html += 			'</div>'
		
		
		html += 			'<div class="comLi">'
		html += 				'<div class="contBox">'
							
						
		html += 					'<div class="myCont2" >'
		html += 						'张**：哈哈哈啦啦啦啦乐乐乐哈哈哈哈哈'
															
								
		html += 					'</div>'
		html += 					'<div class="textBtn">'
		html += 						'<img src="../../img/HomeCom/openText.png" class="imgClass"/>'
		html += 					'</div> '
		html += 					'<div class="" style="clear: both;"></div>	'
		html += 				'</div>'
		html += 				'<div class="comDate">'
		html += 					'2016.07.06 16:51:13'
		html += 				'</div>'
		html += 			'</div>'
	}
	
	$("#comList").html(html);
	
	$(".myCont2").each(function(){
		var hei = $(this).height();
		var heiVmin = hei / vminSum * 100;
		
		var html = "";
		
		if(heiVmin > 12) {
			$(this).attr("class","myCont");
			$(this).next().css("display",'block');
		}
	})
	
	mui(".mui-scroll").on('tap','.textBtn',function(){
		var closeState = $(this).prev().attr("class");
		if(closeState == "myCont2"){
			$(this).prev().attr("class","myCont");
			$(this).children().attr('src',"../../img/HomeCom/openText.png")
		}else{
			$(this).prev().attr("class","myCont2");
			$(this).children().attr('src',"../../img/HomeCom/closeText.png")
		}
		
	})
	
}

mui.init({
	pullRefresh: {
		container: '#pullrefresh',

		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	setTimeout(function() {
		var table = document.body.querySelector('.mui-table-view');
		var cells = document.body.querySelectorAll('.mui-table-view-cell');
		//					for (var i = cells.length, len = i + 3; i < len; i++) {
		//						var li = document.createElement('li');
		//						li.className = 'mui-table-view-cell';
		//						li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
		//						//下拉刷新，新纪录插到最前面；
		//						table.insertBefore(li, table.firstChild);
		//					}
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	}, 1500);
}
var count = 0;
/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 0)); //参数为true代表没有更多数据了。
		//					var table = document.body.querySelector('.mui-table-view');
		//					var cells = document.body.querySelectorAll('.mui-table-view-cell');
		//					for (var i = cells.length, len = i + 20; i < len; i++) {
		//						var li = document.createElement('li');
		//						li.className = 'mui-table-view-cell';
		//						li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
		//						table.appendChild(li);
		//					}
	}, 1500);
}
if(mui.os.plus) {
	mui.plusReady(function() {
		setTimeout(function() {
			//						mui('#pullrefresh').pullRefresh().pullupLoading();
		}, 1000);

	});
} else {
	mui.ready(function() {
		//					mui('#pullrefresh').pullRefresh().pullupLoading();
	});
}

//评论列表溢出隐藏
function setCommentListOver() {
	var commentLists = document.getElementsByClassName("myCont");
	var i = 0;
	for(i = 0; i < commentLists.length; i++) {
		var vminSum = 0;
		if(window.innerWidth > window.innerHeight) {
			vminSum = window.innerHeight;
		} else {
			vminSum = window.innerWidth;
		}

	}
}

//跳转我的点评
function goMyComment() {

	mui(".mui-scroll").on('tap', '.resetComment', function() {
		window.location.href = "CommentPage.html";
	})

}