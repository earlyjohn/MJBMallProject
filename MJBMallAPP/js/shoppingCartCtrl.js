var shoppingCartCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><a class='left'><i class='icon spxq_icon-navbar'></i></a><div class='center'>购物车</div>"
                + "<div class='right'><a href='editCart.html' class='link link-u editCart' style='color: white'>编辑</a></div></div>";
        $$('#shoppingCartNavbar').html(html);
        // 隐藏底部导航栏
        $$("#homeToolbar").hide();
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        // 商品详情
        $$('.shopcart_seventh').on('click', function () {
            var url = "productDetail.html?goods_id=2";
            mainView.router.loadPage(url);
        });
    }
};

