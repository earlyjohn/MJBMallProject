/**
 * Created by Administrator on 2015/10/29.
 */
var aboutCtrl = {
    init: function (e) {
        // ��������
        var html = "<div class='navbar-inner'><div class='left'><i class='icon spxq_icon-navbar'></i></div><div class='center'>��������"
            +"</div><div class='right'></div></div>";
        $$('#aboutNavbar').html(html);
        // ����
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });

    }
};

