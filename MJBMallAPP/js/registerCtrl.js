var registerCtrl = {
    init: function (e) {
        var _self = this;
        window.registerSendFlag = true;
        // 回退
        $$('.topLeftIcon').on('click', function () {
            mainView.router.back();
        });
        // 发送验证吗
        $$('.messageSendBtn').on('click', function () {
            var phone = $$("#phoneNumber").val();
            if (!phone) {
                myApp.toast('手机号不能为空', 'error').show(true);
                return;
            }
            // 发送短信验证码
            uzu.rest.getJSON("register/sendCodeMsg", { 'phone': phone }, function (data) {
                if (data.status == "0") {
                    var sendMobileCodeBtn = document.getElementById("registerMessageSend");
                    // 倒计时时间
                    var wait = 60;
                    if (registerSendFlag) {
                        _self.countDown(sendMobileCodeBtn, wait);
                    }
                } else {
                    myApp.toast('发送验证码失败', 'error').show(true);
                    return;
                }
            });
          
        });
        // 注册
        $$('.registerBtn').on('click', function () {
            var userName = $$("#userName").val();
            var password = $$("#registerPassword").val();
            var phone = $$("#phoneNumber").val();
            var messageCode1 = $$("#messageCode").val;
			if (!userName || !password) {
			    myApp.toast('用户名密码不能为空', 'error').show(true);
			   // myApp.toast('请输入账号或密码', 'tips').show(true);
			   // myApp.toast('注册成功', 'success').show(true);
				return;
			}
			if (!messageCode1) {
			    myApp.toast('短信验证码不能为空', 'error').show(true);
			    return;
			}
            // 检验短信验证码
			uzu.rest.getJSON("register/findCodeMsg", { 'phone': phone, 'codeMsg': messageCode1 }, function (result) {
			    if (result.status != "0") {
			        myApp.toast('验证码错误！！！', 'error').show(true);
			    } else {
			        // 注册
			        uzu.rest.getJSON("register/register", { 'username': userName, 'password': password, 'phone': phone }, function (data) {
			            if (data.status == "0") {
			                mainView.router.loadPage("home.html");
			            }
			            else if (data.status == "2") {
			                myApp.toast('用户名已存在，请重试', 'error').show(true);
			                return;

			            } else if (data.status == "3") {
			                myApp.toast('请输入账号或密码', 'error').show(true);
			                return;
			            }
			            else {
			                myApp.toast('注册失败，请重试', 'error').show(true);
			                return;
			            }
			        });
			    }
			});
        });
    },
    // 倒计时
    countDown: function (o, wait) {
        if (wait == 0) {
            $$(o).text("发送");
            window.registerSendFlag = true;
        } else {
            window.registerSendFlag = false;
            $$(o).text("重新发送(" + wait + ")");
            wait--;
            setTimeout(function () {
                registerCtrl.countDown(o, wait)
            },
            1000)
        }
    }
    
};

