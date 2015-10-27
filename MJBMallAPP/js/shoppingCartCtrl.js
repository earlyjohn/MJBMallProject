var shoppingCartCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><a class='left'><i class='icon'></i></a><div class='center'>购物车</div>"
                + "<div class='right'><a href='editCart.html' class='link link-u editCart' style='color: white'>编辑</a></div></div>";
        $$('#shoppingCartNavbar').html(html);
        // 隐藏底部导航栏
        // 底部导航栏
        $$("#homeToolbar").show();
        $$("#productListNav").show();
        $$("#productDetailNav").hide();
        uzu.rest.getJSON("orders/findCarts", { 'user_id': 1 }, function (data) {
            // 渲染模板
            var context = {};
            context.cartList = data.result.cartsList;
            var cartsListTemplate = $$('#cartListTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#cartList').html(html);
            $$("#allProductPrice").text(calcTotalPrice().toFixed(2));
            // 增加数量
            $$('.increment').on('click', function (e) {
                var link = $$(e.target);
                var goods_id = link.dataset()['gid'];
                var container = $$(e.target.closest('ul.quantityOper')).find('li');
                var goodsQuantity = $$(container[1]).text();
                goodsQuantity = parseInt(goodsQuantity) + 1;
                uzu.rest.getJSON("orders/updateCarts", { 'count': goodsQuantity, 'user_id': 1, 'oods_id': goods_id }, function (incrementResult) {
                    $$(container[1]).text(goodsQuantity);
                    // 计算所有选中商品总价格
                    $$("#allProductPrice").text(calcTotalPrice().toFixed(2));
                });
               

            });
            // 减少数量
            $$('.descrement').on('click', function (e) {
                var link = $$(e.target);
                var goods_id = link.dataset()['gid'];
                var container = $$(e.target.closest('ul.quantityOper')).find('li');
                var goodsQuantity = parseInt($$(container[1]).text());
                goodsQuantity--;
                if (goodsQuantity > 0) {
                    uzu.rest.getJSON("orders/updateCarts", { 'count': goodsQuantity, 'user_id': 1, 'goods_id': goods_id }, function (decrementResult) {
                        $$(container[1]).text(goodsQuantity);
                        $$("#allProductPrice").text(calcTotalPrice().toFixed(2));
                    });
                  
                }
            });
            // 商品选择框
            $$(".checkItemChange").on('click', function (e) {
                // 计算所有选中商品总价格
                $$("#allProductPrice").text(calcTotalPrice().toFixed(2));

            });
            // 结算
            $$('#order').on('click', function () {
                // 获得选中商品的信息
                var selectChks = $("input[type=checkbox][name=checkItem]:checked");
                if (!selectChks.length) {
                    alert("请选择要结算的商品");
                    return;
                }
                selectChks.each(function () {
                    var container = $(this).closest('div.singleCart').find('input');
                });
            }, this);
        });
        
        var calcTotalPrice = function () {
            var allProductPrice = 0.00;
            var selectChkss = $("input[type=checkbox][name=checkItem]:checked");
            selectChkss.each(function () {
                var container = $(this).closest('div.singleCart').find('input');
                var productQuantityContainer = $(this).closest('div.singleCart').find('li[name=productQuantity]');
                var singleCheckedProductPrice = parseInt($$(productQuantityContainer[0]).text()) * parseFloat($$(container[3]).val());
                // 将选中单个商品总价格累加
                allProductPrice += parseFloat(singleCheckedProductPrice);
               
            });
            return allProductPrice;
        }
    }
};

