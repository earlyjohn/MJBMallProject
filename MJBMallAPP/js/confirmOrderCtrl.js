var confirmOrderCtrl = {
    init: function (e) {
        $$("#homeToolbar").hide();
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-backwhite'></i></div><div class='center'>订单创建"							
						+"</div><div class='right'></div></div>";
        $$('#confirmOrderNavbar').html(html);
        // 回退
        $$('.icon-backwhite').on('click', function () {
            mainView.router.back();
        });
      
    }
};

