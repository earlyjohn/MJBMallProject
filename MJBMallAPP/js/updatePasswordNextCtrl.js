var updatePasswordNextCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i style='color: #FFFFFF;' class='icon spxq_icon-navbar'></i>"
            + "</div><div class='center'>找回密码</div><div class='right'><a href='#' class='link link-u' style='color: #FFFFFF;'></a></div></div>";
        $$('#updatePasswordNextNavbar').html(html);
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        $$('#updatePasswordFinish').on('click', function () {
            var phone = window.localStorage.getItem("phone");
            var codeMsg = window.localStorage.getItem("messageCode");
            var password = $$("#registerPassword").val();
            var repassword = $$("#re_registerPassword").val();
            if (password != repassword) {
                myApp.toast('两次密码不一致', 'error').show(true);
                return;
            }
            uzu.rest.getJSON("register/updatePwd", { 'phone': phone,'codeMsg':codeMsg,'password': password }, function (result) {
                if (result.status == "0") {
                    myApp.toast('重置密码成功', 'success').show(true);
                    mainView.router.loadPage("personalLogin.html");
                }

                else {
                    myApp.toast('重置失败', 'error').show(true);
                    return;
                }

            });


        });
    }
};

