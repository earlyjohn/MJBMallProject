var personalCenterCtrl = {
    init: function (e) {
        debugger;
        // 顶部导航
        //var html = "<div class='navbar-inner'><a class='left'><i class='icon spxq_icon-navbar'></i></a><div class='center'>编辑购物车"
        //        + "</div><div class='right' id='order'><a href='shoppingCart.html' class='link link-u' style='color: white>'完成</a></div></div>";
       var html="<div class='navbar-inner home_float'> <div class='left'><i class='iconBack'></i></div>+"
        "<div class='center'>我的收藏 </div><div class='right'>收藏 </div> </div>"
        $$('#personalCenterNavbar').html(html);
        //$$('.spxq_icon-navbar').on('click', function () {
        //    mainView.router.back();
        //});
        $$('#mycollection').on('click', function () {
            mainView.router.loadPage("Mycollection.html");
        });
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
        $$('#message').on('click',function(){
            mainView.router.loadPage("message.html");
        });
    }
};

