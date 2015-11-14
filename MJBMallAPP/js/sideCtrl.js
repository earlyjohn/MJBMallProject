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
        //人气最高
        uzu.rest.getJSON("goods/findGoods", {'orderBy':1}, function (result) {
            if (!result.goodsList)
                return;
            var context = {};
            context.productsList = result.goodsList;
            var productsTemplate = $$('#productsListTpl').html();
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
            $$('#firstTabProductsList').html(html);
        });
        //最新商品
        uzu.rest.getJSON("goods/findGoods", { 'orderBy': 2}, function (result) {
            if (!result.goodsList)
                return;
            var context = {};
            context.productsList = result.goodsList;
            var productsTemplate = $$('#productsListTpl').html();
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
            $$('#secondTabProductsList').html(html);
        });
        //离我最近商品
        debugger;
        var jingdu = window.localStorage.getItem("jingdu");
        var weidu = window.localStorage.getItem("weidu");
        uzu.rest.getJSON("distance/findZuiJinGoods", { 'jingdu': jingdu, 'weidu': weidu }, function (result) {
            if (!result.result.zuijinGoodsList)
                return;
            var context = {};
            context.productsList = result.result.zuijinGoodsList;
            var productsTemplate = $$('#productsListTpl').html();
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
            $$('#threeTabProductsList').html(html);
        });
        var mySwiper1 = myApp.swiper('.swiper-1', {
            pagination: '.swiper-1 .swiper-pagination',
            spaceBetween: 50,
			nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
    }
};

