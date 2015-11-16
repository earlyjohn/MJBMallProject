var shopLoginCtrl = {
    init: function (e) {
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
        $$('#shopHomeLogin').on('click', function () {
            var userName = $$("#username").val();
            var password = $$("#password").val();
            if (!userName || !password) {
                myApp.alert("请输入账号或密码", "error");
                return;
            }
            //var userType = window.localStorage.getItem("userType");
            var query = $$.parseUrlQuery(e.detail.page.url);
            var userType = query.userType;
            uzu.rest.getJSON("login/login", { 'username': userName, 'password': password }, function (result) {
                debugger;
                if (result.status == "0") {
                	debugger;
                    // 将用户id进行缓存，用户id和店铺id用的是一张表中的
                    window.localStorage.setItem("shopId", result.id);
                    //var userId = window.localStorage.getItem("userId");
                    mainView.router.loadPage("shopHome.html");
                } else if (result.status == "3") {
                    myApp.alert("请输入账号或密码", "error")
                } else {
                    myApp.alert("账号或密码错误", "error")
                }
            });
        });
    }
};

