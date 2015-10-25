var editCartCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><a class='left'><i class='icon spxq_icon-navbar'></i></a><div class='center'>编辑购物车"
                +"</div><div class='right' id='order'><a href='shoppingCart.html' class='link link-u' style='color: white>'完成</a></div></div>";
        $$('#editCartNavbar').html(html);
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        // 取得购物车列表
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
                var editCartsListTemplate = $$('#editCarListTpl').html();
                var compiledEditCartsListTemplate = Template7.compile(editCartsListTemplate);
                var html = compiledEditCartsListTemplate(context);
                $$('#editCartList').html(html);
                // 商品选择框
                $$(".singleCheck").on('click', function (e) {
                    // 选中chekbox
                    var checkItemContainer = $$(e.target.closest('div.home_auto')).find('input[type=checkbox][name=editCheckItem]:checked');
                    if (checkItemContainer.length != data.result.cartsList.length) {
                        
                        $$("[name='checkAll']").prop("checked", '');
                    } else {
                        // 全选
                        $$("[name='checkAll']").prop("checked", 'true');
                    }


                });
            },
            error: function (incrementErr) {
                debugger;
            }
        });
        // 删除商品
        $$("#deleteCarts").on('click', function (e) {
            // 获得选中的复选框
            var selectChks = $$("input[type=checkbox][name=editCheckItem]:checked");
            if (!selectChks.length) {
                alert("请选择要删除的商品");
            }
            if (!window.confirm('你确定要删除吗？')) {
                return;
            }
           
            var itemsArray=new Array();
            selectChks.each(function () {
                debugger;
                var goodsIdContainer = $(this).closest('div.editSingleCarts').find('input');
                //var goodsIdContainer = $$(e.target.closest('div.editCartList')).find('input[type=hidden]');
                itemsArray.push($$(goodsIdContainer[1]).val());
                debugger;
            });
            $$.ajax({
                type: "GET",
                async: false,
                url: "http://localhost:8088/MJBMall/orders/delCarts?user_id=1&goods_id=" + itemsArray[0]+ "&callback=",
                dataType: "json",
                success: function (delCartsDate) {
                    debugger;
                    mainView.router.loadPage("shoppingCart.html");
                },
                error: function (delCartsErr) {

                }
            });
           
        });
        // 全选
        $$("#checkAll").on('click', function (e) {
            if ($$("[name = 'checkAll']").prop("checked") == true) {
                // 全选
                $$("[name='editCheckItem']").prop("checked", 'true');
            } else {
                // 取消全选
                $$("[name='editCheckItem']").prop("checked", '');
            }
        });
    }
};

