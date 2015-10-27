var MycollectionCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner home_float"><div class="left"><i class="iconBack"></i></div><div class="center">我的收藏</div><div class="right">编辑</div></div>';
        $$('#MycollectionNavbar').html(html);
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
        var user_id = window.localStorage.getItem("userId");
        debugger;
        uzu.rest.getJSON("goods/findGoods", function (data) {
            debugger;
            if (!data.goodsList)
                return;
            // 渲染模板
            var context = {};
            context.productsCollectionList = data.goodsList;
            for (var i = 0; i < context.productsCollectionList.length; i++) {
                context.productsCollectionList[i].big_pic = "img/home/fc_6.jpg";
            }
            var productsCollectionTemplate = $$('#productCollectionTpl').html();
            var compiledProductsCollectionTemplate = Template7.compile(productsCollectionTemplate);
            var html = compiledProductsCollectionTemplate(context);
            $$('#firstTabCollectionList').html(html);
            $$('#secondTabClollectionList').html(html);
        });
    }
};

