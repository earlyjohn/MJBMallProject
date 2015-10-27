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
        $$('.registerBtn').on('click', function () {
            var userName = $$("#userName").val();
			alert(userName);
            var password = $$("#registerPassword").val();
			alert(password);
			var phone = $$("#phoneNumber").val();
			alert(phone);
            if (!userName || !password) {
                myApp.alert("请输入账号或密码", "error");
				return;
            }
            // 注册
            uzu.rest.getJSON("register/register", { 'username': userName, 'password': password, 'phone': phone }, function (data) {
                if (data.status == "0") {
                    myApp.alert("注册成功", "success");
                    mainView.router.loadPage("home.html");
                }
                else if (data.status == "2") {
                    myApp.alert("用户名已存在，请重试", "error");
                    return;

                } else if (data.status == "3") {
                    myApp.alert("请输入账号或密码", "error");
                    return;
                }
                else {
                    myApp.alert("注册失败，请重试", "error");
                    return;

                }
            });
           
        });
    }
};

