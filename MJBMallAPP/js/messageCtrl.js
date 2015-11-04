var messageCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner"id="pd_detail"><div class="left"><i style="color: #FFFFFF;" class="icon spxq_icon-navbar goBack"></i></div>'+
        '<div class="center">消息 </div><div class="right editCart"><i style="color: #FFFFFF;" class="icon"></i>'+
        '</div></div>';
        $$('#messageNavbar').html(html);
        $$("#homeToolbar").hide();
        // 回退
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });

    }
};

