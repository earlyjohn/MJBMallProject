var aboutCtrl = {
    init: function (e) {
        // ��������
        var html2 = "<div class='navbar-inner'><a class='left'><i class='icon spxq_icon-navbar'></i></a><div class='center'>�༭���ﳵ"
                + "</div><div class='right' id='order'><a href='shoppingCart.html' class='link link-u' style='color: white>'���</a></div></div>";
        $$('#aboutNavbar').html(html2);
        // ����
        $$('.icon-orderback').on('click', function () {
            mainView.router.back();
        });

    }
};

