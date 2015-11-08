var orderCtrl = {
   self:this,
    init: function (e) {

        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-orderback'></i></div><div class='center'>我的订单</div>"
                +"<div class='right'><i class='icon icon-search'></i></div><div class='subnavbar subnavbar-u'><div class='buttons-row'>"
                 + "<a href='#tab2' class='button tab-link active' id='waitingPayOrder'>等待付款</a>"
                 +"<a href='#tab3' class='button tab-link' id='alreadyPayOrder'>已付款</a><a href='#tab4' class='button tab-link'id='closeOrder'>交易关闭</a>"
                 + "<a href='#tab5' class='button tab-link'id='finishOrder'>交易完成</a></div></div></div>";
        //var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-orderback'></i></div><div class='center'>我的订单</div>"
        //       + "<div class='right'><i class='icon icon-search'></i></div></div>";
        $$('#orderNavbar').html(html);
        // 回退
        $$('.icon-orderback').on('click', function () {
            mainView.router.back();
        });
        // 用户id
        var user_id = window.localStorage.getItem("userId");
        uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '1' }, function (data) {
           
            for (var i = 0; i < data.result.orderList.length; i++) {
                data.result.orderList[i].orderStatus = "等待付款";
            }
            // 渲染模板
            var context = {};
            context.waitingPayListData = data.result.orderList;
            var cartsListTemplate = $$('#waitingPayTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#waitingPayList').html(html);
            // 删除
            $$('#waitingPayDel').on('click', function (e) {
                var order_id = $$(this).data("id");
                uzu.rest.getJSON("orders/delOrderByOrderId", { 'order_id': order_id }, function (data) {
                    if (data.result.msg == "success") {
                        mainView.router.loadPage("order.html");
                    } else {
                        myApp.toast('删除失败', 'error').show(true);
                    }
                });
            });
            // 支付
            $$('#goPay').on('click', function (e) {

            });
        });
        uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '2' }, function (data) {
            for (var i = 0; i < data.result.orderList.length; i++) {
                data.result.orderList[i].orderStatus = "已付款";
            }
            // 渲染模板
            var context = {};
            context.alreadPayListData = data.result.orderList;
            var cartsListTemplate = $$('#alreadyPayTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#alreadPayList').html(html);
            // 删除
            $$('#alreadyDel').on('click', function (e) {
                var order_id = $$(this).data("id");
                uzu.rest.getJSON("orders/delOrderByOrderId", { 'order_id': order_id }, function (data) {
                    if (data.result.msg == "success") {
                        mainView.router.loadPage("order.html");
                    } else {
                        myApp.toast('删除失败', 'error').show(true);
                    }
                });
            });
            // 确认收货
            $$('#conformRecieve').on('click', function (e) {
                var order_id = $$(this).data("id");
                uzu.rest.getJSON("orders/updateOrderStatus", { 'order_id': order_id }, function (data) {
                    if (data.result.msg == "success") {
                        mainView.router.loadPage("order.html");
                    } else {
                        myApp.toast('失败', 'error').show(true);
                    }
                });
            });
        });
        uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '3' }, function (data) {
            for (var i = 0; i < data.result.orderList.length; i++) {
                data.result.orderList[i].orderStatus = "交易关闭";
            }
            // 渲染模板
            var context = {};
            context.closeListData = data.result.orderList;
            var cartsListTemplate = $$('#closeTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#closeList').html(html);
            // 删除
            $$('#closeOrderDel').on('click', function (e) {
                var order_id = $$(this).data("id");
                uzu.rest.getJSON("orders/delOrderByOrderId", { 'order_id': order_id }, function (data) {
                    if (data.result.msg == "success") {
                        mainView.router.loadPage("order.html");
                    } else {
                        myApp.toast('删除失败', 'error').show(true);
                    }
                });
            });
           
        });
        uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '4' }, function (data) {
            for (var i = 0; i < data.result.orderList.length; i++) {
                data.result.orderList[i].orderStatus = "交易完成";
            }
            // 渲染模板
            var context = {};
            context.finishListData = data.result.orderList;
            var cartsListTemplate = $$('#finishTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#finishList').html(html);
            // 删除
            $$('#finishOrderDel').on('click', function (e) {
                var order_id = $$(this).data("id");
                uzu.rest.getJSON("orders/delOrderByOrderId", { 'order_id': order_id }, function (data) {
                    if (data.result.msg == "success") {
                        mainView.router.loadPage("order.html");
                    } else {
                        myApp.toast('删除失败', 'error').show(true);
                    }
                });
            });
            // 评价
            $$('#commonBtn').on('click', function (e) {

            });
        });

       
    },
    getProductList: function (order_id, callback) {
        uzu.rest.getJSON("orders/findGoodsByOrderId", { 'order_id': 12 }, function (result) {
            b = result.result.goodsList;
            callback.call(this,b)
        });

    }
};

