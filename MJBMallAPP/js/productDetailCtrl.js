var productDetailCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner"id="pd_detail"><div class="left"><i style="color: #FFFFFF;" class="icon spxq_icon-navbar goBack_pd"></i></div>'+
        '<div class="center">商品详情 </div><div class="right"><i style="color: #FFFFFF;" class="icon spxq_enjoy"  id="enjoy"></i>'+
        '</div></div>';
        $$('#productDetailNavbar').html(html);
        // 底部导航栏

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

        $$('#productDetailNav').show();
        var query = $$.parseUrlQuery(e.detail.page.url);
        var goods_id = query.goods_id;
        var shopId;//店铺id
        var phone;//店铺电话
        var shop_address;//店铺地址
        var shop_jingdu;//店铺经度
        var shop_weidu;//店铺维度
        // 用户id
        var user_id = window.localStorage.getItem("userId");
        // 定位获得经纬度
        var jingdu = window.localStorage.getItem("jingdu");
        var weidu = window.localStorage.getItem("weidu");
        
        debugger;
        
        //插入最近浏览数据库表
         uzu.rest.getJSON("watched/addWatched", { 'user_id': user_id,'goods_id':goods_id }, function (data) {});

        uzu.rest.getJSON("goods/findGoods", { 'goods_id': goods_id }, function (data) {
            // 渲染模板
            debugger;
            shopId=data.goodsList[0].shop_id;
            debugger;
            phone = data.goodsList[0].phone_number;
			if(data.goodsList[0].big_pic != null){
				document.getElementById("product_pic1").src = data.goodsList[0].big_pic;
			}else{
				document.getElementById("product_pic1").src = "img/nopic.jpg"
			}
            $$('#productName').text(data.goodsList[0].name);
            $$('#productPrice').text(data.goodsList[0].price);
            $$('#productBrief').text(data.goodsList[0].brief);
            $$('#productAddress').text(data.goodsList[0].address);
            $$('#productPhone').text(data.goodsList[0].phone_number);
             //获得经纬度
       		uzu.rest.getJSON("goods/findShops", { 'shop_id': shopId }, function (result) {
            // 渲染模板
            debugger;
            shop_address = result.shopsList[0].address;
			shop_jingdu=result.shopsList[0].jingdu;
			shop_weidu = result.shopsList[0].weidu;
       		 });
        });
       
        //用户评论
        uzu.rest.getJSON("evaluate/findfirstEvaluate", { 'goods_id': goods_id }, function (data) {
            $$("#comment_count").text("(" + data.count + ")");
            if (data.evaluate) {
                $$("#head_pic1").attr('src', data.evaluate[0].head_pic);
                $$("#member_nickname1").text(data.evaluate[0].nickname);
                $$("#comment_content1").text(data.evaluate[0].evaluate);
                $$("#time_type").text(data.evaluate[0].time);
            }
        });
        //获得全部评论
        $$('#moreComment').on('click', function () {
            uzu.rest.getJSON("evaluate/findEvaluate", { 'goods_id': goods_id }, function (data) {
                if (data) {
                    var context = {};
                    context.commentList = data.evaluate;
                    var commentListTemplate = $$('#commentListTpl').html();
                    var compiledcommentListTemplate = Template7.compile(commentListTemplate);
                    var html = compiledcommentListTemplate(context);
                    $$('#commentList').html(html);
                }
            });
        });

        // 回退
        $$('.goBack_pd').on('click', function () {
			mainView.router.back();
        });
        // 加入购物车
        $$('.spxq_jrgwc').on('click', function () {
        	if (uzu.rest.isLogin()) {
            uzu.rest.getJSON("orders/addCarts", {
                'user_id': user_id,
                'goods_id': goods_id,
                'count': 1,
                'shop_id': 1
            },
            function (incrementData) {
                mainView.router.loadPage("shoppingCart.html");
            });
        	}
        });
        // 立即购买
        $$('.spxq_ljgm').on('click', function () {
        	if (uzu.rest.isLogin()) {
            mainView.router.loadPage("confirm-order.html");
           }
        });
        // 收藏
        $$('.spxq_sc').on('click', function () {
        	if (uzu.rest.isLogin()) {
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
                    alert('已收藏商品')
                }
            });
            }
        });
        // 店铺详情
        $$('.spxq_dp').on('click', function () {
            mainView.router.loadPage("shopDetail.html?shop_id="+shopId);
        });
        var mySwiper1 = myApp.swiper('.swiper-1', {
            pagination: '.swiper-1 .swiper-pagination',
            spaceBetween: 50
        });
        /*拨打电话*/
        $$('.call').on('click', function call(){
		    // 导入Activity、Intent类
		    var Intent = plus.android.importClass("android.content.Intent");
		    var Uri = plus.android.importClass("android.net.Uri");
		    // 获取主Activity对象的实例
		    var main = plus.android.runtimeMainActivity();
		    // 创建Intent
		    var uri = Uri.parse("tel:"+phone); // 这里可修改电话号码
		    var call = new Intent("android.intent.action.CALL",uri);
		    // 调用startActivity方法拨打电话
		    main.startActivity(call);
    	});
    	
    	/*打开地图*/
    	$$('.openMaps').on('click', function showMaps(){
    		alert("弹出地图");
    		// 设置目标位置坐标点和其实位置坐标点
			var dst = new plus.maps.Point(shop_jingdu,shop_weidu); // 目的地 
			var src = new plus.maps.Point(jingdu,weidu); // 起始地
			// 调用系统地图显示 
			plus.maps.openSysMap( dst, shop_address, src );
//			var ws=plus.webview.currentWebview();
//			var wm=plus.webview.getWebviewById(plus.runtime.appid);
//			wm&&wm.evalJS("preateClear()");
//			clicked('maps_map.html',false,true);
		});
    	/*分享*/
    	var shares = {};
		mui.plusReady(function() {
			plus.share.getServices(function(s) {
				if (s && s.length > 0) {
					for (var i = 0; i < s.length; i++) {
						var t = s[i];
						shares[t.id] = t;
					}
				}
			}, function() {
				console.log("获取分享服务列表失败");
			});
		});
    	$$('.spxq_enjoy').on('click',  function() {
			var ids = [{
					id: "weixin",
					ex: "WXSceneSession"
				}, {
					id: "weixin",
					ex: "WXSceneTimeline"
				}, {
					id: "sinaweibo"
				},  {
					id: "qq"
				}],
				bts = [{
					title: "发送给微信好友"
				}, {
					title: "分享到微信朋友圈"
				}, {
					title: "分享到新浪微博"
				},  {
					title: "分享到QQ"
				}];
			plus.nativeUI.actionSheet({
				cancel: "取消",
				buttons: bts
			}, function(e) {
				var i = e.index;
				if (i > 0) {
					var s_id = ids[i - 1].id;
					var share = shares[s_id];
					if (share) {
						if (share.authenticated) {
							shareMessage(share, ids[i - 1].ex);
						} else {
							share.authorize(function() {
								shareMessage(share, ids[i - 1].ex);
							}, function(e) {
								console.log("认证授权失败：" + e.code + " - " + e.message);
							});
						}
					} else {
						mui.toast("无法获取分享服务，请检查manifest.json中分享插件参数配置，并重新打包")
					}
				}
			});
		});

		function shareMessage(share, ex) {
				var msg = {
					extra: {
						scene: ex
					}
				};
				msg.href = "http://www.baidu.com/";
				msg.title = "百度一下你啥都会知道";
				msg.content = "我正在百度神器的事情";
				if (~share.id.indexOf('weibo')) {
					msg.content += "；体验地址：http://www.baidu.com/";
				}
				msg.thumbs = ["http://115.28.204.151:8088/img/login-icon.png"];
				share.send(msg, function() {
					console.log("分享到\"" + share.description + "\"成功！ ");
				}, function(e) {
					console.log("分享到\"" + share.description + "\"失败: " + e.code + " - " + e.message);
				});
				
		}
    	
    	
	}
}