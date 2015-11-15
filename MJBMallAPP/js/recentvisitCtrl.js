var recentvisitCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner"><a class="left"><i class="icon spxq_icon-navbar"></i></a><div class="center"> 最近浏览 </div><div class="right editCart"><a class="link link-u clear" style="color: white">清空</a></div></div>';
        $$('#recentvisitNavbar').html(html);
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        var userID = window.localStorage.getItem("userId");
        // 获得最近浏览商品列表
        uzu.rest.getJSON("watched/findWatched", { 'user_id': userID }, function (data) {
            if (!data.goodsList)
                return;
            // 渲染模板
           
            var contex = {};
            for (var i = 0; i < data.goodsList.length; ++i) {
                if (contex[data.goodsList[i].time] == undefined) {
                    var list = {
                        date: data.goodsList[i].time,
                        goodsList: [data.goodsList[i]]

                    };
                    contex[data.goodsList[i].time] = list;
                }
                else {
                    contex[data.goodsList[i].time].goodsList.push(data.goodsList[i]);
                }
            }
            
            var context = {};
            context.dateList = contex;
           
            var productsTemplate = $$('#recentvisitTpl').html();
          
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
           
            $$('#recentvisit').html(html);
     
        });




        $$('.clear').on('click', function () {
            uzu.rest.getJSON("watched/delWatched", { 'user_id': user_id }, function (data) {
                if (data.status == 0)
                    myApp.toast('清除成功', 'success').show(true);
                else
                    myApp.toast('清除失败', 'success').show(true);

            });
           
            mainView.router.loadPage("delrecentvisit.html");
        });
    }
};

