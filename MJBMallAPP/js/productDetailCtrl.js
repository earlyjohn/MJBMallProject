var productDetailCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner"id="pd_detail"><div class="left"><i style="color: #FFFFFF;" class="icon spxq_icon-navbar goBack"></i></div>'+
        '<div class="center">商品详情 </div><div class="right editCart"><i style="color: #FFFFFF;" class="icon spxq_enjoy"></i>'+
        '</div></div>';
        $$('#productDetailNavbar').html(html);
        // 底部导航栏
        $$("#homeToolbar").show();
        $$("#productListNav").hide();
        $$("#productDetailNav").show();
        var query = $$.parseUrlQuery(e.detail.page.url);
        var goods_id = query.goods_id;
        // 用户id
        var user_id = window.localStorage.getItem("userId");
        //插入最近浏览数据库表
         uzu.rest.getJSON("watched/addWatched", { 'user_id': user_id,'goods_id':goods_id }, function (data) {});

        uzu.rest.getJSON("goods/findGoods", { 'goods_id': goods_id }, function (data) {
            // 渲染模板
            var context = {};
            context.productDetail = data.goodsList;
            var productDetailTemplate = $$('#productDetailTpl').html();
            var compiledproductDetailTemplate = Template7.compile(productDetailTemplate);
            var html = compiledproductDetailTemplate(context);
            $$('#productDetail').html(html);
        });
        // 回退
        $$('.goBack').on('click', function () {
            $$("#productDetailNav").show();
            $$("#productListNav").hide();
            mainView.router.back();
        });
        // 加入购物车
        $$('.spxq_jrgwc').on('click', function () {
            uzu.rest.getJSON("orders/addCarts", {
                'user_id': user_id,
                'goods_id': goods_id,
                'count': 1,
                'shop_id': 1
            },
            function (incrementData) {
                $$("#homeToolbar").hide();
                mainView.router.loadPage("shoppingCart.html");
            });
        });
        // 立即购买
        $$('.spxq_ljgm').on('click', function () {
            mainView.router.loadPage("confirm-order.html");
        });
        // 收藏
        $$('.spxq_sc').on('click', function () {
            uzu.rest.getJSON("collections/addCollections", {
                'user_id': user_id,
                'goods_id': goods_id,
                'count': 1,
                'shop_id': 1
            },
            function (addCollectionData) {
                if (addCollectionData.result.msg === "success") {
                    mainView.router.loadPage("Mycollection.html");
                } else {
                    alert('收藏失败')
                }
            });
        });
        // 店铺详情
        $$('.spxq_dp').on('click', function () {
            uzu.rest.getJSON("goods/findShops", { 'shop_id': 1 }, function (shopData) {
                $$("#homeToolbar").hide();
                mainView.router.loadPage("shoppingCart.html");
            });
        });
        var mySwiper1 = myApp.swiper('.swiper-1', {
            pagination: '.swiper-1 .swiper-pagination',
            spaceBetween: 50
        });
        /*拨打电话*/
        $$('#call').on('click', function call(){
		    // 导入Activity、Intent类
		    debugger;
		    var Intent = plus.android.importClass("android.content.Intent");
		    var Uri = plus.android.importClass("android.net.Uri");
		    // 获取主Activity对象的实例
		    var main = plus.android.runtimeMainActivity();
		    // 创建Intent
		    var uri = Uri.parse("tel:18222902657"); // 这里可修改电话号码
		    var call = new Intent("android.intent.action.CALL",uri);
		    // 调用startActivity方法拨打电话
		    main.startActivity(call);
    	});
    	/*分享*/
    	$$('.spxq_enjoy').on('click',function enjoy(){
    		debugger;
    		alert("获取分享服务列表失败：" + e.message);
			    plus.share.getServices(function(s) {
			    	alert("获取分享服务列表失败：" + e.message);
				 var ss = {};
				    for (var i in ss ) {
				        var s = ss[i];
				        var item = document.createElement("li");
				        item.setAttribute("class", "ditem");
				        item.setAttribute("onclick", (s.id == "weixin") ? "shareWeiXin(this.plusShare)" : "shareAction(this.plusShare)");
				        item.innerText = s.description;
				        alert("获取分享服务列表失败：" + s);
				        item.plusShare = s;
				        alert("获取分享服务列表失败：" + s );
				        document.getElementById('enjoylist').appendChild(item);
				        document.getElementById('enjoylist').show();
				    }
				}, function(e) {
				    alert("获取分享服务列表失败：" + e.message);
				});
		});
    	function shareAction(s, ex) {
		    outSet("分享操作：");
		    if (!s) {
		        outLine("无效的分享服务！");
		        return;
		    }
		    if (s.authenticated) {
		        outLine("---已授权---");
		        shareMessage(s, ex);
		    } else {
		        outLine("---未授权---");
		        s.authorize(function() {
		            shareMessage(s, ex);
		        }, function(e) {
		            outLine("认证授权失败：" + e.code + " - " + e.message);
		        });
		    }
		}
    	function shareMessage(s,ex){
		    var msg={content:sharecontent.value,extra:{scene:ex}};
		    if(pic&&pic.realUrl){
		        msg.pictures=[pic.realUrl];
		    }
		
		    s.send( msg, function(){
		        alert( "分享到\""+s.description+"\"成功！ " );
		    }, function(e){
		        alert( "分享到\""+s.description+"\"失败: "+e.code+" - "+e.message );
		    } );
		}
	}
}