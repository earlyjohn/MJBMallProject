var ziXunDetailCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon search_icon-navbar'></i>"
              + "</div><div class='center'>资讯详情页</div><div class='right'><i class='icon'></i></div></div>";
        $$('#contentListNavbar').html(html);
    
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

