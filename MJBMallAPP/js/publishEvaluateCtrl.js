/**
 * Created by Administrator on 2015/10/29.
 */
/**
 * Created by Administrator on 2015/10/29.
 */
var publishEvaluateCtrl = {
    init: function (e) {
        // ��������
        var html = "<div class='navbar-inner'><div class='left'>" +
            "<i class='icon spxq_icon-navbar'></i></div><div class='center'>发表评价"
            +"</div><div class='right'></div></div>";
        $$('#publishEvaluateNavbar').html(html);
        // ����
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

