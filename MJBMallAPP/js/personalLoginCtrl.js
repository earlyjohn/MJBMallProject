var personalLoginCtrl = {
    init: function (e) {
        $$('.iconBack').on('click', function () {
            mainView.router.back();
        });
        $$('.loginBtn').on('click', function () {
            var userName = $$("#username").val();
            var password = $$("#password").val();
            if (!userName || !password) {
                myApp.alert("请输入账号或密码", "error")
                return;
            }
           
            $$.ajax({
                type: "POST",
                async: false,
                url: "http://localhost:8080/MJBMall/login/login?username=" + userName + "&password=" + password + "&callback=",
                dataType: "json",
                success: function (data) {
                    debugger;
                    if (data.status == "0") {
                        mainView.router.loadPage("home.html");
                    } else if (data.status == "3") {
                        myApp.alert("请输入账号或密码", "error")
                    } else {
                        myApp.alert("账号或密码错误", "error")
                    }
                    // 渲染模板
                   
                },
                error: function (e) {
                    debugger;
                }
            });
        });
    }
};

