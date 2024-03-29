﻿var shoppingCartCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i style='color: #FFFFFF;' class='icon spxq_icon-navbar goBack'></i></div><div class='center'>购物车</div>"
                + "<div class='right'><a href='editCart.html' class='link link-u editCart' style='color: white'>编辑</a></div></div>";
        $$('#shoppingCartNavbar').html(html);
        // 隐藏底部导航栏
        // 底部导航栏
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        var user_id = window.localStorage.getItem("userId");
        uzu.rest.getJSON("orders/findCarts", { 'user_id': user_id }, function (data) {
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
                var _self=this;
                var goodsQuantity = $$(this).parent().find("li[name=productQuantity]").text();
                goodsQuantity = parseInt(goodsQuantity) + 1;
                uzu.rest.getJSON("orders/updateCarts", { 'count': goodsQuantity, 'user_id': user_id, 'goods_id': goods_id }, function (incrementResult) {
                    $$(_self).parent().find("li[name=productQuantity]").text(goodsQuantity);
                    // 计算所有选中商品总价格
                    $$("#allProductPrice").text(calcTotalPrice().toFixed(2));
                });
               

            });
            // 减少数量
            $$('.descrement').on('click', function (e) {
                var link = $$(e.target);
                var goods_id = link.dataset()['gid'];
                var _self=this;
                var goodsQuantity = $$(this).parent().find("li[name=productQuantity]").text();
                goodsQuantity=parseInt(goodsQuantity)-1;
                if (goodsQuantity > 0) {                	
                   uzu.rest.getJSON("orders/updateCarts", { 'count': goodsQuantity, 'user_id': user_id, 'goods_id': goods_id }, function (incrementResult) {
                   
                    $$(_self).parent().find("li[name=productQuantity]").text(goodsQuantity);
                    // 计算所有选中商品总价格
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
                var selectChks = $$("input[type=checkbox][name=checkItem]:checked");
                if (!selectChks.length) {
                    myApp.toast('请选择要结算的商品', 'error').show(true);
                    return;
                }
                var goodsIdArray = new Array();
                selectChks.each(function () {
                    var container = $$(this).parent().find('input[name=goods_id]');
                    goodsIdArray.push($$(container[0]).val());
                });
                var goods_ids = goodsIdArray.join(',');
                uzu.rest.getJSON("orders/updateReckoning", { 'user_id': user_id, 'goods_ids': goods_ids }, function (result) {
                    if (result.result.msg == "success") {
                        mainView.router.loadPage("confirm-order.html");
                    } else {
                        myApp.toast('失败', 'error').show(true);
                    }
                       
                    });
               
                
            }, this);
        });
        var calcTotalPrice = function () {
            var allProductPrice = 0.00;
            var selectChkss = $$("input[type=checkbox][name=checkItem]:checked");
            selectChkss.each(function () {
                var container = $$(this).parent().find('input[name=price]');
                var productQuantityContainer = $$(this).parents('.singleCart').find('li[name=productQuantity]');
                var singleCheckedProductPrice = parseInt($$(productQuantityContainer[0]).text()) * parseFloat($$(container[0]).val());
                // 将选中单个商品总价格累加
                allProductPrice += parseFloat(singleCheckedProductPrice);
               
            });
            return allProductPrice;
        }
    }
};

