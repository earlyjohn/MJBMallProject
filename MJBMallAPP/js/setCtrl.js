var setCtrl = {
    init: function (e) {
        // 顶部导航
        var html ='<div class="navbar-inner"><a class="left"><i class="icon spxq_icon-navbar"></i></a><div class="center">设置</div><div class="right editCart"><a class="link link-u" style="color: white"></a></div></div>';
        $$('#setNavbar').html(html);
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

