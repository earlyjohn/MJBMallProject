var delrecentvisitCtrl = {
    init: function (e) {

        // ��������
        var html = '<div class="navbar-inner"><a class="left"><i class="icon spxq_icon-navbar"></i></a><div class="center">������</div><div class="right editCart"><a  class="link link-u clear" style="color: white">���</a></div></div>';
        $$('#delrecentvisitNavbar').html(html);
        // ����
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.loadPage("personalCenter.html");
        });
    }
};
