/**
 * Created by Administrator on 2015/10/29.
 */
var aboutCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon spxq_icon-navbar'></i></div><div class='center'>关于我们"
            +"</div><div class='right'></div></div>";
        $$('#aboutNavbar').html(html);
        // 回退
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });

    }
};

