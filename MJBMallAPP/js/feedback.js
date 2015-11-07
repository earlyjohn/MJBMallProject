/**
 * Created by Administrator on 2015/10/29.
 */
/**
 * Created by Administrator on 2015/10/29.
 */
var feedbackCtrl = {
    init: function (e) {
        // ��������
        var html = "<div class='navbar-inner'><div class='left'>" +
            "<i class='icon spxq_icon-navbar'></i></div><div class='center'>意见反馈"
            +"</div><div class='right'></div></div>";
        $$('#feedbackNavbar').html(html);
        // ����
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

