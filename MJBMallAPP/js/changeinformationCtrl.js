var changeinformationCtrl = {
    init: function (e) {
        // 顶部导航
        var html = '<div class="navbar-inner"><a class="left"><i class="icon spxq_icon-navbar"></i></a>'
            + '<div class="center">修改基本资料</div><div class="right editCart"><a class="link link-u saveBtn" style="color: white">保存</a></div></div>';
        $$('#changeinformationNavbar').html(html);
        var user_id = window.localStorage.getItem("userId");

        uzu.rest.getJSON("/members/getUserinfo", { 'member_id': user_id }, function (data) {

            // 渲染模板
            var context = {};

            context.userList = data.result.userinfoList;

            var userinfoListTemplate = $$('#memberInformationTpl').html();

            var compiledUserinfoListTemplate = Template7.compile(userinfoListTemplate);

            var html = compiledUserinfoListTemplate(context);
            $$('#memberInformation').html(html);

        });

        $$('.saveBtn').on('click', function () {
            var nickname = $$("#nickname").val();

            var sex = $$("#sex").val();
            var income = $$("#income").val();
            var birthday = $$("#birthday").val();
            var tall = $$("#tall").val();
            var degree = $$("#degree").val();
            var marry = $$("#marry").val();
            var phone = $$("#phone").val();
            var buyhouse = $$("#buyhouse").val();
            var address = $$("#address").val();
            if (!nickname) {
                myApp.alert("昵称不能为空", "error")
                return;
            }
            if (!phone) {
                myApp.alert("请输入手机号", "error")
                return;
            }
            if (sex == "男")
                sex = 1;
            if (sex == "女")
                sex = 0;

            uzu.rest.getJSON("/members/saveUserinfo", { 'member_id':user_id, 'nickname':nickname, 'sex':sex, 'birthday':birthday, 'tall':tall, 'income':income, 'address':address, 'degree':degree, 'marry':marry, 'phone': phone, 'buyhouse': buyhouse }, function (result) {

                if (result.result.msg == 1) {

                    mainView.router.loadPage("personalCenter.html");
                }
            
            });
        });

        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });
    }
};

