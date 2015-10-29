var personalLoginCtrl = {
    init: function (e) {
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
        $$('.loginBtn').on('click', function () {
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
    }
};

