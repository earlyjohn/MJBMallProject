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
            var sendMobileCodeBtn = document.getElementById("forget_send");
            // 倒计时时间
            var wait = 60;
            if (sendFlag) {
                self.countDown(sendMobileCodeBtn, wait);
            }
        });
        // 下一步
        $$('#nextBtn').on('click', function () {
            mainView.router.loadPage("updatePasswordNext.html");;
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

