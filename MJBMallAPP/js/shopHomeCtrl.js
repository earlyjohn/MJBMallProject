var shopHomeCtrl = {
    init: function (e) {
        $$('#homeToolbar').show();
        //个人页面底端toobar隐藏
        $$("#productListNav").hide();
        $$('#shopHomeNav').show();
        //通过商铺id拿到商铺的基本信息
        var shop_id = window.localStorage.getItem("userId");
        uzu.rest.getJSON("goods/findShops", { 'shop_id': shop_id }, function (result) {
            if (!result.shopsList)
                return;
            var shopsList = result.shopsList;
            $$('#shop_id').text(shopsList[0].shop_id);
            $$('#shop_name').text(shopsList[0].shop_name);
            $$('#shop_hours').text(shopsList[0].shop_hours);
        });
        //通过店铺id和订单状态得到订单列表
        var num0 = 0;
        var num1 = 0;
        var num2 = 0;
        var num3 = 0;
        var num4 = 0;

        uzu.rest.getJSON("orders/findOrderNoGoodsByShopId", { 'shop_id': shop_id, 'order_status': 1 }, function (result) {
            if (!result.result.shop_nogoods_List)
                return;
            var array = result.result.shop_nogoods_List;
            debugger;
            shopHomeCtrl.getProductList(array, function (a) {
                debugger;
                num0++;
                if (num0 == array.length) {
                    for (var i = 0; i < array.length;i++){
                        a[i].order_id = array[i].order_id;
                        a[i].order_time = array[i].order_time;
                        a[i].order_sum = array[i].order_sum;
                    }
                    var context = {};
                    context.orderListData = a;
                    var productsTemplate = $$('#shopOrderListTpl').html();
                    var compiledProductsTemplate = Template7.compile(productsTemplate);
                    var html = compiledProductsTemplate(context);
                    $$('#firstTabShopList').html(html);
                }
            });
        });
        
        $$('#yiFuKuan').on('click', function () {
            debugger;
            var order_status = 1;
            uzu.rest.getJSON("orders/findOrderNoGoodsByShopId", { 'shop_id': shop_id, 'order_status': order_status }, function (result) {
                if (!result.result.shop_nogoods_List)
                    return;
                var array = result.result.shop_nogoods_List;
                shopHomeCtrl.getProductList(array, function (a) {
                    num1++
                    if (num1 == array.length) {
                        for (var i = 0; i < array.length;i++){
                            a[i].order_id = array[i].order_id;
                            a[i].order_time = array[i].order_time;
                            a[i].order_sum = array[i].order_sum;
                        }
                        var context = {};
                        context.orderListData = a;
                        var productsTemplate = $$('#shopOrderListTpl').html();
                        var compiledProductsTemplate = Template7.compile(productsTemplate);
                        var html = compiledProductsTemplate(context);
                        $$('#firstTabShopList').html(html);
                    }
                });
            });
        });

        $$('#daiFuKuan').on('click', function () {
            var order_status = 2;
            uzu.rest.getJSON("orders/findOrderNoGoodsByShopId", { 'shop_id': shop_id, 'order_status': order_status }, function (result) {
                if (!result.result.shop_nogoods_List)
                    return;
                var array = result.result.shop_nogoods_List;
                shopHomeCtrl.getProductList(array, function (a) {
                    num2++
                    if (num2 == array.length) {
                        for (var i = 0; i < array.length; i++) {
                            a[i].order_id = array[i].order_id;
                            a[i].order_time = array[i].order_time;
                            a[i].order_sum = array[i].order_sum;
                        }
                        var context = {};
                        context.orderListData = a;
                        var productsTemplate = $$('#shopOrderListTpl').html();
                        var compiledProductsTemplate = Template7.compile(productsTemplate);
                        var html = compiledProductsTemplate(context);
                        $$('#secondTabShopList').html(html);
                    }
                });
            });
        });

        $$('#yiWanCheng').on('click', function () {
            var order_status = 3;
            uzu.rest.getJSON("orders/findOrderNoGoodsByShopId", { 'shop_id': shop_id, 'order_status': order_status }, function (result) {
                if (!result.result.shop_nogoods_List)
                    return;
                var array = result.result.shop_nogoods_List;
                shopHomeCtrl.getProductList(array, function (a) {
                    num3++
                    if (num3 == array.length) {
                        for (var i = 0; i < array.length; i++) {
                            a[i].order_id = array[i].order_id;
                            a[i].order_time = array[i].order_time;
                            a[i].order_sum = array[i].order_sum;
                        }
                        var context = {};
                        context.orderListData = a;
                        var productsTemplate = $$('#shopOrderListTpl').html();
                        var compiledProductsTemplate = Template7.compile(productsTemplate);
                        var html = compiledProductsTemplate(context);
                        $$('#threeTabShopList').html(html);
                    }
                });
            });
        });

        $$('#yiGuanBi').on('click', function () {
            var order_status = 4;
            uzu.rest.getJSON("orders/findOrderNoGoodsByShopId", { 'shop_id': shop_id, 'order_status': order_status }, function (result) {
                if (!result.result.shop_nogoods_List)
                    return;
                var array = result.result.shop_nogoods_List;
                shopHomeCtrl.getProductList(array, function (a) {
                    num4++
                    if (num4 == array.length) {
                        for (var i = 0; i < array.length; i++) {
                            a[i].order_id = array[i].order_id;
                            a[i].order_time = array[i].order_time;
                            a[i].order_sum = array[i].order_sum;
                        }
                        var context = {};
                        context.orderListData = a;
                        var productsTemplate = $$('#shopOrderListTpl').html();
                        var compiledProductsTemplate = Template7.compile(productsTemplate);
                        var html = compiledProductsTemplate(context);
                        $$('#fourTabShopList').html(html);
                    }
                });
            });
        });
      
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        $$('#shopOrder').on('click',function(){
            mainView.router.loadPage("shopHome.html");
        });
        $$('#shopMessage').on('click',function(){
            mainView.router.loadPage("message.html");
        });
        $$('#shopShop').on('click',function(){
            mainView.router.loadPage("shopDetail.html");
        });
    },
    getProductList: function (array, callback) {
        var arr = new Array();
        for (var i = 0; i < array.length; i++) {
            var shop_id = array[i].shop_id;
            var order_id = array[i].order_id;
            var order_time = array[i].order_time;
            var order_sum = array[i].order_sum;
            var order_status = array[i].order_status;
            uzu.rest.getJSON("orders/findOrderByShopId", { 'shop_id': shop_id, 'order_id': order_id, 'order_status': order_status }, function (result) {
                b = result.result.shopOrderList;
                //一个order_id对应的是一个数组对象
                var list = {
                    order_id: order_id,
                    order_time:order_time,
                    order_sum:order_sum,
                    order_List_Data: b
                };
                arr.push(list);
                callback.call(this, arr);
            });
        }
    }
};
