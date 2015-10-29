var MycollectionCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner home_float"><div class="left"><i class="iconBack"></i></div><div class="center">我的收藏</div><div class="right">编辑</div></div>';
        $$('#MycollectionNavbar').html(html);
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
        var user_id = window.localStorage.getItem("userId");
        // 默认显示商品收藏列表
        uzu.rest.getJSON("collections/findCollections", { 'user_id': user_id }, function (data) {
            if (!data.result.goodsList)
                return;
            // 渲染模板
            var context = {};
            context.productsCollectionList = data.result.goodsList;
            for (var i = 0; i < context.productsCollectionList.length; i++) {
                context.productsCollectionList[i].big_pic = "img/home/fc_6.jpg";
            }
            var productsCollectionTemplate = $$('#productCollectionTpl').html();
            var compiledProductsCollectionTemplate = Template7.compile(productsCollectionTemplate);
            var html = compiledProductsCollectionTemplate(context);
            $$('#firstTabCollectionList').html(html);
            $$('#secondTabClollectionList').html(html);
        });
        // 商品收藏列表
        $$('#goodsCollection').on('click', function () {
            uzu.rest.getJSON("collections/findCollections", { 'user_id': user_id }, function (data) {
                if (!data.result.goodsList)
                    return;
                // 渲染模板
                var context = {};
                context.productsCollectionList = data.result.goodsList;
                for (var i = 0; i < context.productsCollectionList.length; i++) {
                    context.productsCollectionList[i].big_pic = "img/home/fc_6.jpg";
                }
                var productsCollectionTemplate = $$('#productCollectionTpl').html();
                var compiledProductsCollectionTemplate = Template7.compile(productsCollectionTemplate);
                var html = compiledProductsCollectionTemplate(context);
                $$('#firstTabCollectionList').html(html);
            });
        });
        // 店铺收藏列表
        $$('#shopClollection').on('click', function () {
            uzu.rest.getJSON("collections/findCollectionsShop", { 'user_id': user_id }, function (data) {
                if (!data.result.goodsList)
                    return;
                // 渲染模板
                var context = {};
                context.productsCollectionList = data.result.goodsList;
                for (var i = 0; i < context.productsCollectionList.length; i++) {
                    context.productsCollectionList[i].big_pic = "img/home/fc_6.jpg";
                }
                var productsCollectionTemplate = $$('#productCollectionTpl').html();
                var compiledProductsCollectionTemplate = Template7.compile(productsCollectionTemplate);
                var html = compiledProductsCollectionTemplate(context);
                $$('#secondTabClollectionList').html(html);
            });
        });
    }
};

