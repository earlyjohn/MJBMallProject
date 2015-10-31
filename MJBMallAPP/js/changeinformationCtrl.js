var changeinformationCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner"><a class="left"><i class="icon spxq_icon-navbar"></i></a>'
            +'<div class="center">修改基本资料</div><div class="right editCart"><a class="link link-u saveBtn" style="color: white">保存</a></div></div>';
        $$('#changeinformationNavbar').html(html);
        var user_id = window.localStorage.getItem("userId");
        debugger;
        uzu.rest.getJSON("/members/findMembers", { 'member_id': 10 }, function (data) {
            debugger;
            // 渲染模板
            var context = {};
            context = data.membersList[0];
            if (context.email === "demo@demo.demo") {
                context.sexFlag = false;
            } else {
                context.sexFlag = true;
            }
            var cartsListTemplate = $$('#memberInformationTpl').html();
            var compiledCartsListTemplate = Template7.compile(cartsListTemplate);
            var html = compiledCartsListTemplate(context);
            $$('#memberInformation').html(html);
            debugger;
           
        });
        $$('.saveBtn').on('click', function () {
            var userName = $$("#userName").val();
            var sex = $$("#sex").val();
            var birthday = $$("#birthday").val();
            var tall = $$("#tall").val();
            var study = $$("#study").val();
            var marry = $$("#marry").val();
            var cellphone = $$("#cellphone").val();
            var house = $$("#house").val();
            var register = $$("#register").val();
            if (!userName || !cellphone) {
                myApp.alert("请输入昵称或手机号", "error")
                return;
            }
            uzu.rest.getJSON("members/updateMembers", { 'username': userName, 'sex': sex , 'birthday': birthday , 'tall': tall , 'study': study , 'marry': marry , 'cellphone': cellphone , 'house': house , 'register': register }, function (result) {
                debugger;
                if (result.status == "0") {
                    mainView.router.loadPage("home.html");
                } else if (result.status == "3") {
                    myApp.alert("请输入账号或密码", "error")
                } else {
                    myApp.alert("账号或密码错误", "error")
                }
            });
        });

        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

