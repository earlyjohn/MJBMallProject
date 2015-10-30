var messageCtrl = {
    init: function (e) {

        // 顶部导航
        var html = '<div class="navbar-inner home_float">' +
            '<div class="left"><i class="iconBack"></i>' +
            '</div><div class="center">消息</div>' +
            '<div class="right"></div></div>';
        $$('#messageNavbar').html(html);
        // 回退
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });

    }
};

