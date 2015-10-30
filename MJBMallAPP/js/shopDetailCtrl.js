var shopDetailCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left' id='positon'><i class='icon search_icon-navbar'></i></div><div class='center home_back'>"
                    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品<i class='icon home_chose'></i><input id='u465_input' type='text' class='text_sketch' />"
                    +"</div><div class='right'><i class='icon home_search' id='search'></i></div></div>";
        $$('#shopDetailNavbar').html(html);
        //$$("#homeToolbar").show();
      //  $$("#productListNav").show();
      //  $$("#productDetailNav").hide();
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

