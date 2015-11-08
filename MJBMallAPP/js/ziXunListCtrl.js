var ziXunListCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon search_icon-navbar'></i>"
              + "</div><div class='center'>资讯列表页</div><div class='right'><i class='icon'></i></div></div>";
        $$('#contentListNavbar').html(html);
        var query = $$.parseUrlQuery(e.detail.page.url);
        var parent_id = query.parent_id;
        uzu.rest.getJSON("connectinfo/findConnectInfoByCatId", { "parent_id": parent_id }, function (result) {
            debugger;
            if (!result.result.connectInfoList)
                return;
            // 渲染模板
            var context = {};
            //从后台拿到的数据赋值给要循环的渲染模板
            context.contentList = result.result.connectInfoList;
            //得到要循环的html片段
            var productsTemplate = $$('#contentListTpl').html();
            //AP7进行编译，得到完整的html片段
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            //把数据附进去
            var html = compiledProductsTemplate(context);
            //把html片段塞到
            $$('#contentLists').html(html);
        });
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

