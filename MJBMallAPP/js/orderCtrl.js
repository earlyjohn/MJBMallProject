var orderCtrl = {
    init: function (e) {

        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-orderback'></i></div><div class='center'>我的订单</div>"
                +"<div class='right'><i class='icon icon-search'></i></div><div class='subnavbar subnavbar-u'><div class='buttons-row'>"
                 +"<a href='#tab1' class='button tab-link active'>全部</a><a href='#tab2' class='button tab-link'>等待付款</a>"
                 +"<a href='#tab3' class='button tab-link'>已付款</a><a href='#tab4' class='button tab-link'>交易关闭</a>"
                 +"<a href='#tab5' class='button tab-link'>交易完成</a></div></div></div>";
        $$('#orderNavbar').html(html);
        // 回退
        $$('.icon-orderback').on('click', function () {
            mainView.router.back();
        });
        // 用户id
        var user_id = window.localStorage.getItem("userId");
        uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '0' }, function (data) {
            for (var i = 0; i < data.result.orderList.length; i++) {
                if (data.result.orderList[i].order_status == "1") {
                    data.result.orderList[i].orderStatus = "已付款";
                } else if (data.result.orderList[i].order_status == "2") {
                    data.result.orderList[i].orderStatus = "等待付款";
                }
                else if (data.result.orderList[i].order_status == "3") {
                    data.result.orderList[i].orderStatus = "交易关闭";
                } else if (data.result.orderList[i].order_status == "4") {
                    data.result.orderList[i].orderStatus = "交易完成";
                } else { }
            }
            debugger;
            // 渲染模板
            var context = {};
            context.tab1OrderList = data.result.orderList;
            var cartsListTemplate = $$('#tab1OrderListTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#tab1OrderList').html(html);
        });
        // 全部
        $$('.allMyorder').on('click', function () {
            uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '0' }, function (data) {
                for (var i = 0; i < data.result.orderList.length; i++) {
                    if (data.result.orderList[i].order_status == "1") {
                        data.result.orderList[i].orderStatus = "已付款";
                    } else if (data.result.orderList[i].order_status == "2") {
                        data.result.orderList[i].orderStatus = "等待付款";
                    }
                    else if (data.result.orderList[i].order_status == "3") {
                        data.result.orderList[i].orderStatus = "交易关闭";
                    } else if (data.result.orderList[i].order_status == "4") {
                        data.result.orderList[i].orderStatus = "交易完成";
                    } else { }
                }
                debugger;
                // 渲染模板
                var context = {};
                context.tab1OrderList = data.result.orderList;
                var cartsListTemplate = $$('#tab1OrderListTpl').html();
                var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
                var html = compiledCartsListTemplate(context);
                $$('#tab1OrderList').html(html);
            });
        });
        // 等待付款
        $$('.waitingPayOrder').on('click', function () {
            debugger;
            uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '1' }, function (data) {
                debugger;
                for (var i = 0; i < data.result.orderList.length; i++) {
                    data.result.orderList[i].orderStatus = "等待付款";
                }
                debugger;
                // 渲染模板
                var context = {};
                context.waitingPayListData = data.result.orderList;
                var cartsListTemplate = $$('#waitingPayTpl').html();
                var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
                var html = compiledCartsListTemplate(context);
                $$('#waitingPayList').html(html);
            });
        });
        // 已付款
        $$('.alreadyPayOrder').on('click', function () {
            uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '2' }, function (data) {
                for (var i = 0; i < data.result.orderList.length; i++) {
                    data.result.orderList[i].orderStatus = "已付款";
                }
                debugger;
                // 渲染模板
                var context = {};
                context.alreadPayListData = data.result.orderList;
                var cartsListTemplate = $$('#alreadyPayTpl').html();
                var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
                var html = compiledCartsListTemplate(context);
                $$('#alreadPayList').html(html);
            });
        });
        // 交易关闭
        $$('.closeOrder').on('click', function () {
            uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '3' }, function (data) {
                for (var i = 0; i < data.result.orderList.length; i++) {
                    data.result.orderList[i].orderStatus = "交易关闭";
                }
                debugger;
                // 渲染模板
                var context = {};
                context.closeListData = data.result.orderList;
                var cartsListTemplate = $$('#closeTpl').html();
                var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
                var html = compiledCartsListTemplate(context);
                $$('#closeList').html(html);
            });
        });
        // 交易完成
        $$('.finishOrder').on('click', function () {
            uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '4' }, function (data) {
                for (var i = 0; i < data.result.orderList.length; i++) {
                    data.result.orderList[i].orderStatus = "交易完成";
                }
                debugger;
                // 渲染模板
                var context = {};
                context.closeListData = data.result.orderList;
                var cartsListTemplate = $$('#finishTpl').html();
                var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
                var html = compiledCartsListTemplate(context);
                $$('#closeList').html(html);
            });
        });
    }
};

