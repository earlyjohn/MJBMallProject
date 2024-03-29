﻿var personalCenterCtrl = {
    init: function (e) {
        // 顶部导航
        
        var html = '<div class="navbar-inner home_float"><div class="left"><i style="color: #FFFFFF;" class="icon spxq_icon-navbar goBack"></i></div><div class="center">个人中心</div><div class="right"></div></div>';
        $$('#personalCenterNavbar').html(html);
        //获得头像+信息
        var user_id = window.localStorage.getItem("userId");

        uzu.rest.getJSON("members/getUserinfo", { 'member_id': user_id }, function (data) {

            $$("#head_pic").attr('src', data.result.userinfoList[0].head_pic);
            $$("#name").text(data.result.userinfoList[0].nickname);
            $$("#area").text(data.result.userinfoList[0].area);
            var vip;
            if (data.result.userinfoList[0].vip_rank == 0)
                vip = "普通用户";
            else if (data.result.userinfoList[0].vip_rank == 1)
                vip = "VIP 1";
            else if (data.result.userinfoList[0].vip_rank == 2)
                vip = "VIP 2";
            else (data.result.userinfoList[0].vip_rank == 3)
            vip = "VIP 3";
            $$("#vip").text(vip);
        });
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        $$('#mycollection').on('click', function () {
            mainView.router.loadPage("Mycollection.html");
        });
        $$('#message').on('click',function(){
            mainView.router.loadPage("message.html");
        });
         /*拨打电话*/
        $$('.call').on('click', function call(){
		    // 导入Activity、Intent类
		    var Intent = plus.android.importClass("android.content.Intent");
		    var Uri = plus.android.importClass("android.net.Uri");
		    // 获取主Activity对象的实例
		    var main = plus.android.runtimeMainActivity();
		    // 创建Intent
		    var uri = Uri.parse("tel:400987987"); // 这里可修改电话号码
		    var call = new Intent("android.intent.action.CALL",uri);
		    // 调用startActivity方法拨打电话
		    main.startActivity(call);
    	});
    }
};

