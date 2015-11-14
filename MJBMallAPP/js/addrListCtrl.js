var addrListCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-backwhite'></i></div><div class='center'>收货地址"
                + "</div><div class='right'></div></div>";
        $$('#addrListNavbar').html(html);
        var userId = window.localStorage.getItem("userId");
        uzu.rest.getJSON("orders/findAddress", { 'user_id': userId }, function (result) {
            if (!result.result.addressList)
                return;
            // 渲染模板
            var context = {};
            //从后台拿到的数据赋值给要循环的渲染模板
            context.addrListData = result.result.addressList;
            //得到要循环的html片段
            var productsTemplate = $$('#addrListsTpl').html();
            //AP7进行编译，得到完整的html片段
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            //把数据附进去
            var html = compiledProductsTemplate(context);
            //把html片段塞到
            $$('#addrLists').html(html);
        });
        $$('#deleteAddress').on('click', function () {
            // 获得选中的复选框
            var selectChks = $$("input[type=checkbox][name=editCheckItem]:checked");
            if (!selectChks.length) {
                alert("请选择要删除的地址");
            }
            if (!window.confirm('你确定要删除吗？')) {
                return;
            }

            var itemsArray = new Array();
            selectChks.each(function () {
                var addressIdContainer = $(this).closest('div.editAddress').find('input');
                itemsArray.push($$(addressIdContainer[1]).val());
            });
            uzu.rest.getJSON("orders/delAddress", { 'addressId': itemsArray[0] }, function (result) {
                if (result.result.msg == "success") {
                    mainView.router.loadPage(addrList.html);
                } else if (result.result.msg == "fail") {
                    alert('删除失败');
                }
            });
        });
        $$('#setAddressStatus').on('click', function () {
            // 获得选中的复选框
            var selectChks = $$("input[type=checkbox][name=editCheckItem]:checked");
            var itemsArray = new Array();
            selectChks.each(function () {
                var addressIdContainer = $(this).closest('div.editAddress').find('input');
                itemsArray.push($$(addressIdContainer[1]).val());
            });
            if (selectChks.length != 1) {
                alert('请选中一个地址');
            } else {
                uzu.rest.getJSON("orders/updateAddressStatus", { 'addressId': itemsArray[0], 'user_id': itemsArray[1], }, function (result) {
                    if (result.result.msg == "success") {
                        alert('设置成功');
                    } else if (result.result.msg == "fail") {
                        alert('设置失败');
                    }
                });
            }
        });
        // 回退
        $$('.icon-backwhite').on('click', function () {
            mainView.router.back();
        });

    }
};

