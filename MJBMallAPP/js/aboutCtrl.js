var aboutCtrl = {
    init: function (e) {
        // 顶部导航
        var html2 = "<div class='navbar-inner'><a class='left'><i class='icon spxq_icon-navbar'></i></a><div class='center'>编辑购物车"
                + "</div><div class='right' id='order'><a href='shoppingCart.html' class='link link-u' style='color: white>'完成</a></div></div>";
        $$('#aboutNavbar').html(html2);
        // 回退
        $$('.icon-orderback').on('click', function () {
            mainView.router.back();
        });

    }
};

