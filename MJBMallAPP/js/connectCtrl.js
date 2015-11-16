/**
 * Created by Administrator on 2015/10/29.
 */
var connectCtrl = {
    init: function (e) {
        // ��������
        var html = "<div class='navbar-inner'><div class='left'>" +
            "<i class='icon spxq_icon-navbar'></i></div><div class='center'>联系我们"
            +"</div><div class='right'></div></div>";
        $$('#connectNavbar').html(html);
        // ����
        $$('.spxq_icon-navbar').on('click', function () {
            mainView.router.back();
        });

        uzu.rest.getJSON("members/findContactUs",{},function(data){
            if(!data.result.contact_us)
                return
            document.getElementById("company_name").innerHTML = "公司名称:"+data.result.contact_us[0].company_name;
            document.getElementById("tel").innerHTML = "电话:"+data.result.contact_us[0].tel;
            document.getElementById("qq").innerHTML = "QQ:"+data.result.contact_us[0].QQ;
            document.getElementById("email").innerHTML = "Email:"+data.result.contact_us[0].email;
            document.getElementById("url").innerHTML = "网址ַ:"+data.result.contact_us[0].url;
            document.getElementById("addr").innerHTML = "地址:"+data.result.contact_us[0].addr;
        });
    }
};

