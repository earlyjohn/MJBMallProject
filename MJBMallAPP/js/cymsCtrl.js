var cymsCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon search_icon-navbar'></i>"
                + "</div><div class='center'>餐饮美食</div><div class='right'><i class='icon'></i></div></div>";
        $$('#cymsNavbar').html(html);
        var query = $$.parseUrlQuery(e.detail.page.url);
        var parent_id = query.parent_id;
        uzu.rest.getJSON("connectinfo/findConnectInfoByCatId", { "parent_id": parent_id }, function (result) {
            debugger;
            var connectInfoList = result.result.connectInfoList;

            $$('#shopName').text(connectInfoList[0].shop_name);
            $$('#content').text(connectInfoList[0].content);
            $$('#time').text(connectInfoList[0].publishtime);
        });
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

