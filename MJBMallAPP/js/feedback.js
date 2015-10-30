/**
 * Created by Administrator on 2015/10/29.
 */
/**
 * Created by Administrator on 2015/10/29.
 */
var feedbackCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'>" +
            "<i class='icon spxq_icon-navbar'></i></div><div class='center'>意见与反馈"
            +"</div><div class='right'></div></div>";
        $$('#feedbackNavbar').html(html);
        // 回退
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

