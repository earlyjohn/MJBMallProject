var shopListCtrl = {
    init: function (e) {
        var nav = "<div class='navbar-inner home_float'><div class='left'><i class='iconBack'></i></div><div class='center home_back'>&nbsp;&nbsp;&nbsp;商品<i class='icon home_chose'></i>"
				+ "<input id='u465_input' type='text' class='text_sketch'/><i class='icon home_search' id='search'></i></div><div class='right' ></div></div>"
        $$("#shopListNavbar").html(nav + "<div class='swiper-container swiper-1 home_float' style='width: 100%; margin-top: 40px' id='productLunbo'>"
            + $$("#productLunbo").html() + "</div><div class='subnavbar home_float' style='width: 100%; margin-top: 120px' id='productsListSubnavbar'>" + $$("#productsListSubnavbar").html() + "</div>");
        var searchContent = $$.parseUrlQuery(e.detail.page.url) || [];
        debugger;
        var query = "http://115.28.204.151:8088/MJBMall/goods/findShops?callback=";

        if (searchContent) {
            // 如果从搜索页面进来加上搜素参数
            var shop_name = searchContent.shop_name;
            if (shop_name=="") {
                query = "http://115.28.204.151:8088/MJBMall/goods/findShops?callback=";
            } else {
                
                query = "http://115.28.204.151:8088/MJBMall/goods/findShops?shop_name=" + shop_name + "&callback=";
            }
            debugger;
        }
        $$.ajax({
            type: "GET",
            async: false,
            url: query,
            dataType: "json",
            success: function (data) {
                debugger;
                if (!data.shopsList)
                    return;
                // 渲染模板
                var context = {};
                context.shopsList = data.shopsList;
                for (var i = 0; i < context.shopsList.length; i++) {
                    context.shopsList[i].big_pic = "img/demo/productlist.jpg";
                }
                debugger;
                var productsTemplate = $$('#shopListTpl').html();
                var compiledProductsTemplate = Template7.compile(productsTemplate);
                var html = compiledProductsTemplate(context);
                $$('#firstTabShopsList').html(html);
                $$('#secondTabShopsList').html(html);
                $$('#threeTabShopsList').html(html);
            },
            error: function (e) {
                alert("error");
            }
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