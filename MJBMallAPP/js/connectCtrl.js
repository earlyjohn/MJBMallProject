/**
 * Created by Administrator on 2015/10/29.
 */
var connectCtrl = {
    init: function (e) {
        // ��������
        var html = "<div class='navbar-inner'><div class='left'>" +
            "<i class='icon spxq_icon-navbar'></i></div><div class='center'>��ϵ����"
            +"</div><div class='right'></div></div>";
        $$('#connectNavbar').html(html);
        // ����
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

