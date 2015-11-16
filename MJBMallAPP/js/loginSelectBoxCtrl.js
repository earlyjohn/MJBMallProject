var loginSelectBoxCtrl = {
    init: function (e) {
    	alert("请登录！");
        $$('#personalLogin').on('click', function () {
            var url = "personalLogin.html?userType=0";
            var userId = window.localStorage.getItem("userId");
            mainView.router.loadPage(url);
        });
        $$('#shopLogin').on('click', function () {
            var url = "shopLogin.html?userType=1";
            mainView.router.loadPage(url);
        });
       $$('.iconBack').on('click', function () {
			mainView.router.loadPage("home.html");
        });
    }
};