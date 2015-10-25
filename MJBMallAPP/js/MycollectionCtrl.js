var MycollectionCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner home_float"><div class="left"><i class="iconBack"></i></div><div class="center">我的收藏</div><div class="right">编辑</div></div>';
        $$('#MycollectionNavbar').html(html);
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
    }
};

