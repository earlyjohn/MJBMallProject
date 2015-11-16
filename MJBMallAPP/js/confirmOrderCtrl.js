var confirmOrderCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon spxq_icon-navbar'></i></div><div class='center'>订单创建"
						+"</div><div class='right'></div></div>";
        $$('#confirmOrderNavbar').html(html);
        // 回退
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        // 用户id
        var user_id = window.localStorage.getItem("userId");
        var addressId = "";
        var name = "";
        var address = "";
        var phone = "";
        var pay_way = "";
        var shop_id = "";
        // 总金额
        var order_sum = 0;
        // 获得默认地址
        uzu.rest.getJSON("orders/findDefaultAddress", { 'user_id': user_id }, function (data) {
            // 渲染模板
            var context = {};
            name = data.result.addressList[0].name;
            address = data.result.addressList[0].address;
            addressId = data.result.addressList[0].addressId;
            phone = data.result.addressList[0].phone;
            context = data.result.addressList[0];
            var editCartsListTemplate = $$('#getAddressTpl').html();
            var compiledEditCartsListTemplate = Template7.compile(editCartsListTemplate);
            var html = compiledEditCartsListTemplate(context);
            $$('#getAddress').html(html);
        });
        // 获得要结算的商品列表
        uzu.rest.getJSON("orders/findreckoning", { 'user_id': user_id }, function (result) {
            // 渲染模板
            var context = {};
            context.indreckoningList = result.result.recList;
            var editCartsListTemplate = $$('#indreckoningTpl').html();
            var compiledEditCartsListTemplate = Template7.compile(editCartsListTemplate);
            var html = compiledEditCartsListTemplate(context);
            $$('#indreckoning').html(html);
            for (var i = 0; i < result.result.recList.length; i++) {
                order_sum += parseFloat(result.result.recList[i].price).toFixed(2) * result.result.recList[i].count;
                shop_id = result.result.recList[i].shop_id;
            }
            $$('.allProductPrice').text(parseFloat(order_sum).toFixed(2));
           
        });
        // 提交订单
        $$('#submitOrderBtn').on('click', function () {
            var goods_idContainer = $$("input[type=hidden][name=goods_ids]");
            var shop_idContainer = $$("input[type=hidden][name=shop_ids]");
            var payTypeContainer = $$("input[type=radio][name=radioPay]");
            pay_way = $$(payTypeContainer[0]).val();
            var itemsArray = new Array();
            for (var i = 0; i < goods_idContainer.length; i++) {
                itemsArray.push($$(goods_idContainer[i]).val() + ":" + $$(shop_idContainer[i]).val());
            }
            var goodsIds = itemsArray.join(',');
            uzu.rest.getJSON("orders/commitOrders", {
                'user_id': user_id,
                'addressId': addressId,
                'address': address,
                'name': name,
                'phone': phone,
                'order_sum': order_sum,
                'pay_way': pay_way,
                'shop_id': shop_id,
                'goods_ids': goodsIds
            }, function (result) {
                if (result.result.msg = "success") {
                    mainView.router.loadPage("order.html");
                } else {
                    myApp.toast('生成订单失败', 'error').show(true);
                }

            });
        });
       
    }
};

