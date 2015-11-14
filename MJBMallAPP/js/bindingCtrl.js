var bindingCtrl = {
    init: function (e) {
        var self = this;
        window.sendFlag = true;
		var query = $$.parseUrlQuery(e.detail.page.url);
        var nickname = query.nickname;
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left'><i style='color: #FFFFFF;' class='icon spxq_icon-navbar'></i>"
            + "</div><div class='center'>绑定账号</div><div class='right'><a href='#' class='link link-u' style='color: #FFFFFF;'></a></div></div>";
        $$('#updatePasswordNavbar').html(html);
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
        $$('#nextBtn').on('click', function () {
        	var phonenumber = $$('#phoneNumber').val();
        	var registerpassword = $$('#registerPassword').val();
        	if (!phonenumber || !registerpassword) {
                myApp.toast('手机号或密码不能为空', 'error').show(true);
                // myApp.toast('请输入账号或密码', 'tips').show(true);
                // myApp.toast('注册成功', 'success').show(true);
                return;
            }
        	uzu.rest.getJSON("register/register", { 'username': nickname, 'password': registerpassword, 'phone': phonenumber }, function (data) {
                        
                        if (data.status == "0") {
                        	alert(nickname);
                        	//需要将用户名改为phone
                            uzu.rest.getJSON("login/login", { 'username': nickname, 'password': registerpassword }, function (result) {
				                if (result.status == "0") {
				                    // 将用户id进行缓存
				                    window.localStorage.setItem("userId", result.id);
				                    //var userId = window.localStorage.getItem("userId");
				                    mainView.router.loadPage("home.html");
				                } else if (result.status == "3") {
				                    myApp.toast('请输入账号或密码', 'error').show(true);
				                } else {
				                    myApp.toast('账号或密码错误', 'error').show(true);
				                }
				            });
                        }
                        else if (data.status == "4") {
                            myApp.toast('手机号已注册，请重试', 'error').show(true);
                            return;
                        }
                        else if (data.status == "2") {
                            myApp.toast('用户名已存在，请重试', 'error').show(true);
                            return;

                        } else if (data.status == "3") {
                            myApp.toast('请输入账号或密码', 'error').show(true);
                            return;
                        }
                        else {
                            myApp.toast('注册失败，请重试', 'error').show(true);
                            return;

                        }
                    });
//      	alert(nickname);
//          mainView.router.loadPage("home.html");
        });
    }
};

