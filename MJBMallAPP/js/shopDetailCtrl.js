var shopDetailCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left' id='positon'><i class='icon search_icon-navbar'></i></div><div class='center home_back'>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品<i class='icon home_chose'></i><input id='u465_input' type='text' class='text_sketch' />"
                    + "</div><div class='right'><i class='icon home_search' id='search'></i></div></div>";
        $$('#shopDetailNavbar').html(html);
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });

        var query = $$.parseUrlQuery(e.detail.page.url);
        if(query.shop_id)
          var  shop_id =  query.shop_id;
        else
          var  shop_id = window.localStorage.getItem("userId");
        //获得店铺Logo
        uzu.rest.getJSON("goods/findShops", { 'shop_id': shop_id }, function (result) {
            if (!result.shopsList)
                return;
           $$('#shop_pic1').attr('src', result.shopsList[0].shop_pic);
            // $$('#phone_number').text(result.shopsList[0].phone_number);
            $$('#shopname').text(result.shopsList[0].shop_name);
            var credit = "";
            for (var i = 0; i < result.shopsList[0].credit_rating; i++)
                credit += "★";
            $$('#credit').text(credit);
            $$('#funs').text(result.funs_num);
        });
      //  $$('#test').on('click',function(){
        //   alert(shop_id);
        //});
        //全部商品
        uzu.rest.getJSON("goods/findGoods", { 'shop_id': shop_id }, function (result) {
            debugger;
            if (!result.goodsList)
                return;
            var context = {};
            context.productsList = result.goodsList;
            var productsTemplate = $$('#productsListTpl').html();
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
            $$('#secondTabProductsList').html(html);
        });
        //最新商品
        uzu.rest.getJSON("goods/findGoods", { 'shop_id': shop_id, 'orderBy': 2 }, function (result) {
            debugger;
            if (!result.goodsList)
                return;
            var context = {};
            context.productsList = result.goodsList;
            var productsTemplate = $$('#productsListTpl').html();
            var compiledProductsTemplate = Template7.compile(productsTemplate);
            var html = compiledProductsTemplate(context);
            $$('#threeTabProductsList').html(html);
        });

        //新店铺推广图片展示
        uzu.rest.getJSON("goods/findSpecShops", {},function(data){
            if(!data.shopsList)
                return;
            if(data.shopsList.length<6){
                for(var i=0;i<data.shopsList.length;i++){
                    if(data.shopsList[i].shop_pic == null){
                        document.getElementById("shop_newshop_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_newshop_pic"+(i+1)).src = data.shopsList[i].shop_pic;
                    }
                    document.getElementById("shop_newshop_a"+(i+1)).href = "shopDetail.html?shop_id="+data.shopsList[i].shop_id;
                }
                for(var i = data.shopsList.length;i<6;i++){
                    document.getElementById("shop_newshop_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<6;i++){
                    if(data.shopsList[i].shop_pic == null){
                        document.getElementById("shop_newshop_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_newshop_pic"+(i+1)).src = data.shopsList[i].shop_pic;
                    }
                    document.getElementById("shop_newshop_a"+(i+1)).href = "shopDetail.html?shop_id="+data.shopsList[i].shop_id;
                }
            }
        });


        //实时促销
        uzu.rest.getJSON("goods/findGoods",{'type':'1','shop_id':shop_id},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<4){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("shop_sscx_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_sscx_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("shop_sscx_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
                for(var i = data.goodsList.length;i<4;i++){
                    document.getElementById("shop_sscx_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<4;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("shop_sscx_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_sscx_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("shop_sscx_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
            }
        });

        //折扣返利
        uzu.rest.getJSON("goods/findGoods",{'type':'2','shop_id':shop_id},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<5){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("shop_zkfl_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_zkfl_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("shop_zkfl_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
                for(var i = data.goodsList.length;i<5;i++){
                    document.getElementById("shop_zkfl_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<5;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("shop_zkfl_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_zkfl_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("shop_zkfl_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
            }
        });

        //特价专区
        uzu.rest.getJSON("goods/findGoods",{'type':'3','shop_id':shop_id},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<8){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("shop_tjzq_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_tjzq_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("shop_tjzq_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
                for(var i = data.goodsList.length;i<8;i++){
                    document.getElementById("shop_tjzq_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<8;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("shop_tjzq_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_tjzq_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("shop_tjzq_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
            }
        });

        //限时抢购
        uzu.rest.getJSON("goods/findGoods",{'type':'4','shop_id':shop_id},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<8){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("shop_xsqg_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_xsqg_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("shop_xsqg_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
                for(var i = data.goodsList.length;i<8;i++){
                    document.getElementById("shop_xsqg_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<8;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("shop_xsqg_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_xsqg_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("shop_xsqg_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
            }
        });

        //热门推荐
        uzu.rest.getJSON("goods/findGoods",{'type':'5','shop_id':shop_id},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<4){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("shop_rmtj_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_rmtj_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("shop_rmtj_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
                for(var i = data.goodsList.length;i<4;i++){
                    document.getElementById("shop_rmtj_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<4;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("shop_rmtj_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("shop_rmtj_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("shop_rmtj_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;
                }
            }
        });
    }
};

