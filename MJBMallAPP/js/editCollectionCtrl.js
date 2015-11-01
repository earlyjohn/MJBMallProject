var editCollectionCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><a class='left'><i class='icon spxq_icon-navbar'></i></a><div class='center'>编辑"
                + "</div><div class='right finishEditCollection' style='color:white;'>完成</div></div>";
        $$('#editCollectionNavbar').html(html);
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        // 用户id
        var user_id = window.localStorage.getItem("userId");
        var query = $$.parseUrlQuery(e.detail.page.url);
        var isProduct = query.isProduct;
        if (isProduct==="true") {
            // 商品收藏列表
            uzu.rest.getJSON("collections/findCollections", { 'user_id': user_id }, function (data) {
                    if (!data.result.goodsList)
                        return;
                    // 渲染模板
                    var context = {};
                    context.editProductsCollectionList = data.result.goodsList;
                    for (var i = 0; i < context.editProductsCollectionList.length; i++) {
                        context.editProductsCollectionList[i].big_pic = "img/home/fc_6.jpg";
                    }
                    var productsCollectionTemplate = $$('#editProductCollectionListTpl').html();
                    var compiledProductsCollectionTemplate = Template7.compile(productsCollectionTemplate);
                    var html = compiledProductsCollectionTemplate(context);
                    $$('#editCollectionList').html(html);
                });
          
        } else {
            // 店铺收藏列表
            uzu.rest.getJSON("collections/findCollectionsShop", { 'user_id': user_id }, function (data) {
                    debugger;
                    if (!data.result.colShopList)
                        return;
                    // 渲染模板
                    var context = {};
                    context.editShopCollectionList = data.result.colShopList;
                    for (var i = 0; i < context.editShopCollectionList.length; i++) {
                        context.editShopCollectionList[i].big_pic = "img/home/fc_6.jpg";
                    }
                    var shopCollectionTemplate = $$('#editShopCollectionListTpl').html();
                    var compiledShopCollectionTemplate = Template7.compile(shopCollectionTemplate);
                    var html = compiledShopCollectionTemplate(context);
                    $$('#editCollectionList').html(html);
                });
           
        }
        // 删除
        $$('#deleteCollection').on('click', function () {
            if (isProduct === "true") {
                mainView.router.loadPage("Mycollection.html");
            } else {
                mainView.router.loadPage("Mycollection.html");
            }
           
        });
        // 完成
        $$('.finishEditCollection').on('click', function () {
            mainView.router.loadPage("Mycollection.html");
        });

    }
};

