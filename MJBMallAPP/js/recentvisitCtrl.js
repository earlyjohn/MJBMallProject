var recentvisitCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner"><a class="left"><i class="icon spxq_icon-navbar"></i></a><div class="center"> 最近浏览 </div><div class="right editCart"><a class="link link-u" style="color: white">清空</a></div></div>';
        $$('#recentvisitNavbar').html(html);
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

