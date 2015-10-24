var homeCtrl = {
    init: function (e) {
        var mySwiper1 = myApp.swiper('.swiper-1', {
            pagination: '.swiper-1 .swiper-pagination',
            spaceBetween: 50
        });
        var html = "<div class='navbar-inner'><div class='left positon'>北京<i class='icon home_icon-navbar'></i></div>"
            + "<div class='center home_back'>" + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "商品<i class='icon home_chose'></i>"
            + "<input id='u465_input' type='text'  class='text_sketch' /> <i class='icon home_search' id='search'></i>"
            + "</div><div class='right'><i class='icon home_message'></i></div></div>";
        $$('#homeNavbar').html(html);
        $$('#homeNavbar').show();
        // 显示底部菜单
        $$('#homeToolbar').show();
        // 轮播
        var context = {};
        var imgList = new Array();
        imgList.push({ imgUrl: 'img/demo/page2.jpg' });
        imgList.push({ imgUrl: 'img/demo/lunbo1.png' });
        imgList.push({ imgUrl: 'img/demo/lunbo2.png' });
        imgList.push({ imgUrl: 'img/demo/lunbo3.png' });
        imgList.push({ imgUrl: 'img/demo/lunbo1.png' });
        context.recycleImgList = imgList;
        var recycleImgsTemplate = $$('#recycleImgsTpl').html();
        var compiledRecycleImgsTemplate = Template7.compile(recycleImgsTemplate);
        var html = compiledRecycleImgsTemplate(context);
        $$('#recycleImgs').html(html);
        // 行业分类模板
        //$$.ajax({
        //    type: "GET",
        //    async: false,
        //    url: "http://120.25.146.176:8888/MJBMall/goods/findGoods?callback=",
        //    dataType: "json",
        //    success: function (data) {
        //        if (!data.goodsList)
        //            return;
        //        // 渲染模板
        //        var context = {};
        //        var industyList1 = new Array();
        //        var industyList2 = new Array();
        //        industyList1.push({ imgUrl: 'img/home/cyms.png' });
        //        industyList1.push({ imgUrl: 'img/home/tcjy.png' });
        //        industyList1.push({ imgUrl: 'img/home/fc.png' });
        //        industyList1.push({ imgUrl: 'img/home/csdg.png' });
        //        industyList1.push({ imgUrl: 'img/home/jypx.png' });
        //        industyList2.push({ imgUrl: 'img/home/jdlg.png' });
        //        industyList2.push({ imgUrl: 'img/home/ylxh.png' });
        //        industyList2.push({ imgUrl: 'img/home/fzfs.png' });
        //        industyList2.push({ imgUrl: 'img/home/sjtx.png' });
        //        industyList2.push({ imgUrl: 'img/home/gd.png' });
        //        context.industyList1 = industyList1;
        //        var productsTemplate = $$('#industryClassfy1Tpl').html();
        //        var compiledProductsTemplate = Template7.compile(productsTemplate);
        //        var html = compiledProductsTemplate(context);
        //        $$('#industryClassfy1').html(html);
        //        context.industyList2 = industyList2;
        //        var productsTemplate2 = $$('#industryClassfy1Tpl2').html();
        //        var compiledProductsTemplate2 = Template7.compile(productsTemplate2);
        //        var html2 = compiledProductsTemplate2(context);
        //        $$('#industryClassfy2').html(html2);
        //        $$('.hangyefenlei').on('click', function () {
        //            mainView.router.loadPage("productsList.html");
        //        });
        //    },
        //    error: function (e) {
        //        alert("error");
        //    }
        //});
        $$('.secondClassfy').on('click', function () {
            mainView.router.loadPage("productsList.html");
        });
        $$('.home_sy').on('click', function () {
            mainView.router.loadPage("home.html");
        });
        $$('.home_sb').on('click', function () {
            mainView.router.loadPage("side.html");
        });
        $$('.home_fl').on('click', function () {
            mainView.router.loadPage("firstClassfy.html");
        });
        $$('.home_gwc').on('click', function () {
            mainView.router.loadPage("shoppingCart.html");
        });
        $$('.home_wd').on('click', function () {
            mainView.router.loadPage("personalCenter.html");
        });
        // 定位
        $$('.home_icon-navbar').on('click', function () {
            mainView.router.loadPage("position.html");
        });


    }
};

