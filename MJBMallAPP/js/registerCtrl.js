var registerCtrl = {
    init: function (e) {
        // 回退
        $$('.topLeftIcon').on('click', function () {
            mainView.router.back();
        });
        // 发送验证吗
        $$('.messageSendBtn').on('click', function () {
            myApp.alert("调用发送验证码接口");
        });
        $$('.registerBtn').on('click', function () {
            var userName = $$("#userName").val();
			alert(userName);
            var password = $$("#registerPassword").val();
			alert(password);
			var phone = $$("#phoneNumber").val();
			alert(phone);
            if (!userName || !password) {
				debugger;
                myApp.alert("请输入账号或密码", "error");
				return;
            }

            $$.ajax({
                type: "POST",
                async: false,
                url: "http://115.28.204.151:8080/MJBMall/register/register?username=" + userName + "&password=" + password + "&phone=" + phone + "&callback=",
                dataType: "json",
                success: function (data) {
					alert(data.status);
                    debugger;
                    if (data.status == "0") {
						debugger;
                        myApp.alert("注册成功", "success");
                        mainView.router.loadPage("home.html");
                    }
                    else if(data.status=="2"){
						debugger;
                        myApp.alert("用户名已存在，请重试", "error");
						return;
                        
                    }else if (data.status == "3") {
						debugger;
                        myApp.alert("请输入账号或密码", "error");
						return;
                    }
                    else{
						debugger;
                        myApp.alert("注册失败，请重试","error");
						return;
                       
                    }
                   

                },
                error: function (e) {
                    debugger;
                }
            });
        });
    }
};

