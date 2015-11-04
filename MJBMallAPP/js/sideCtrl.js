var sideCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i style='color: #FFFFFF;' class='icon spxq_icon-navbar goBack'></i></div>"
            + "<div class='center'>身边</div><div class='right'><a href='#' class='link link-u' style='color: #FFFFFF;'></a></div></div>";
        //$$('#sideNavbar').html(html);
        $$("#sideNavbar").html(html + "<div class='swiper-container swiper-1 home_float' style='width: 100%; margin-top: 40px' id='productLunbo'>"
           + $$("#productLunbo").html() + "</div><div class='subnavbar home_float' style='width: 100%; margin-top: 120px' id='productsListSubnavbar'>" + $$("#productsListSubnavbar").html() + "</div>");
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        var query = "http://115.28.204.151:8088/MJBMall/goods/findGoods?callback=";
        
        $$.ajax({
            type: "GET",
            async: false,
            url: query,
            dataType: "json",
            success: function (data) {
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
    }
};

