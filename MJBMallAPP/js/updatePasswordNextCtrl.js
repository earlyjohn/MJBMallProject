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
            mainView.router.loadPage("personalLogin.html");;
        });
    }
};

