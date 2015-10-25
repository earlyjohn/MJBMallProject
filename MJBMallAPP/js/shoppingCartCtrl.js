var shoppingCartCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><a class='left'><i class='icon spxq_icon-navbar'></i></a><div class='center'>购物车</div>"
                + "<div class='right'><a href='editCart.html' class='link link-u editCart' style='color: white'>编辑</a></div></div>";
        $$('#shoppingCartNavbar').html(html);
        // 隐藏底部导航栏
        // 底部导航栏
        $$("#homeToolbar").show();
        $$("#productListNav").show();
        $$("#productDetailNav").hide();
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });

        $$.ajax({
            type: "GET",
            async: false,
            url: "http://localhost:8088/MJBMall/orders/findCarts?user_id=1&callback=",
            dataType: "json",
            success: function (data) { 
                // 渲染模板
                var context = {};
                context.cartList = data.result.cartsList;
                debugger;
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
                    $$.ajax({
                        type: "GET",
                        async: false,
                        url: "http://localhost:8088/MJBMall/orders/updateCarts?count=" + goodsQuantity + "&user_id=1&goods_id=" + goods_id + "&callback=",
                        dataType: "json",
                        success: function (incrementData) {
                            debugger;
                            $$(container[1]).text(goodsQuantity);
                            // 计算所有选中商品总价格
                            $$("#allProductPrice").text(calcTotalPrice().toFixed(2));
                        },
                        error: function (incrementErr) {
                            debugger;
                        }
                    });
             
                });
                // 减少数量
                $$('.descrement').on('click', function (e) {
                    debugger;
                    var link = $$(e.target);
                    var goods_id = link.dataset()['gid'];
                    var container = $$(e.target.closest('ul.quantityOper')).find('li');
                    var goodsQuantity = parseInt($$(container[1]).text());
                    goodsQuantity--;
                    debugger;
                    if (goodsQuantity > 0) {
                        $$.ajax({
                            type: "GET",
                            async: false,
                            url: "http://localhost:8088/MJBMall/orders/updateCarts?count=" + goodsQuantity + "&user_id=1&goods_id=" + goods_id + "&callback=",
                            dataType: "json",
                            success: function (descrementdDta) {
                                debugger;
                                $$(container[1]).text(goodsQuantity);
                                $$("#allProductPrice").text(calcTotalPrice().toFixed(2));
                            },
                            error: function (descrementeRR) {
                                debugger;
                            }
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
                    debugger;
                    if (!selectChks.length) {
                        alert("请选择要结算的商品");
                        return;
                    }
                    selectChks.each(function () {
                        var container = $(this).closest('div.singleCart').find('input');
                    });
                },this);
            },
            error: function (e) {
                mainView.router.loadPage("confirm-order.html");
            }
        });
        var calcTotalPrice = function () {
            var allProductPrice = 0.00;
            var selectChkss = $("input[type=checkbox][name=checkItem]:checked");
            debugger;
            selectChkss.each(function () {
                debugger;
                var container = $(this).closest('div.singleCart').find('input');
                debugger;
                var productQuantityContainer = $(this).closest('div.singleCart').find('li[name=productQuantity]');
                var singleCheckedProductPrice = parseInt($$(productQuantityContainer[0]).text()) * parseFloat($$(container[3]).val());
                // 将选中单个商品总价格累加
                allProductPrice += parseFloat(singleCheckedProductPrice);
               
            });
            return allProductPrice;
        }
    }
};

