var ziXunDetailCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-backwhite'></i></div>"
           +" <div class='center'>资讯详情</div><div class='right'></div></div>";
        $$('#ziXunListNavbar').html(html);
        var query = $$.parseUrlQuery(e.detail.page.url);
        var info_id = query.info_id;
        debugger;
        uzu.rest.getJSON("connectinfo/findConnectInfoByInfoId", { "info_id": info_id }, function (result) {
            debugger;
            var connectDetailInfoList = result.result.connectDetailInfoList;
            $$('#title').text(connectDetailInfoList[0].title);
            debugger;
            $$('#shop_name').text(connectDetailInfoList[0].shop_name);
            $$('#content').text(connectDetailInfoList[0].content);
            $$('#publishtime').text(connectDetailInfoList[0].publishtime);
        });
        $$('.icon-backwhite').on('click', function () {
            mainView.router.back();
        });
    }
};

