
var userCode = "";	//用户微信授权返回code
var userId = "";	//用户id

$(function(){
	
//	getUserCode();
	setAddressStyle();
//	liEventListen();
})



//得到用户授权code
function getUserCode(){
	var str = location.search;
	var arr = str.split("?")[1];
	var state = arr.split("&")[1].split("=")[1];
	if(state == "success"){
		userCode = arr.split("&")[0].split("=")[1];
		getUserId();
	}else{
		
	}
}

//后台传入code获取openid返回前台用户id
function getUserId(){
	$.ajax({
		type:"get",
		url:"http://192.168.200.201:8081/cloudhouse/webchat/authUser.action?code="+userCode,
		success:function(m){
			var obj = JSON.parse(m);
			//获取用户id
			alert(obj.result.ownerinfoid)
		},
		error:function(e){
			alert("网络错误")
		}
	});
}


//查询用户房产列表,判断是否进入添加房产页面--分页加载
function getUserHomeList(){
	$.ajax({
		type:"get",
		url:"",		//问卷列表
		success:function(m){
			if(m == 0){	//没有房产
				window.location.href = "../MyHome/addHome.html?userid="+userId;
			}else{
				
				//问卷列表
				
				var html = "";
				
				
				obj.listArr.forEach(function(e){
					html += '<div class="homeListDiv " type="'+1+'">'	//问卷完成状态 未答 过期 完成
					html += '<div class="listIcon">'
					html += 	'<span class="mui-icon mui-icon-home"></span>江水赋'
					html += '</div>'
					html += '<div class="listTitle" >'
					html += 	'2016第三季度社区点评度社区点评度社区点评度社区点评123123'
					html += '</div>'
					html += '<div class="listDisc">'
					html += 	'通过对社区服务质量的综合评价，端正物业管理企业对物业服务质量内涵的理解'
					html += '</div>'
					html += '<div class="listDate">'
					html += 	'2016.07.28-2016.08.15'
					html += '</div>'
					if(obj.type == 1){	//问卷状态未答
						
					}else if(obj.type == 2){	//问卷状态完成
						html += '<div class="listState">完成</div>'
					}else if(obj.type == 3){
						html += '<div class="listState">过期</div>'
					}
			
					html += '</div>'
				});
				$("#divList").append(html);
				
			}
		},
		error:function(e){
			getUserHomeList(); 
		}
	});
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
				$(".mui-pull-bottom-pocket").css('height','40px');
				setTimeout(function() {
					mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 0)); //参数为true代表没有更多数据了。
//					
//					$(".mui-pull-bottom-pocket").css('height','0px');
				}, 1500); 
			}
			if (mui.os.plus) {
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




//列表添加点击监听
function liEventListen(){
	mui(".mui-scroll").on('tap','.homeListDiv',function(e){
		var type = $(this).attr("type");
		if(type == "1"){
			window.location.href = "CommentPage.html";
		}else if(type == "2"){
			window.location.href = "CommentFinish.html";
		}else{
			window.location.href = "CommentFinish.html";
		}
	})
}



//卡片地区地址格式整理
function setAddressStyle(){
	var objs = $(".Address");
	objs.each(function(){
		var str = $(this).text();
		if(str.length > 15){ 
			
		    var newStr = str.split("").reverse().join("");
		    var newStr2= newStr.slice(0,15);
		    var newAdd = "..."+newStr2.split("").reverse().join("")
		    $(this).html(newAdd)
		}
	})
}


