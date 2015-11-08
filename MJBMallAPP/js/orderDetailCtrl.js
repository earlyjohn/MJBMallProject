var orderDetailCtrl = {
    init: function (e) {
        $$("#homeToolbar").hide();
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-backwhite'></i></div><div class='center'>订单详情"
						+ "</div><div class='right'></div></div>";
        $$('#orderDetailNavbar').html(html);
        // 回退
        $$('.icon-backwhite').on('click', function () {
            mainView.router.back();
        });
        var query = $$.parseUrlQuery(e.detail.page.url);
        var order_id = query.order_id;
        var orderStatus = query.orderStatus;
        var order_time = query.order_time;
        var order_sum = query.order_sum;
        $$("#orderStatus").text(orderStatus);
        $$("#orderNum").text(order_id);
        $$("#buyTime").text(order_time);
        $$("#sumPrice").text(order_sum);
        // 获得地址
        uzu.rest.getJSON("orders/findOrderDetailByOrderId", { 'order_id': order_id }, function (data) {
            context = data.result.ordersList[0];
            var editCartsListTemplate = $$('#orderAddressTpl').html();
            var compiledEditCartsListTemplate = Template7.compile(editCartsListTemplate);
            var html = compiledEditCartsListTemplate(context);
            $$('#orderAddress').html(html);
        });
        // 根据订单id得到该订单内的商品详情
        uzu.rest.getJSON("orders/findGoodsByOrderId", { 'order_id': order_id }, function (result) {
            // 渲染模板
            var context = {};
            context.orderDetailProductData = result.result.goodsList;
            var editCartsListTemplate = $$('#orderDetailProductListTpl').html();
            var compiledEditCartsListTemplate = Template7.compile(editCartsListTemplate);
            var html = compiledEditCartsListTemplate(context);
            $$('#orderDetailProductList').html(html);
        });
      

    }
};

