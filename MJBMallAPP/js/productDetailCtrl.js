﻿var productDetailCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner' id='pd_detail'><div class='left'><i style='color: #FFFFFF;' class='icon spxq_icon-navbar goBack'></i>"
            +"</div><div class='center home_float'>商品详情</div><div class='right'><i style='color: #FFFFFF;' class='icon spxq_enjoy'></i></div></div>";
        $$('#productDetailNavbar').html(html);
        // 底部导航栏
        $$("#homeToolbar").show();
        $$("#productListNav").hide();
        $$("#productDetailNav").show();
        var query = $$.parseUrlQuery(e.detail.page.url);
        var goods_id = query.goods_id;
        uzu.rest.getJSON("goods/findGoods", { 'goods_id': goods_id }, function (data) {
            // 渲染模板
            var context = {};
            context.productDetail = data.goodsList;
            var productDetailTemplate = $$('#productDetailTpl').html();
            var compiledproductDetailTemplate = Template7.compile(productDetailTemplate);
            var html = compiledproductDetailTemplate(context);
            $$('#productDetail').html(html);
        });
        // 回退
        $$('.goBack').on('click', function () {
            $$("#productDetailNav").show();
            $$("#productListNav").hide();
            mainView.router.back();
        });
        // 加入购物车
        
        $$('.spxq_jrgwc').on('click', function () {
            uzu.rest.getJSON("orders/addCarts", { 'user_id': 1, 'goods_id': goods_id }, function (incrementData) {
                $$("#homeToolbar").hide();
                mainView.router.loadPage("shoppingCart.html");
            });
        });
        // 立即购买
        $$('.spxq_ljgm').on('click', function () {
            mainView.router.loadPage("confirm-order.html");
        });
        var mySwiper1 = myApp.swiper('.swiper-1', {
            pagination: '.swiper-1 .swiper-pagination',
            spaceBetween: 50
        });
    },
    preprocess: function (content, url, next) {
        
    }

};