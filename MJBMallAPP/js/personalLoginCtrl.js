var personalLoginCtrl = {
    init: function (e) {
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
       
        $$('#personalLogin1').on('click', function () {
            var userName = $$("#username").val();
            var password = $$("#password").val();
            if (!userName || !password) {
                myApp.toast('请输入账号或密码', 'error').show(true);
                return;
            }
            uzu.rest.getJSON("login/login", { 'username': userName, 'password': password }, function (result) {
                if (result.status == "0") {
                    // 将用户id进行缓存
                    window.localStorage.setItem("userId", result.id);
                    //personalLoginCtrl.getPosBaidu();
                    //var userId = window.localStorage.getItem("userId");
                    mainView.router.loadPage("home.html");
                } else if (result.status == "3") {
                    myApp.toast('请输入账号或密码', 'error').show(true);
                } else {
                    myApp.toast('账号或密码错误', 'error').show(true);
                }
            });
        });
   /*qq登录*/
      var auths={};
		mui.plusReady(function() {
			 // 获取登录认证通道
		plus.oauth.getServices(function(services){
			var content=document.getElementById('dcontent');
			var txt="登录认证通道信息：";
			for(var i in services){
				var service=services[i];
				console.log(service.id+": "+service.authResult+", "+service.userInfo);
				auths[service.id]=service;
				txt += "id:"+service.id+", ";
				txt += "description:"+service.description+", ";
			}
			},function(e){
				outLine("获取登录认证失败："+e.message);
			});
		});
		// qq登录认证
		$$('#qqLogin').on('click',function login(id){
			alert("----- 登录认证 -----");
			id='qq';
			var auth=auths[id];
			if(auth){
				var w=null;
				if(plus.os.name=="Android"){
					w=plus.nativeUI.showWaiting();
				}
				document.addEventListener("pause",function(){
					setTimeout(function(){
						w&&w.close();w=null;
					},2000);
				}, false );
				auth.login(function(){
					w&&w.close();w=null;
					outLine("登录认证成功：");
					outLine(JSON.stringify(auth.authResult));
					userinfo(auth);
				},function(e){
					w&&w.close();w=null;
					outLine("登录认证失败：");
					outLine("["+e.code+"]："+e.message);
					plus.nativeUI.alert("详情错误信息请参考授权登录(OAuth)规范文档：http://www.html5plus.org/#specification#/specification/OAuth.html",null,"登录失败["+e.code+"]："+e.message);
				});
			}else{
				outLine("无效的登录认证通道！");
				plus.nativeUI.alert("无效的登录认证通道！",null,"登录");
			}
		});
		// 新浪登录认证
		$$('#sinaLogin').on('click',function login(id){
			alert("----- 登录认证 -----");
			id='sinaweibo';
			var auth=auths[id];
			if(auth){
				var w=null;
				if(plus.os.name=="Android"){
					w=plus.nativeUI.showWaiting();
				}
				document.addEventListener("pause",function(){
					setTimeout(function(){
						w&&w.close();w=null;
					},2000);
				}, false );
				auth.login(function(){
					w&&w.close();w=null;
					outLine("登录认证成功：");
					outLine(JSON.stringify(auth.authResult));
					userinfo(auth);
				},function(e){
					w&&w.close();w=null;
					outLine("登录认证失败：");
					outLine("["+e.code+"]："+e.message);
					plus.nativeUI.alert("详情错误信息请参考授权登录(OAuth)规范文档：http://www.html5plus.org/#specification#/specification/OAuth.html",null,"登录失败["+e.code+"]："+e.message);
				});
			}else{
				outLine("无效的登录认证通道！");
				plus.nativeUI.alert("无效的登录认证通道！",null,"登录");
			}
		});
		// weixin登录认证
		$$('#weixinLogin').on('click',function login(id){
			alert("----- 登录认证 -----");
			id='weixin';
			var auth=auths[id];
			if(auth){
				var w=null;
				if(plus.os.name=="Android"){
					w=plus.nativeUI.showWaiting();
				}
				document.addEventListener("pause",function(){
					setTimeout(function(){
						w&&w.close();w=null;
					},2000);
				}, false );
				auth.login(function(){
					w&&w.close();w=null;
					outLine("登录认证成功：");
					outLine(JSON.stringify(auth.authResult));
					userinfo(auth);
				},function(e){
					w&&w.close();w=null;
					outLine("登录认证失败：");
					outLine("["+e.code+"]："+e.message);
					plus.nativeUI.alert("详情错误信息请参考授权登录(OAuth)规范文档：http://www.html5plus.org/#specification#/specification/OAuth.html",null,"登录失败["+e.code+"]："+e.message);
				});
			}else{
				outLine("无效的登录认证通道！");
				plus.nativeUI.alert("无效的登录认证通道！",null,"登录");
			}
		});
		// 获取用户信息
		function userinfo(a){
			outLine("----- 获取用户信息 -----");
			a.getUserInfo(function(){
				outLine("获取用户信息成功：");
				outLine(JSON.stringify(a.userInfo));
				var nickname=a.userInfo.nickname||a.userInfo.name;
				plus.nativeUI.alert("欢迎“"+nickname+"”登录！");
				mainView.router.loadPage("binding.html?nickname="+nickname);
			},function(e){
				outLine("获取用户信息失败：");
				outLine("["+e.code+"]："+e.message);
				plus.nativeUI.alert("获取用户信息失败！",null,"登录");
			});
		}
		// 注销登录
		function logoutAll(){
			outSet("----- 注销登录认证 -----");
			for(var i in auths){
				logout(auths[i]);
			}
		}
		function logout(auth){
			auth.logout(function(){
				outLine("注销\""+auth.description+"\"成功");
			},function(e){
				outLine("注销\""+auth.description+"\"失败："+e.message);
			});
		}
    },
    getPosBaidu: function () {
        plus.geolocation.getCurrentPosition(personalLoginCtrl.geoInf(), function (e) {
        }, { provider: 'baidu' });
    },
    geoInf: function () {
        var str = "";
        str += "地址：" + position.addresses + "\n";//获取地址信息
        var timeflag = position.timestamp;//获取到地理位置信息的时间戳；一个毫秒数；
        str += "时间戳：" + timeflag + "\n";
        var codns = position.coords;//获取地理坐标信息；
        var lat = codns.latitude;//获取到当前位置的纬度；
        str += "纬度：" + lat + "\n";
        var longt = codns.longitude;//获取到当前位置的经度
        str += "经度：" + longt + "\n";
        var alt = codns.altitude;//获取到当前位置的海拔信息；
        str += "海拔：" + alt + "\n";
        var accu = codns.accuracy;//地理坐标信息精确度信息；
        str += "精确度：" + accu + "\n";
        var altAcc = codns.altitudeAccuracy;//获取海拔信息的精确度；
        str += "海拔精确度：" + altAcc + "\n";
        var head = codns.heading;//获取设备的移动方向；
        str += "移动方向：" + head + "\n";
        var sped = codns.speed;//获取设备的移动速度；
        str += "移动速度：" + sped;
        console.log(JSON.stringify(position));
        window.localStorage.setItem("jingdu", position.coords.longt);
        window.localStorage.setItem("weidu", position.coords.lat);
        alert(str);
    }
}