var classfyCtrl = {
    init: function (e) {

        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left' id='firstClassfyBack'><i style='color: #FFFFFF;' class='icon icon-orderback'></i></div>"
        +"<div class='center'>分类</div><div class='right' id='editClassfy'><a href='editClassfy.html' class='link link-u' style='color: #FFFFFF;'>编辑</a></div></div>";
        $$('#classfyNavbar').html(html);
        // 回退
        $$('.icon-orderback').on('click', function () {
            mainView.router.back();
        });

    }
};

