var registerCtrl = {
    init: function (e) {
        // 回退
        $$('.topLeftIcon').on('click', function () {
            mainView.router.back();
        });
        // 发送验证吗
        $$('.messageSendBtn').on('click', function () {
            myApp.alert("调用发送验证码接口");
        });
        // 注册
        $$('.registerBtn').on('click', function () {
            mainView.router.loadPage("personalLogin.html");
        });
    }
};

