var productListCtrl = {
    init: function (e) {
        var nav = "<div class='navbar-inner home_float'><div class='left'><i class='iconBack'></i></div><div class='center home_back'>" + "<span class='selectSearch' style='float:left;padding-left:5%;width:15%'>商品</span><i class='icon home_chose'></i>"
            + "<input id='u465_input' type='text'  class='text_sketch' style='width:68%'/> <span style='float:right;padding-right:5%;width:15%'><i class='icon home_search' id='search'></i></span>"
            + "</div><div class='right' ></div></div>"
        $$("#productsListNavbar").html(nav + "<div class='swiper-container swiper-1 home_float' style='width: 100%; margin-top: 40px' id='productLunbo'>"
            + $$("#productLunbo").html() + "</div><div class='subnavbar home_float' style='width: 100%; margin-top: 120px' id='productsListSubnavbar'>" + $$("#productsListSubnavbar").html() + "</div>");
        var searchContent = $$.parseUrlQuery(e.detail.page.url) || [];
        var query = "goods/findGoods";
        // 商品名称
        var name = "";
        // 分类Id
        var cat_id = "";
        // 传入的参数
        var searchGoods = {};
        if (searchContent) {
            if (searchContent.type)
                searchGoods.type = searchContent.type;
            if (searchContent.cat_id)
                searchGoods.cat_id = searchContent.cat_id;
            if (searchContent.name)
                searchGoods.name = searchContent.name;
        }
        else if (name) {
            searchGoods.name = name;
        }
        // 获得商品列表
        uzu.rest.getJSON(query, searchGoods, function (data) {
            if (!data.goodsList)
                return;
            // 渲染模板
            var context = {};
            context.productsList = data.goodsList;
            for (var i = 0; i < context.productsList.length; i++) {
                context.productsList[i].big_pic = "img/demo/productlist.jpg";
            }
            var productsTemplate = $$('#productsListTpl').html();
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
            $$('#firstTabProductsList').html(html);
            $$('#secondTabProductsList').html(html);
            $$('#threeTabProductsList').html(html);
        });
        //人气最高
        $$("#table1").on('click', function () {
            searchGoods.OrderBy = 2;
            uzu.rest.getJSON(query, searchGoods, function (data) {
                if (!data.goodsList)
                    return;
                // 渲染模板
                var context = {};
                context.productsList = data.goodsList;
                // for (var i = 0; i < context.productsList.length; i++) {
                //    context.productsList[i].big_pic = "img/demo/productlist.jpg";}

                var productsTemplate = $$('#productsListTpl').html();
                var compiledProductsTemplate = Template7.compile(productsTemplate);
                var html = compiledProductsTemplate(context);
                $$('#firstTabProductsList').html(html);
            });
        });
        //最新商品
        $$("#table2").on('click', function () {
            uzu.rest.getJSON(query, searchGoods, function (data) {
                if (!data.goodsList)
                    return;
                // 渲染模板
                var context = {};
                context.productsList = data.goodsList;
                // for (var i = 0; i < context.productsList.length; i++) {
                //    context.productsList[i].big_pic = "img/demo/productlist.jpg";}

                var productsTemplate = $$('#productsListTpl').html();
                var compiledProductsTemplate = Template7.compile(productsTemplate);
                var html = compiledProductsTemplate(context);

                $$('#secondTabProductsList').html(html);

            });
        });
        //离我最近
        $$("#table3").on('click', function () {
            uzu.rest.getJSON(query, searchGoods, function (data) {
                if (!data.goodsList)
                    return;
                // 渲染模板
                var context = {};
                context.productsList = data.goodsList;
                // for (var i = 0; i < context.productsList.length; i++) {
                //    context.productsList[i].big_pic = "img/demo/productlist.jpg";}

                var productsTemplate = $$('#productsListTpl').html();
                var compiledProductsTemplate = Template7.compile(productsTemplate);
                var html = compiledProductsTemplate(context);
                $$('#threeTabProductsList').html(html);
            });
        });
        //搜索
        $$("#search").on('click', function () {
            var name = $$("#goodscontent").val();
            mainView.router.loadPage("position.html?name="+name);
        });
        // 轮播
        var mySwiper1 = myApp.swiper('.swiper-1', {
            pagination: '.swiper-1 .swiper-pagination',
            spaceBetween: 50
        });
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
    }
};