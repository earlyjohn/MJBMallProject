var updatePasswordCtrl = {
    init: function (e) {
        var self = this;
        window.sendFlag = true;

        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i style='color: #FFFFFF;' class='icon spxq_icon-navbar'></i>"
            + "</div><div class='center'>找回密码</div><div class='right'><a href='#' class='link link-u' style='color: #FFFFFF;'></a></div></div>";
        $$('#updatePasswordNavbar').html(html);
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        // 发送短信验证码
        $$('.messageSendBtn').on('click', function () {
            var phone = $$("#phoneNumber").val();
            if (!phone) {
                myApp.toast('手机号不能为空', 'error').show(true);
                return;
            }
            // 发送短信验证码
            uzu.rest.getJSON("register/sendCodeMsg", { 'phone': phone }, function (data) {
                if (data.status == "0") {
                    myApp.toast('发送验证码成功', 'success').show(true);
                    var sendMobileCodeBtn = document.getElementById("registerMessageSend");
                    // 倒计时时间
                    var wait = 60;
                    if (sendFlag)
                        self.countDown(sendMobileCodeBtn, wait);
                }
                else {
                    myApp.toast('发送验证码失败', 'error').show(true);
                    return;
                }
            });
        });
        // 下一步
        $$('#nextBtn').on('click', function () {
            var phone = $$("#phoneNumber").val();
            var messageCode1 = $$("#messageCode").val();
            if (!phone) {
                myApp.toast('手机号不能为空', 'error').show(true);
                return;
            }
            if (!messageCode) {
                myApp.toast('短信验证码不能为空', 'error').show(true);
                return;
            }
            uzu.rest.getJSON("register/findCodeMsg", { 'phone': phone, 'codeMsg': messageCode1 }, function (result) {
                if (result.status == "0") {
                    window.localStorage.setItem("phone", phone);
                    window.localStorage.setItem("messageCode", messageCode1);
                    mainView.router.loadPage("updatePasswordNext.html");
                }
            });
        });
    },
    // 倒计时
    countDown: function (o, wait) {
        if (wait == 0) {
            $$(o).text("发送");
            window.sendFlag = true;
        } else {
            window.sendFlag = false;
            $$(o).text("重新发送(" + wait + ")");
            wait--;
            setTimeout(function () {
                updatePasswordCtrl.countDown(o, wait)
            },
            1000)
        }
    }
};

