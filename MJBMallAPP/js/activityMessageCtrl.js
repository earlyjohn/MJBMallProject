var activityMessageCtrl = {
    init: function (e) {

        // 顶部导航
        var html = '<div class="navbar-inner"><a class="left"><i class="icon spxq_icon-navbar"></i></a>'+
       '<div class="center">美居宝活动</div><div class="right editCart"><a class="link link-u" style="color: white"></a></div></div>';
        $$('#activityMessageNavbar').html(html);
        // 回退
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

/**
 * Created by Administrator on 2015/10/28.
 */
