var cymsCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon search_icon-navbar'></i>"
                + "</div><div class='center'>餐饮美食</div><div class='right'><i class='icon'></i></div></div>";
        $$('#cymsNavbar').html(html);
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

