var shopListCtrl = {
    init: function (e) {
        var nav = "<div class='navbar-inner home_float'><div class='left'><i class='iconBack'></i></div><div class='center home_back'>&nbsp;&nbsp;&nbsp;商品<i class='icon home_chose'></i>"
				+ "<input id='u465_input' type='text' class='text_sketch'/><i class='icon home_search' id='search'></i></div><div class='right' ></div></div>"
        $$("#shopListNavbar").html(nav + "<div class='swiper-container swiper-1 home_float' style='width: 100%; margin-top: 40px' id='productLunbo'>"
            + $$("#productLunbo").html() + "</div><div class='subnavbar home_float' style='width: 100%; margin-top: 120px' id='productsListSubnavbar'>" + $$("#productsListSubnavbar").html() + "</div>");
        var searchContent = $$.parseUrlQuery(e.detail.page.url) || [];
        var shop_name = "";
        if (searchContent) {
            // 如果从搜索页面进来加上搜素参数
            shop_name = searchContent.shop_name;
           
        }
        //人气最高店铺列表
        uzu.rest.getJSON("goods/findShops", { 'orderBy': 1 }, function (result) {
            debugger;
            if (!result.shopsList)
                return;
            // 渲染模板
            var context = {};
            context.shopsList = result.shopsList;
            for (var i = 0; i < context.shopsList.length; i++) {
                context.shopsList[i].big_pic = "img/demo/productlist.jpg";
            }
            var productsTemplate = $$('#shopListTpl').html();
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
            $$('#firstTabShopsList').html(html);
        });
        //信誉最高店铺列表
        uzu.rest.getJSON("goods/findShops", { 'orderBy': 2 }, function (result) {
            if (!result.shopsList)
                return;
            // 渲染模板
            var context = {};
            context.shopsList = result.shopsList;
            for (var i = 0; i < context.shopsList.length; i++) {
                context.shopsList[i].big_pic = "img/demo/productlist.jpg";
            }
            var productsTemplate = $$('#shopListTpl').html();
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
            $$('#secondTabShopsList').html(html);
        });
        //离我最近店铺列表
        uzu.rest.getJSON("distance/findZuiJinShop", { 'jingdu': 12, 'weidu': 2 }, function (result) {
            if (!result.result.zuijinList)
                return;
            // 渲染模板
            var context = {};
            context.shopsList = result.result.zuijinList;
            for (var i = 0; i < context.shopsList.length; i++) {
                context.shopsList[i].big_pic = "img/demo/productlist.jpg";
            }
            var productsTemplate = $$('#shopListTpl').html();
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
            $$('#threeTabShopsList').html(html);
        });
        var mySwiper1 = myApp.swiper('.swiper-1', {
            pagination: '.swiper-1 .swiper-pagination',
            spaceBetween: 50
        });
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
    }
};