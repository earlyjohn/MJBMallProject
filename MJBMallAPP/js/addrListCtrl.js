var addrListCtrl = {
    init: function (e) {

        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-backwhite'></i></div><div class='center'>收货地址"
                +"</div><div class='right'></div></div>";
        $$('#addrListNavbar').html(html);
        // 回退
        $$('.icon-backwhite').on('click', function () {
            mainView.router.back();
        });

    }
};

