var personalLoginCtrl = {
    init: function (e) {
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
         var auths=null;
		// 监听plusready事件  
		document.addEventListener( "plusready", function(){
			// 扩展API加载完毕，现在可以正常调用扩展API
			plus.oauth.getServices( function(services){
				auths = services;
			}, function(e){
				alert( "获取分享服务列表失败："+e.message+" - "+e.code );
			} );
		}, false );
        $$('#personalLogin1').on('click', function () {
            var userName = $$("#username").val();
            var password = $$("#password").val();
            if (!userName || !password) {
                myApp.toast('请输入账号或密码', 'error').show(true);
                return;
            }
            uzu.rest.getJSON("login/login", { 'username': userName, 'password': password }, function (result) {
                if (result.status == "0") {
                    // 将用户id进行缓存
                    window.localStorage.setItem("userId", result.id);
                    //var userId = window.localStorage.getItem("userId");
                    mainView.router.loadPage("home.html");
                } else if (result.status == "3") {
                    myApp.toast('请输入账号或密码', 'error').show(true);
                } else {
                    myApp.toast('账号或密码错误', 'error').show(true);
                }
            });
        });
        $$('#qqLogin').on('click',function authLogin(){
		var s = auths[0];
	if ( !s.authResult ) {
		s.login( function(e){
			alert( "登录认证成功！" );
		}, function(e){
			alert( "登录认证失败！" );
		} );
	}else{
		alert( "已经登录认证！" );
	}
});
    }
}

