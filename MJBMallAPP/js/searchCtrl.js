var searchCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner home_float'><div class='left'><i class='iconBack'></i></div>"
             + "<div class='center home_back'>" + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<span class='selectSearch1'>商品</span>"
             + "<input id='u465_input' type='text'  class='text_sketch' />"
             + "</div><div class='right'><i class='icon home_search'></i></div></div>";
        $$('#searchNavbar').html(html);
        var searchTypeContainer = $$.parseUrlQuery(e.detail.page.url) || [];
        var searchType = searchTypeContainer.searchType;
        if (searchType == 0) {
            $$(".selectSearch1").text("商品");
        } else {
            $$(".selectSearch1").text("店铺");
        }
        // 回退
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
        // 搜素
        var searchContent =$$('#u465_input').val();
        $$('.home_search').on('click', function () {
            var searchContent = $$('.text_sketch').val();
            if (searchType == 0) {
                mainView.router.loadPage("productsList.html?name=" + searchContent);
            } else {
                mainView.router.loadPage("shopList.html?shop_name=" + searchContent);
            }

        });
    }
};

