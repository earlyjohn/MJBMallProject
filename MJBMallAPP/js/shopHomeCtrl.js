var shopHomeCtrl = {
    init: function (e) {
        $$('#homeToolbar').show();
        //个人页面底端toobar隐藏
        $$("#productListNav").hide();
        $$('#shopHomeNav').show();
        var shop_id = window.localStorage.getItem("userId");
        //通过商铺id拿到商铺的基本信息
        uzu.rest.getJSON("goods/findShops", { 'shop_id': shop_id }, function (result) {
            if (!result.shopsList)
                return;
            $$('#shop_pic').attr('src', result.shopsList[0].shop_pic);
            $$('#phone_number').text(result.shopsList[0].phone_number);
            $$('#shop_name').text(result.shopsList[0].shop_name);
            $$('#shop_hours').text(result.shopsList[0].shop_hours);
        });
        //得到初始化页面中的已付款的商品列表
        uzu.rest.getJSON("orders/findOrderGoodShop", { 'shop_id': shop_id, 'order_status': 1 }, function (result) {
            if (!result.result.zongheList)
                return;
            var context = {};
            context.orderListData = result.result.zongheList;
            var productsTemplate = $$('#shopOrderListTpl').html();
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
            $$('#firstTabShopList').html(html);
        });

        $$('#yiFuKuan').on('click', function () {
            uzu.rest.getJSON("orders/findOrderGoodShop", { 'shop_id': shop_id, 'order_status': 1 }, function (result) {
                if (!result.result.zongheList)
                    return;
                var context = {};
                context.orderListData = result.result.zongheList;
                var productsTemplate = $$('#shopOrderListTpl').html();
                var compiledProductsTemplate = Template7.compile(productsTemplate);
                var html = compiledProductsTemplate(context);
                $$('#firstTabShopList').html(html);
            });
        });

        $$('#daiFuKuan').on('click', function () {
            uzu.rest.getJSON("orders/findOrderGoodShop", { 'shop_id': shop_id, 'order_status': 2 }, function (result) {
                if (!result.result.zongheList)
                    return;
                var context = {};
                context.orderListData = result.result.zongheList;
                var productsTemplate = $$('#shopOrderListTpl').html();
                var compiledProductsTemplate = Template7.compile(productsTemplate);
                var html = compiledProductsTemplate(context);
                $$('#secondTabShopList').html(html);
            });
        });

        $$('#yiWanCheng').on('click', function () {
            uzu.rest.getJSON("orders/findOrderGoodShop", { 'shop_id': shop_id, 'order_status': 3 }, function (result) {
                if (!result.result.zongheList)
                    return;
                var context = {};
                context.orderListData = result.result.zongheList;
                var productsTemplate = $$('#shopOrderListTpl').html();
                var compiledProductsTemplate = Template7.compile(productsTemplate);
                var html = compiledProductsTemplate(context);
                $$('#threeTabShopList').html(html);
            });
        });

        $$('#yiGuanBi').on('click', function () {
            uzu.rest.getJSON("orders/findOrderGoodShop", { 'shop_id': shop_id, 'order_status': 4 }, function (result) {
                if (!result.result.zongheList)
                    return;
                var context = {};
                context.orderListData = result.result.zongheList;
                var productsTemplate = $$('#shopOrderListTpl').html();
                var compiledProductsTemplate = Template7.compile(productsTemplate);
                var html = compiledProductsTemplate(context);
                $$('#fourTabShopList').html(html);
            });
        });

        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        $$('#shopOrder').on('click', function () {
            mainView.router.loadPage("shopHome.html");
        });
        $$('#shopMessage').on('click', function () {
            mainView.router.loadPage("message.html");
        });
        $$('#shopShop').on('click', function () {
            mainView.router.loadPage("shopDetail.html");
        });
    }
};

