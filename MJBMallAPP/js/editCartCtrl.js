var editCartCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><a class='left'><i class='icon spxq_icon-navbar'></i></a><div class='center'>编辑购物车"
                +"</div><div class='right' id='order'><a href='shoppingCart.html' class='link link-u' style='color: white>'完成</a></div></div>";
        $$('#editCartNavbar').html(html);
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

