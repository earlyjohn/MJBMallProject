var orderCtrl = {
   self:this,
    init: function (e) {

        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i class='icon spxq_icon-navbar'></i></div><div class='center'>我的订单</div>"
                +"<div class='right'><i class='icon'></i></div><div class='subnavbar subnavbar-u'><div class='buttons-row'>"
                 + "<a href='#tab2' class='button tab-link active' id='waitingPayOrder'>等待付款</a>"
                 +"<a href='#tab3' class='button tab-link' id='alreadyPayOrder'>已付款</a><a href='#tab4' class='button tab-link'id='closeOrder'>交易关闭</a>"
                 + "<a href='#tab5' class='button tab-link'id='finishOrder'>交易完成</a></div></div></div>";
        //var html = "<div class='navbar-inner'><div class='left'><i class='icon icon-orderback'></i></div><div class='center'>我的订单</div>"
        //       + "<div class='right'><i class='icon icon-search'></i></div></div>";
        $$('#orderNavbar').html(html);
        // 回退
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        /*搜索支付工具*/
       var pays={};
		mui.plusReady(function(){
			// 获取支付通道
			plus.payment.getChannels(function(channels){
				var content=document.getElementById('dcontent');
				var info=document.getElementById("info");
				var txt="支付通道信息：";
				for(var i in channels){
					var channel=channels[i];
					pays[channel.id]=channel;
					txt += "id:"+channel.id+", ";
					txt += "description:"+channel.description+", ";
					txt += "serviceReady:"+channel.serviceReady+"； ";
					checkServices(channel);
				}
			//	info.innerText=txt;
			},function(e){
				outLine("获取支付通道失败："+e.message);
			});
		});
		//document.addEventListener('plusready',plusReady,false);
		// 检测是否安装支付服务
		function checkServices(pc){
			if(!pc.serviceReady){
				var txt=null;
				switch(pc.id){
					case "alipay":
					txt="检测到系统未安装“支付宝快捷支付服务”，无法完成支付操作，是否立即安装？";
					break;
					default:
					txt="系统未安装“"+pc.description+"”服务，无法完成支付，是否立即安装？";
					break;
				}
				plus.nativeUI.confirm(txt,function(e){
					if(e.index==0){
						pc.installService();
					}
				},pc.description);
			}
		}
		
		var w=null;
		var PAYSERVER='http://demo.dcloud.net.cn/payment/?payid=';
        // 用户id
        var user_id = window.localStorage.getItem("userId");
        uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '1' }, function (data) {
            for (var i = 0; i < data.result.orderList.length; i++) {
                data.result.orderList[i].orderStatus = "等待付款";
            }
            // 渲染模板
            var context = {};
            context.waitingPayListData = data.result.orderList;
            var cartsListTemplate = $$('#waitingPayTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#waitingPayList').html(html);
            // 删除
            $$('#waitingPayDel').on('click', function (e) {
                debugger;
                var order_id = $$(this).data("id");
                uzu.rest.getJSON("orders/delOrderByOrderId", { 'order_id': order_id }, function (data) {
                    if (data.result.msg == "success") {
                        myApp.toast('删除成功', 'success').show(true);
                        mainView.router.loadPage("order.html");
                    } else {
                        myApp.toast('删除失败', 'error').show(true);
                    }
                });
            });
            // 支付
            $$('.goPay').on('click', function pay(id){
				if(w){return;}//检查是否请求订单中
				alert("----- 请求支付 -----");
				var url=PAYSERVER;
				var id = 'wxpay';
				if(id=='alipay'||id=='wxpay'){
					url+=id;
				}else{
					plus.nativeUI.alert("不支持此支付通道！",null,"捐赠");
					return;
				}
				url+='&appid='+plus.runtime.appid+'&total=';
				
				w=plus.nativeUI.showWaiting();
				// 请求支付订单
				var amount = document.getElementById('total').value;
				var xhr=new XMLHttpRequest();
				xhr.onreadystatechange=function(){
					switch(xhr.readyState){
						case 4:
						w.close();w=null;
						if(xhr.status==200){
							outLine("----- 请求订单成功 -----");
							outLine( xhr.responseText );
							var order=xhr.responseText;
							plus.payment.request(pays[id],order,function(result){
								outLine("----- 支付成功 -----");
								outLine(JSON.stringify(result));
								plus.nativeUI.alert("支付成功：感谢你的支持，我们会继续努力完善产品。",function(){
									back();
								},"捐赠");
							},function(e){
								outLine("----- 支付失败 -----");
								outLine("["+e.code+"]："+e.message);
								plus.nativeUI.alert("更多错误信息请参考支付(Payment)规范文档：http://www.html5plus.org/#specification#/specification/Payment.html",null,"支付失败："+e.code);
							});
						}else{
							outLine("----- 请求订单失败 -----");
							outLine( xhr.status );
							plus.nativeUI.alert("获取订单信息失败！",null,"捐赠");
						}
						break;
						default:
						break;
					}
				}
				xhr.open('GET',url+amount);
				outLine("请求支付订单："+url+amount);
				xhr.send();
				});
        });
        uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '2' }, function (data) {
            for (var i = 0; i < data.result.orderList.length; i++) {
                data.result.orderList[i].orderStatus = "已付款";
            }
            // 渲染模板
            var context = {};
            context.alreadPayListData = data.result.orderList;
            var cartsListTemplate = $$('#alreadyPayTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#alreadPayList').html(html);
            // 删除
            $$('#alreadyDel').on('click', function (e) {
                var order_id = $$(this).data("id");
                uzu.rest.getJSON("orders/delOrderByOrderId", { 'order_id': order_id }, function (data) {
                    if (data.result.msg == "success") {
                        myApp.toast('删除成功', 'success').show(true);
                        mainView.router.loadPage("order.html");
                    } else {
                        myApp.toast('删除失败', 'error').show(true);
                    }
                });
            });
            // 确认收货
            $$('#conformRecieve').on('click', function (e) {
                var order_id = $$(this).data("id");
                uzu.rest.getJSON("orders/updateOrderStatus", { 'order_id': order_id }, function (data) {
                    if (data.result.msg == "success") {
                        mainView.router.loadPage("order.html");
                    } else {
                        myApp.toast('失败', 'error').show(true);
                    }
                });
            });
        });
        uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '3' }, function (data) {
            for (var i = 0; i < data.result.orderList.length; i++) {
                data.result.orderList[i].orderStatus = "交易关闭";
            }
            // 渲染模板
            var context = {};
            context.closeListData = data.result.orderList;
            var cartsListTemplate = $$('#closeTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#closeList').html(html);
            // 删除
            $$('#closeOrderDel').on('click', function (e) {
                var order_id = $$(this).data("id");
                uzu.rest.getJSON("orders/delOrderByOrderId", { 'order_id': order_id }, function (data) {
                    if (data.result.msg == "success") {
                        myApp.toast('删除成功', 'success').show(true);
                        mainView.router.loadPage("order.html");
                    } else {
                        myApp.toast('删除失败', 'error').show(true);
                    }
                });
            });
           
        });
        uzu.rest.getJSON("orders/findOrderByUserId", { 'user_id': user_id, 'order_status': '4' }, function (data) {
            for (var i = 0; i < data.result.orderList.length; i++) {
                data.result.orderList[i].orderStatus = "交易完成";
            }
            // 渲染模板
            var context = {};
            context.finishListData = data.result.orderList;
            var cartsListTemplate = $$('#finishTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#finishList').html(html);
            // 删除
            $$('#finishOrderDel').on('click', function (e) {
                var order_id = $$(this).data("id");
                uzu.rest.getJSON("orders/delOrderByOrderId", { 'order_id': order_id }, function (data) {
                    if (data.result.msg == "success") {
                        myApp.toast('删除成功', 'success').show(true);
                        mainView.router.loadPage("order.html");
                    } else {
                        myApp.toast('删除失败', 'error').show(true);
                    }
                });
            });
            // 评价
            $$('#commonBtn').on('click',function(e){
                var order_id = $$(this).data("id");
                mainView.router.loadPage("publishEvaluate.html?order_id="+order_id);
            });
        });
       
    },
    getProductList: function (order, callback) {
        var qq = new Array();
        for (var i = 0; i < order.length; i++) {
            var order_id = order[i].order_id;
            uzu.rest.getJSON("orders/findGoodsByOrderId", { 'order_id': order_id }, function (result) {
                b = result.result.goodsList;
                qq.push(b)
                callback.call(this, qq)
            });
        }

    }
};

