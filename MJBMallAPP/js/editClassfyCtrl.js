var editClassfyCtrl = {
    init: function (e) {

        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left' id='goBack'><i style='color: #FFFFFF;' class='icon icon-orderback'></i></div>"
                +"<div class='center'>类别名称</div><div class='right'><a href='editClassfy.html' class='link link-u' style='color: #FFFFFF;'></a></div></div>";
        $$('#editClassfyNavbar').html(html);
        // 回退
        $$('.icon-orderback').on('click', function () {
            mainView.router.back();
        });

    }
};

