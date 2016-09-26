'use strict';
   
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
    });
    $(function() {
        getLiContent()
    });

    function getLiContent() {
        $("#cancel").bind("click", function() {
            hidAreaBox();
        })
        $("#confirm").bind("click", function() {

            hidAreaBox();
            var str = '<div class="submitted">' +
                '<dl>' +
                '<dt>已分配人员</dt>' +
                '<dd style="float: left;"><span>张三</span><em>(电梯维修)</em></dd>' +
                '<dd style="float: right;">18612345678</dd>' +
                '</dl>' +
                '<p style="color: #e5e5e5;clear: both;"><time>2016-10-10 14:45</time></p>' +
                '</div>' +
                '<div class="submitted">' +
                '<p>维修单已提交</p>' +
                '<p>' +
                '<time>2016-10-10 14:00</time>' +
                '</p>' +
                '</div>';
            $(".loadson01").remove();
            $(".loaddiv").before(str);
            $("#assignment").hide();
            $("#repairprocess").show();

        });
        var li = $("#areaBody_1 li");
        $(li).bind("click", function() {
            $(this).siblings().removeClass("active");
            $(this).addClass("active");

            //hidAreaBox()
        });
    }



    //显示选择地区框
    function showAreaBox() {
        $("#areaBoxMask").fadeIn(300);
        $("#areaBox").slideToggle(300);
    }

    //隐藏选择地区框 
    function hidAreaBox(a) {
        $("#areaBoxMask").fadeOut(300);
        $("#areaBox").slideToggle(300);

    }