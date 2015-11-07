var personalCenterCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner home_float"><div class="left"><i style="color: #FFFFFF;" class="icon spxq_icon-navbar goBack"></i></div><div class="center">个人中心</div><div class="right"></div></div>';
        $$('#personalCenterNavbar').html(html);
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        $$('#mycollection').on('click', function () {
            mainView.router.loadPage("Mycollection.html");
        });
        $$('#message').on('click',function(){
            mainView.router.loadPage("message.html");
        });
    }
};

