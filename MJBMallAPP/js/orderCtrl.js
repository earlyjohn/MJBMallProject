﻿var orderCtrl = {
    init: function (e) {

        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-orderback'></i></div><div class='center'>我的订单</div>"
                +"<div class='right'><i class='icon icon-search'></i></div><div class='subnavbar subnavbar-u'><div class='buttons-row'>"
                 +"<a href='#tab1' class='button tab-link active'>全部</a><a href='#tab2' class='button tab-link'>待确定</a>"
                 +"<a href='#tab3' class='button tab-link'>待付款</a><a href='#tab4' class='button tab-link'>待发货</a>"
                 +"<a href='#tab5' class='button tab-link'>待收货</a></div></div></div>";
        $$('#orderNavbar').html(html);
        // 回退
        $$('.icon-orderback').on('click', function () {
            mainView.router.back();
        });

    }
};
