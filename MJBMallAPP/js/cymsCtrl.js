var cymsCtrl = {
    init: function (e) {

        //获取上一个页面传过来的cat_id cat_name
        var query = $$.parseUrlQuery(e.detail.page.url);
        var cat_id = query.cat_id;
        var cat_name = query.cat_name;
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon search_icon-navbar'></i>"
                + "</div><div id='title' class='center'></div><div class='right'><i class='icon'></i></div></div>";
        $$('#cymsNavbar').html(html);
        $$('.search_icon-navbar').on('click', function () {
            mainView.router.back();
        });

        //设置当前页面的标题
        document.getElementById("title").innerHTML = cat_name;


        //获取二级分类
        uzu.rest.getJSON("goods/findClassify",{'parent_id': cat_id},function(data){
            if(!data.classifyList)
                return;
            var div = document.getElementById("secondclassify");
            for(var i=0;i<data.classifyList.length;i++){
                var childdiv = document.createElement("div");
                childdiv.className = "hyfl_third home_float";
                childdiv.innerHTML = data.classifyList[i].cat_name;
                (function(){
                    var p = i
                    childdiv.onclick = function() {
                        mainView.router.loadPage("productsList.html?cat_id="+data.classifyList[p].cat_id);
                    }
                })();
                div.appendChild(childdiv);
            }
        });

        //设置相关咨询的连接
        document.getElementById("xgzx_a").href = "ziXunList.html?parent_id="+cat_id;

        //相关资讯初始化
        uzu.rest.getJSON("connectinfo/findConnectInfoByCatId",{'parent_id':cat_id},function(data){
            if(!data.result.connectInfoList)
                return;
            document.getElementById("shopName").innerHTML = data.result.connectInfoList[0].shop_name;
            document.getElementById("content").innerHTML = data.result.connectInfoList[0].content;
            document.getElementById("time").innerHTML = data.result.connectInfoList[0].publishtime;

        });

        //新店铺推广图片展示
        uzu.rest.getJSON("goods/findSpecShops", {'cat_id':cat_id},function(data){
            if(!data.shopsList)
                return;
            if(data.shopsList.length<6){
                for(var i=0;i<data.shopsList.length;i++){
                    if(data.shopsList[i].shop_pic == null){
                        document.getElementById("cat_newshop_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_newshop_pic"+(i+1)).src = data.shopsList[i].shop_pic;
                    }
                    document.getElementById("cat_newshop_a"+(i+1)).href = "shopDetail.html?shop_id="+data.shopsList[i].shop_id;
                }
                for(var i = data.shopsList.length;i<6;i++){
                    document.getElementById("cat_newshop_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<6;i++){
                    if(data.shopsList[i].shop_pic == null){
                        document.getElementById("cat_newshop_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_newshop_pic"+(i+1)).src = data.shopsList[i].shop_pic;
                    }
                    document.getElementById("cat_newshop_a"+(i+1)).href = "shopDetail.html?shop_id="+data.shopsList[i].shop_id;
                }
            }
        });


        //nopic.jpg是没有商品    msg-pay.png是有商品但是没有图片
        //实时促销
        uzu.rest.getJSON("goods/findGoods",{'type':1,'cat_id':cat_id},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<3){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("cat_sscx_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_sscx_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("cat_sscx_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;

                }
                for(var i = data.goodsList.length;i<3;i++){
                    document.getElementById("cat_sscx_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<3;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("cat_sscx_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_sscx_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("cat_sscx_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;

                }
            }
        });


        //折扣返利
        uzu.rest.getJSON("goods/findGoods",{'type':2,'cat_id':cat_id},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<5){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("cat_zkfl_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_zkfl_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("cat_zkfl_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;

                }
                for(var i = data.goodsList.length;i<5;i++){
                    document.getElementById("cat_zkfl_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<5;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("cat_zkfl_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_zkfl_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("cat_zkfl_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;

                }
            }
        });

        //特价专区
        uzu.rest.getJSON("goods/findGoods",{'type':3,'cat_id':cat_id},function(data){
            if(!data.goodsList)
                return;
            //
            if(data.goodsList.length<8){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("cat_tjzq_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_tjzq_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("cat_tjzq_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;

                }
                for(var i = data.goodsList.length;i<8;i++){
                    document.getElementById("cat_tjzq_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<8;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("cat_tjzq_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_tjzq_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("cat_tjzq_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;

                }
            }
        });

        //限时抢购
        uzu.rest.getJSON("goods/findGoods",{'type':4,'cat_id':cat_id},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<8){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("cat_xsqg_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_xsqg_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("cat_xsqg_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;

                }
                for(var i = data.goodsList.length;i<8;i++){
                    document.getElementById("cat_xsqg_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<8;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("cat_xsqg_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_xsqg_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("cat_xsqg_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;

                }
            }
        });

        //热门推荐
        uzu.rest.getJSON("goods/findGoods",{'type':5,'cat_id':cat_id},function(data){
            if(!data.goodsList)
                return;
            if(data.goodsList.length<4){
                for(var i=0;i<data.goodsList.length;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("cat_rmtj_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_rmtj_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("cat_rmtj_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;

                }
                for(var i = data.goodsList.length;i<4;i++){
                    document.getElementById("cat_rmtj_pic"+(i+1)).src = "img/nopic.jpg";
                }
            }else{
                for(var i=0;i<4;i++){
                    if(data.goodsList[i].big_pic == null){
                        document.getElementById("cat_rmtj_pic"+(i+1)).src = "img/msg-pay.png";
                    }else{
                        document.getElementById("cat_rmtj_pic"+(i+1)).src = data.goodsList[i].big_pic;
                    }
                    document.getElementById("cat_rmtj_a"+(i+1)).href = "productDetail.html?goods_id="+data.goodsList[i].goods_id;

                }
            }
        });
    }
};

