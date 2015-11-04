/**
 * Created by Administrator on 2015/10/29.
 */
var aboutCtrl = {
    init: function (e) {
        // ��������
        var html2 = "<div class='navbar-inner'><div class='left'><i class='icon spxq_icon-navbar'></i></div><div class='center'>关于美居宝"
            +"</div><div class='right'></div></div>";
        $$('#aboutNavbar').html(html2);
        // ����
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

