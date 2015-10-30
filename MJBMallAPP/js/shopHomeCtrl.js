var shopHomeCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner"><div class="left" id="goBack"></div>'
        +'<div class="center">商家中心</div><div class="right"><a href="#" class="link link-u" style="color: #FFFFFF;">'
            +'</a></div></div>' +
            '<div class="subnavbar home_float" style="width: 100%; margin-top: 100px" id="productsListSubnavbar">' +
            ' <div class="buttons-row"><a href="#tab1" class="button tab-link active">已付款</a>' +
            '<a href="#tab2" class="button tab-link">代付款</a>' +
            ' <a href="#tab3" class="button tab-link">已完成</a>' +
            '<a href="#tab4" class="button tab-link">已关闭</a> </div></div>';
        $$('#shopHomeNavbar').html(html);
        $$('#homeToolbar').show();
        $$("#productListNav").hide();
        $$('#shopHomeNav').show();
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        $$('#shopOrder').on('click',function(){
            mainView.router.loadPage("shopHome.html");
        });
        $$('#shopMessage').on('click',function(){
            mainView.router.loadPage("message.html");
        });
        $$('#shopShop').on('click',function(){
            mainView.router.loadPage("shopDetail.html");
        });
    }
};
