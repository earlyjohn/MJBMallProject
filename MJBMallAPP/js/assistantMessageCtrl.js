var assistantMessageCtrl = {
    init: function (e) {
        var html = '<div class="navbar" id="assistantMessageNavbar"><div class="navbar-inner"><a class="left">'+
          '<i class="icon spxq_icon-navbar"></i></a><div class="center">订单消息</div><div class="right editCart">'+
            ' <a class="link link-u" style="color: white"></a></div></div></div>';
        $$('#assistantMessageNavbar').html(html);
        var user_id = window.localStorage.getItem("userId");
        uzu.rest.getJSON("msgs/findOrderMsg", { 'user_id': user_id, 'order_status': 3 }, function (result) {
            debugger;
            if (!result.result.orderMsgList)
                return;
            // 渲染模板
            var context = {};
            //从后台拿到的数据赋值给要循环的渲染模板
            context.orderMsgList = result.result.orderMsgList;
            //得到要循环的html片段
            var productsTemplate = $$('#msgOrderListTpl').html();
            //AP7进行编译，得到完整的html片段
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            //把数据附进去
            var html = compiledProductsTemplate(context);
            //把html片段塞到
            $$('#listOrder').html(html);
        });

        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};
