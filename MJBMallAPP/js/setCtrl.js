var setCtrl = {
    init: function (e) {
        // 顶部导航
        var html ='<div class="navbar-inner"><a class="left"><i class="icon spxq_icon-navbar"></i></a><div class="center">设置</div><div class="right editCart"><a class="link link-u" style="color: white"></a></div></div>';
        $$('#setNavbar').html(html);
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        $$('#clearCache').on('click',function(){
        	
   		 var storage = window.localStorage;
   		 for (var i = 0; i < storage.length; i++) {
        var a = storage.key(i);
        if (storage.key(i) != "userId") {
            storage.removeItem(storage.key(i));
        }
    	}
    	alert("清除缓存成功");
        });
        $$('#clearAll').on('click',function(){
        	window.localStorage.clear();
        	alert("注销成功");
        })
    }
};

