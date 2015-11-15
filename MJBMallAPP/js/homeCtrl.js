var homeCtrl = {
    init: function (e) {
        var mySwiper1 = myApp.swiper('.swiper-1', {
            pagination: '.swiper-1 .swiper-pagination',
            spaceBetween: 50,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
        var html = "<div class='navbar-inner'>" +
            "<div class='left positon'>北京<i class='icon home_icon-navbar'></i></div>"
            + "<div class='center home_back'>" +
            "<ul><li class='selectSearch' style='padding-left: 5%;width: 20%;'>商品</li>" +
            "<li style='width: 10%'><i class='icon home_chose'style='position: absolute;top:15px;'></i></li>" +
            "<li style='width: 40%'><input id='u465_input' type='text'  class='text_sketch' placeholder='请输入关键字' style='width: auto; position: relative;left: 10px;}'/></li>" +
            "<li style='position: absolute;right: 5%;top: 10px;width: 15%;'><i class='icon home_search' id='search'></i></li>" +
            "</ul></div>" +
            "<div class='right'><i class='icon home_message'></i></div>" +
            "</div>";
        $$('#homeNavbar').html(html);
        // 显示底部菜单
        $$('#homeToolbar').show();

        //轮播
        uzu.rest.getJSON("crlAvg/findCrlAvg",{},function(data){
            if(!data.crlAvg)
                return;
            if(data.crlAvg.length<5){
                for(var i=0;i<data.crlAvg.length;i++){
                    document.getElementById("home_lunbo_pic"+(i+1)).src = data.crlAvg[i].pic;
                }
            }else{
                for(var i=0;i<5;i++){
                    document.getElementById("home_lunbo_pic"+(i+1)).src = data.crlAvg[i].pic;
                }
            }
        });
        // 行业分类模板
        //$$.ajax({
        //    type: "GET",
        //    async: false,
        //    url: "http://115.28.204.151:8088/MJBMall/goods/findGoods?callback=",
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
        var searchType = 0;
        $$('.secondClassfy').on('click', function () {
            mainView.router.loadPage("productsList.html");
        });
        $$('.home_message').on('click',function(){
            mainView.router.loadPage("message.html");
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
           if (uzu.rest.isLogin()) {
                mainView.router.loadPage("shoppingCart.html");
            }
        });
        $$('.home_wd').on('click', function () {
            mainView.router.loadPage("personalCenter.html");
        });
        // 定位
        $$('.home_icon-navbar').on('click', function () {
            mainView.router.loadPage("position.html");
        });
        // 搜素
        $$('#search').on('click', function () {
            mainView.router.loadPage("search.html?searchType=" + searchType);
        }); // 点击搜索选项
        $$('.home_chose').on('click', function () {
            $$("#searchChose").show();
        });
        // 选择商品
        $$('.searchProduct').on('click', function () {
            searchType = 0;
            $$(".selectSearch").text("商品");
            $$("#searchChose").hide();
        });
        // 选择店铺
        $$('.searchShop').on('click', function () {
            searchType = 1;
            $$(".selectSearch").text("店铺");
            $$("#searchChose").hide();
        });


        //行业分类跳转
        //$$('#cat_1').on('click',function(){
        //   var cat_id = 1;
        //    mainView.router.loadPage("cyms.html?cat_id="+cat_id);
        //});
        //需要获取全局的user_id值
        var user_id = window.localStorage.getItem("userId");

        //nopic.jpg是没有商品    msg-pay.png是有商品但是没有图片
        //TODO
        //行业分类获取以及点击事件的设置
        uzu.rest.getJSON("goods/findUserGoodsClassify",{'user_id':user_id},function(data){
            if(!data.classifyList)
                return;
            if(data.userChoose.length == 0){
                if(data.classifyList.length<9){
                    for(var i=0;i<data.classifyList.length;i++){
                        if(data.classifyList[i].iconUrl == null){
                            document.getElementById("hyfl_pic"+(i+1)).src = "img/msg-pay.png";
                        }else{
                            document.getElementById("hyfl_pic"+(i+1)).src = data.classifyList[i].iconUrl;
                        }
                        document.getElementById("hyfl_a"+(i+1)).href = "cyms.html?cat_id="+data.classifyList[i].cat_id+"&cat_name="+data.classifyList[i].cat_name;
                    }
                    for(var i = data.classifyList.length;i<6;i++){
                        document.getElementById("hyfl_pic"+(i+1)).src = "img/nopic.jpg";
                    }
                }else{
                    for(var i=0;i<9;i++){
                        if(data.classifyList[i].iconUrl == null){
                            document.getElementById("hyfl_pic"+(i+1)).src = "img/msg-pay.png";
                        }else{
                            document.getElementById("hyfl_pic"+(i+1)).src = data.classifyList[i].iconUrl;
                        }
                        document.getElementById("hyfl_a"+(i+1)).href = "cyms.html?cat_id="+data.classifyList[i].cat_id+"&cat_name="+data.classifyList[i].cat_name;
                    }
                }
            }else{
               for(var i=0;i<9;i++){
                   if(data.classifyList[i].iconUrl == null){
                       document.getElementById("hyfl_pic"+(i+1)).src = "img/msg-pay.png";
                   }else{
                       document.getElementById("hyfl_pic"+(i+1)).src = data.classifyList[i].iconUrl;
                   }
                   document.getElementById("hyfl_a"+(i+1)).href = "cyms.html?cat_id="+data.classifyList[i].cat_id+"&cat_name="+data.classifyList[i].cat_name;
               }
            }
        });


        //新店铺推广图片展示
        uzu.rest.getJSON("goods/findSpecShops", {},function(data){
            if(!data.shopsList)
                return;
            if(data.shopsList.length<6){
                for(var i=0;i<data.shopsList.length;i++){
                    if(data.shopsList[i].shop_pic == null){
                        document.getElementById("newshop_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("newshop_pic"+(i+1)).src = data.shopsList[i].shop_pic;
                    }
                    document.getElementById("newshop_a"+(i+1)).href = "shopDetail.html?shop_id="+data.shopsList[i].shop_id;
                }
                for(var i = data.shopsList.length;i<6;i++){
                    document.getElementById("newshop_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<6;i++){
                    if(data.shopsList[i].shop_pic == null){
                        document.getElementById("newshop_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("newshop_pic"+(i+1)).src = data.shopsList[i].shop_pic;
                    }
                    document.getElementById("newshop_a"+(i+1)).href = "shopDetail.html?shop_id="+data.shopsList[i].shop_id;
                }
            }
        });

        //实时促销
        uzu.rest.getJSON("goods/findGoods",{'type':'1'},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<4){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("sscx_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("sscx_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("sscx_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
                for(var i = data.goodsList.length;i<4;i++){
                    document.getElementById("sscx_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<4;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("sscx_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("sscx_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("sscx_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
            }
        });

        //折扣返利
        uzu.rest.getJSON("goods/findGoods",{'type':'2'},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<5){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("zkfl_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("zkfl_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("zkfl_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
                for(var i = data.goodsList.length;i<5;i++){
                    document.getElementById("zkfl_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<5;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("zkfl_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("zkfl_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("zkfl_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
            }
        });

        //特价专区
        uzu.rest.getJSON("goods/findGoods",{'type':'3'},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<8){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("tjzq_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("tjzq_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("tjzq_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
                for(var i = data.goodsList.length;i<8;i++){
                    document.getElementById("tjzq_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<8;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("tjzq_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("tjzq_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("tjzq_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
            }
        });

        //限时抢购
        uzu.rest.getJSON("goods/findGoods",{'type':'4'},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<8){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("xsqg_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("xsqg_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("xsqg_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
                for(var i = data.goodsList.length;i<8;i++){
                    document.getElementById("xsqg_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<8;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("xsqg_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("xsqg_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("xsqg_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
            }
        });

        //热门推荐
        uzu.rest.getJSON("goods/findGoods",{'type':'5'},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<4){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("rmtj_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("rmtj_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("rmtj_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
                for(var i = data.goodsList.length;i<4;i++){
                    document.getElementById("rmtj_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<4;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("rmtj_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("rmtj_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("rmtj_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
            }
        });
    }
};

