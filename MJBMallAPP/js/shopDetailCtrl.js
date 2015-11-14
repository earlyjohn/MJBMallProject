var shopDetailCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left' id='positon'><i class='icon search_icon-navbar'></i></div><div class='center home_back'>"
                    + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品<i class='icon home_chose'></i><input id='u465_input' type='text' class='text_sketch' />"
                    + "</div><div class='right'><i class='icon home_search' id='search'></i></div></div>";
        $$('#shopDetailNavbar').html(html);
        //$$("#homeToolbar").show();
      //  $$("#productListNav").show();
      //  $$("#productDetailNav").hide();
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });

        var query = $$.parseUrlQuery(e.detail.page.url);
        var shop_id = query.shop_id;

        $$('#test').on('click',function(){
           alert(shop_id);
        });

		//获得店铺Logo
        var user_id = window.localStorage.getItem("userId");
      //  var shop_id;
        uzu.rest.getJSON("members/findShopowner", { 'shopowner_id': user_id }, function (result) {
            if (!result.shopownerinfo)
                return;
           // shop_id = result.shopownerinfo[0].shop_id;
            $$('#shop_pic').attr('src', result.shopownerinfo[0].shop_pic);
            $$('#shopname').text(result.shopownerinfo[0].shop_name);
            var credit = "";
            for (var i = 0; i < result.shopownerinfo[0].credit_rating; i++)
                credit += "★";
            $$('#credit').text(credit);
            $$('#funs').text(result.funs_num);
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

