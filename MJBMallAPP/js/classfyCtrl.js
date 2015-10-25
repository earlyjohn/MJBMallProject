var classfyCtrl = {
    init: function (e) {

        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon search_icon-navbar'></i>"
                + "</div><div class='center'>分类</div><div class='right'><i class='icon'>编辑</i></div></div>";
        $$('#classfyNavbar').html(html);
        // 回退
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });

    }
};

