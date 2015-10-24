var productListCtrl = {
    init: function (e) {
        var nav="<div class='navbar-inner home_float'><div class='left'><i class='iconBack'></i></div><div class='center home_back'>&nbsp;&nbsp;&nbsp;商品<i class='icon home_chose'></i>"
				+"<input id='u465_input' type='text' class='text_sketch'/><i class='icon home_search' id='search'></i></div><div class='right' ></div></div>"
        $$("#productsListNavbar").html(nav + "<div class='swiper-container swiper-1 home_float' style='width: 100%; margin-top: 40px' id='productLunbo'>"
            + $$("#productLunbo").html() + "</div><div class='subnavbar home_float' style='width: 100%; margin-top: 120px' id='productsListSubnavbar'>" + $$("#productsListSubnavbar").html()+"</div>");
        var query = "http://localhost:8088/MJBMall/goods/findGoods?callback=";
        $$.ajax({
            type: "GET",
            async: false,
            url: query,
            dataType: "json",
            success: function (data) {
                debugger;
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